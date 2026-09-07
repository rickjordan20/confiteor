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
    const { source = "direct" } = req.body || {};

    const country =
      req.headers["x-vercel-ip-country"] || "XX";

    const userAgent =
      String(req.headers["user-agent"] || "").toLowerCase();

    /*
     * Ignora agentes automatizados mais óbvios.
     *
     * Isso não substitui uma solução completa de
     * detecção de bots, mas reduz ruído nas métricas.
     */
    const ignoredAgents = [
      "bot",
      "crawler",
      "spider",
      "slurp",
      "bingpreview",
      "facebookexternalhit",
      "telegrambot",
      "discordbot",
      "headless",
      "puppeteer",
      "playwright",
      "vercel"
    ];

    const isAutomated =
      ignoredAgents.some(agent =>
        userAgent.includes(agent)
      );

    if (isAutomated) {
      return res.status(200).json({
        success: true,
        ignored: true
      });
    }

    const { error } = await supabase.rpc(
      "register_visit",
      {
        p_country_code: country,
        p_source: source
      }
    );

    if (error) {
      throw error;
    }

    return res.status(200).json({
      success: true
    });

  } catch (error) {
    console.error(
      "Erro ao registrar visita:",
      error
    );

    return res.status(500).json({
      success: false
    });
  }
}