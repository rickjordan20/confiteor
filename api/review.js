import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
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

    const numericRating = Number(rating);

    /* =====================================================
       VALIDAÇÃO DA NOTA
       ===================================================== */

    if (
      !Number.isInteger(numericRating) ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      return res.status(400).json({
        success: false,
        error: "A nota deve estar entre 1 e 5."
      });
    }


    /* =====================================================
       NORMALIZAÇÃO
       ===================================================== */

    const safeName =
      String(name)
        .trim()
        .slice(0, 80);

    const safeComment =
      String(comment)
        .trim()
        .slice(0, 500);


    /* =====================================================
       REGRAS DE AUTORIZAÇÃO
       ===================================================== */

    if (
      publishName === true &&
      !safeName
    ) {
      return res.status(400).json({
        success: false,
        error: "Informe um nome para autorizar sua publicação."
      });
    }

    if (
      publishComment === true &&
      !safeComment
    ) {
      return res.status(400).json({
        success: false,
        error: "Informe um comentário para autorizar sua publicação."
      });
    }


    /* =====================================================
       GRAVAR AVALIAÇÃO
       ===================================================== */

    const { error } = await supabase
      .from("reviews")
      .insert({
        rating: numericRating,
        name: safeName || null,
        comment: safeComment || null,
        publish_comment: Boolean(publishComment),
        publish_name: Boolean(publishName),
        approved: Boolean(publishComment)
      });


    if (error) {
      throw error;
    }


    return res.status(200).json({
      success: true
    });

  } catch (error) {

    console.error(
      "Erro ao registrar avaliação:",
      error
    );

    return res.status(500).json({
      success: false,
      error: "Não foi possível registrar a avaliação."
    });
  }
}