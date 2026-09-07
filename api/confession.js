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
    const { error } = await supabase.rpc(
      "register_confession"
    );

    if (error) throw error;

    return res.status(200).json({
      success: true
    });

  } catch (error) {
    console.error(
      "Erro ao registrar confissão:",
      error
    );

    return res.status(500).json({
      success: false
    });
  }
}