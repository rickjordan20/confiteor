import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SECRET_KEY
    );

    const [
      visitsResult,
      confessionsResult,
      reviewsResult
    ] = await Promise.all([
      supabase
        .from("analytics_daily")
        .select("country_code, visits"),

      supabase
        .from("confessions_daily")
        .select("total"),

      supabase
        .from("reviews")
        .select("rating")
    ]);

    if (visitsResult.error) {
      throw visitsResult.error;
    }

    if (confessionsResult.error) {
      throw confessionsResult.error;
    }

    if (reviewsResult.error) {
      throw reviewsResult.error;
    }

    const visits = visitsResult.data || [];
    const confessions = confessionsResult.data || [];
    const reviews = reviewsResult.data || [];

    const totalVisits = visits.reduce(
      (sum, row) => sum + Number(row.visits || 0),
      0
    );

    const totalConfessions = confessions.reduce(
      (sum, row) => sum + Number(row.total || 0),
      0
    );

    const countries = new Set(
      visits
        .map(row => row.country_code)
        .filter(code => code && code !== "XX")
    ).size;

    const totalReviews = reviews.length;

    const ratingAverage =
      totalReviews > 0
        ? reviews.reduce(
            (sum, row) => sum + Number(row.rating || 0),
            0
          ) / totalReviews
        : 0;

    return res.status(200).json({
      visits: totalVisits,
      confessions: totalConfessions,
      countries,
      ratingAverage: Number(ratingAverage.toFixed(1)),
      reviews: totalReviews
    });

  } catch (error) {
    console.error("Erro em /api/stats:", error);

    return res.status(500).json({
      success: false,
      error: "Não foi possível carregar as estatísticas."
    });
  }
}