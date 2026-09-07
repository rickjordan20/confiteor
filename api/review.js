import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const {
      rating,
      name = "",
      comment = "",
      publishComment = false,
      publishName = false
    } = req.body || {};

    if (
      !Number.isInteger(rating) ||
      rating < 1 ||
      rating > 5
    ) {
      return res.status(400).json({
        error: "Avaliação inválida"
      });
    }

    const { error } = await supabase.rpc(
      "submit_review",
      {
        p_rating: rating,
        p_name: name,
        p_comment: comment,
        p_publish_comment: publishComment,
        p_publish_name: publishName
      }
    );

    if (error) throw error;

    return res.status(200).json({
      success: true
    });

  } catch (error) {
    console.error(
      "Erro ao enviar avaliação:",
      error
    );

    return res.status(500).json({
      success: false
    });
  }
}