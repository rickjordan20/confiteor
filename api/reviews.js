import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

export default async function handler(req, res) {

  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed"
    });
  }

  try {

    /*
     * Esta rota é pública.
     *
     * Ela devolve SOMENTE avaliações:
     *
     * 1. autorizadas para publicação;
     * 2. aprovadas manualmente.
     *
     * Comentários ainda em moderação
     * nunca chegam ao navegador.
     */

    const {
      data,
      error
    } = await supabase
      .from("reviews")
      .select(`
        id,
        rating,
        name,
        comment,
        publish_comment,
        publish_name,
        created_at
      `)
      .eq("approved", true)
      .eq("publish_comment", true)
      .not("comment", "is", null)
      .order("created_at", {
        ascending: false
      })
      .limit(50);


    if (error) {
      throw error;
    }


    /*
     * Proteção adicional:
     * mesmo que o banco tenha um nome,
     * ele só é enviado se houver autorização.
     */
    const reviews =
      (data || []).map(review => ({
        id:
          review.id,

        rating:
          review.rating,

        comment:
          review.comment,

        name:
          review.publish_name
            ? review.name
            : null,

        publish_comment:
          true,

        publish_name:
          Boolean(
            review.publish_name
          ),

        created_at:
          review.created_at
      }));


    return res.status(200).json({
      success: true,
      reviews
    });

  } catch (error) {

    console.error(
      "Erro ao carregar avaliações públicas:",
      error
    );

    return res.status(500).json({
      success: false,
      reviews: [],
      error: "Não foi possível carregar as avaliações."
    });
  }
}