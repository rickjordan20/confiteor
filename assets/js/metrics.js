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
   INTERFACE — CONFISSÃO
   ========================================================= */

async function handleConfessionButton() {
  const button = document.getElementById(
    "btn-confession-completed"
  );

  const message = document.getElementById(
    "confession-message"
  );

  if (!button || !message) {
    return;
  }

  if (
    localStorage.getItem(
      "confiteri_confession_registered"
    )
  ) {
    button.disabled = true;
    button.textContent = "✓ Confissão já registrada";

    message.textContent =
      "Esta Confissão já foi registrada neste dispositivo.";

    message.classList.add("feedback-success");

    return;
  }

  button.disabled = true;

  const originalText = button.textContent;

  button.textContent = "Registrando...";

  const result = await registerConfession();

  if (result.success) {
    button.textContent = "✓ Confissão registrada";

    message.textContent =
      "Obrigado por registrar este fruto do Confiteri.";

    message.classList.remove("feedback-error");
    message.classList.add("feedback-success");

    return;
  }

  if (result.alreadyRegistered) {
    button.textContent = "✓ Confissão já registrada";

    message.textContent =
      "Esta Confissão já foi registrada neste dispositivo.";

    message.classList.remove("feedback-error");
    message.classList.add("feedback-success");

    return;
  }

  button.disabled = false;
  button.textContent = originalText;

  message.textContent =
    "Não foi possível registrar agora. Tente novamente.";

  message.classList.remove("feedback-success");
  message.classList.add("feedback-error");
}


/* =========================================================
   INTERFACE — AVALIAÇÃO
   ========================================================= */

async function handleReviewSubmit() {
  const button =
    document.getElementById("btn-submit-review");

  const rating =
    Number(
      document.getElementById("review-rating")?.value
    );

  const name =
    document.getElementById("review-name")?.value || "";

  const comment =
    document.getElementById("review-comment")?.value || "";

  const publishComment =
    document.getElementById(
      "review-publish-comment"
    )?.checked || false;

  const publishName =
    document.getElementById(
      "review-publish-name"
    )?.checked || false;

  const message =
    document.getElementById("review-message");

  if (!button || !message) {
    return;
  }

  message.classList.remove(
    "feedback-success",
    "feedback-error"
  );

  if (!rating) {
    message.textContent =
      "Escolha uma nota antes de enviar.";

    message.classList.add("feedback-error");
    return;
  }

  /*
   * Se a pessoa autorizar o nome,
   * precisa ter informado um nome.
   */
  if (publishName && !name.trim()) {
    message.textContent =
      "Informe seu nome ou desmarque a autorização de publicação do nome.";

    message.classList.add("feedback-error");
    return;
  }

  /*
   * Se autorizar publicação do comentário,
   * precisa existir um comentário.
   */
  if (publishComment && !comment.trim()) {
    message.textContent =
      "Escreva um comentário ou desmarque a autorização de publicação.";

    message.classList.add("feedback-error");
    return;
  }

  button.disabled = true;

  const originalText = button.textContent;

  button.textContent = "Enviando...";

  const result = await submitReview({
    rating,
    name,
    comment,
    publishComment,
    publishName
  });

  if (result.success) {
    button.textContent = "✓ Avaliação enviada";

    message.textContent =
      "Obrigado pela sua avaliação. Ela ajuda a melhorar o Confiteri.";

    message.classList.add("feedback-success");

    return;
  }

  button.disabled = false;
  button.textContent = originalText;

  message.textContent =
    result.error ||
    "Não foi possível enviar sua avaliação.";

  message.classList.add("feedback-error");
}


/* =========================================================
   EVENTOS
   ========================================================= */

function initializeFeedbackArea() {
  const confessionButton =
    document.getElementById(
      "btn-confession-completed"
    );

  const reviewButton =
    document.getElementById(
      "btn-submit-review"
    );

  if (confessionButton) {
    confessionButton.addEventListener(
      "click",
      handleConfessionButton
    );
  }

  if (reviewButton) {
    reviewButton.addEventListener(
      "click",
      handleReviewSubmit
    );
  }

  /*
   * Caso a Confissão já tenha sido registrada
   * anteriormente neste navegador.
   */
  if (
    confessionButton &&
    localStorage.getItem(
      "confiteri_confession_registered"
    )
  ) {
    confessionButton.disabled = true;

    confessionButton.textContent =
      "✓ Confissão já registrada";
  }
}

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  registerVisit();
  initializeFeedbackArea();
});