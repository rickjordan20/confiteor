/**
 * Confiteri — Métricas anônimas
 *
 * Este arquivo NÃO possui acesso direto ao Supabase.
 * Toda comunicação com o banco acontece através
 * das APIs serverless hospedadas no Vercel.
 *
 * Nenhuma resposta do exame de consciência é enviada.
 */

/* =========================================================
   ORIGEM DA VISITA
   ========================================================= */

function getTrafficSource() {
  const params = new URLSearchParams(window.location.search);

  // Prioriza parâmetros UTM
  const utmSource = params.get("utm_source");

  if (utmSource) {
    return sanitizeSource(utmSource);
  }

  // Caso não exista UTM, tenta identificar pelo referrer
  const referrer = document.referrer;

  if (!referrer) {
    return "direct";
  }

  try {
    const host = new URL(referrer).hostname.toLowerCase();

    if (host.includes("google")) {
      return "google";
    }

    if (host.includes("instagram")) {
      return "instagram";
    }

    if (host.includes("facebook")) {
      return "facebook";
    }

    if (host.includes("bing")) {
      return "bing";
    }

    if (host.includes("youtube")) {
      return "youtube";
    }

    return "other";
  } catch (error) {
    return "other";
  }
}


/* =========================================================
   NORMALIZAÇÃO DA ORIGEM
   ========================================================= */

function sanitizeSource(source) {
  if (!source || typeof source !== "string") {
    return "direct";
  }

  return source
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "")
    .slice(0, 50) || "direct";
}


/* =========================================================
   REGISTRAR VISITA
   ========================================================= */

async function registerVisit() {
  /*
   * Evita registrar várias visitas durante
   * a mesma sessão do navegador.
   */
  const alreadyRegistered = sessionStorage.getItem(
    "confiteri_visit_registered"
  );

  if (alreadyRegistered) {
    return;
  }

  const source = getTrafficSource();

  try {
    const response = await fetch("/api/visit", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        source
      })
    });

    if (!response.ok) {
      throw new Error(
        `Erro HTTP ${response.status}`
      );
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(
        "A API não confirmou o registro da visita."
      );
    }

    /*
     * Só registra localmente depois que
     * o servidor confirmar o sucesso.
     */
    sessionStorage.setItem(
      "confiteri_visit_registered",
      "true"
    );

  } catch (error) {
    console.error(
      "Confiteri: não foi possível registrar a visita.",
      error
    );
  }
}


/* =========================================================
   REGISTRAR CONFISSÃO
   ========================================================= */

async function registerConfession() {
  /*
   * Evita que o mesmo navegador registre
   * repetidamente a confirmação.
   */
  const alreadyRegistered = localStorage.getItem(
    "confiteri_confession_registered"
  );

  if (alreadyRegistered) {
    return {
      success: false,
      alreadyRegistered: true
    };
  }

  try {
    const response = await fetch("/api/confession", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(
        `Erro HTTP ${response.status}`
      );
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(
        "A API não confirmou o registro da Confissão."
      );
    }

    localStorage.setItem(
      "confiteri_confession_registered",
      "true"
    );

    return {
      success: true,
      alreadyRegistered: false
    };

  } catch (error) {
    console.error(
      "Confiteri: não foi possível registrar a Confissão.",
      error
    );

    return {
      success: false,
      alreadyRegistered: false
    };
  }
}


/* =========================================================
   ENVIAR AVALIAÇÃO
   ========================================================= */

async function submitReview({
  rating,
  name = "",
  comment = "",
  publishComment = false,
  publishName = false
}) {

  const numericRating = Number(rating);

  if (
    !Number.isInteger(numericRating) ||
    numericRating < 1 ||
    numericRating > 5
  ) {
    return {
      success: false,
      error: "Escolha uma nota entre 1 e 5."
    };
  }

  /*
   * Limites também são aplicados no navegador.
   * O servidor continuará responsável pela
   * validação definitiva.
   */
  const safeName = String(name)
    .trim()
    .slice(0, 80);

  const safeComment = String(comment)
    .trim()
    .slice(0, 500);

  try {
    const response = await fetch("/api/review", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        rating: numericRating,
        name: safeName,
        comment: safeComment,
        publishComment: Boolean(publishComment),
        publishName: Boolean(publishName)
      })
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.error || `Erro HTTP ${response.status}`
      );
    }

    return {
      success: true
    };

  } catch (error) {
    console.error(
      "Confiteri: não foi possível enviar a avaliação.",
      error
    );

    return {
      success: false,
      error: "Não foi possível enviar sua avaliação."
    };
  }
}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  registerVisit();
});