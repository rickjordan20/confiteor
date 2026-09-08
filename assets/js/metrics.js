/**
 * Confiteri — Métricas anônimas e avaliações públicas
 *
 * Este arquivo NÃO acessa o Supabase diretamente.
 * Toda comunicação com o banco ocorre pelas APIs serverless do Vercel.
 *
 * Nenhuma resposta do exame de consciência é enviada.
 */

/* =========================================================
   UTILITÁRIOS
   ========================================================= */

function escapeHtmlMetrics(value = "") {
  return String(value).replace(
    /[&<>'"]/g,
    char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    }[char])
  );
}

function sanitizeSource(source) {
  if (!source || typeof source !== "string") return "direct";

  return source
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "")
    .slice(0, 50) || "direct";
}

function getTrafficSource() {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source");

  if (utmSource) return sanitizeSource(utmSource);

  const referrer = document.referrer;
  if (!referrer) return "direct";

  try {
    const host = new URL(referrer).hostname.toLowerCase();

    if (host.includes("google")) return "google";
    if (host.includes("instagram")) return "instagram";
    if (host.includes("facebook")) return "facebook";
    if (host.includes("bing")) return "bing";
    if (host.includes("youtube")) return "youtube";

    return "other";
  } catch (_) {
    return "other";
  }
}

/* =========================================================
   VISITAS
   ========================================================= */

async function registerVisit() {
  if (sessionStorage.getItem("confiteri_visit_registered")) return;

  try {
    const response = await fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: getTrafficSource() })
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || `Erro HTTP ${response.status}`);
    }

    sessionStorage.setItem("confiteri_visit_registered", "true");
  } catch (error) {
    console.error("Confiteri: não foi possível registrar a visita.", error);
  }
}

/* =========================================================
   CONFISSÕES REGISTRADAS
   ========================================================= */

async function registerConfession() {
  if (localStorage.getItem("confiteri_confession_registered")) {
    return { success: false, alreadyRegistered: true };
  }

  try {
    const response = await fetch("/api/confession", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || `Erro HTTP ${response.status}`);
    }

    localStorage.setItem("confiteri_confession_registered", "true");

    return { success: true, alreadyRegistered: false };
  } catch (error) {
    console.error("Confiteri: não foi possível registrar a Confissão.", error);
    return { success: false, alreadyRegistered: false };
  }
}

async function handleConfessionButton() {
  const button = document.getElementById("btn-confession-completed");
  const message = document.getElementById("confession-message");

  if (!button || !message) return;

  if (localStorage.getItem("confiteri_confession_registered")) {
    button.disabled = true;
    button.textContent = "✓ Confissão já registrada";
    message.textContent = "Esta Confissão já foi registrada neste dispositivo.";
    message.classList.remove("feedback-error");
    message.classList.add("feedback-success");
    return;
  }

  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = "Registrando...";

  const result = await registerConfession();

  if (result.success || result.alreadyRegistered) {
    button.textContent = result.success
      ? "✓ Confissão registrada"
      : "✓ Confissão já registrada";

    message.textContent = result.success
      ? "Obrigado por registrar este fruto do Confiteri."
      : "Esta Confissão já foi registrada neste dispositivo.";

    message.classList.remove("feedback-error");
    message.classList.add("feedback-success");

    await loadPublicStats();
    return;
  }

  button.disabled = false;
  button.textContent = originalText;
  message.textContent = "Não foi possível registrar agora. Tente novamente.";
  message.classList.remove("feedback-success");
  message.classList.add("feedback-error");
}

/* =========================================================
   ENVIO DE AVALIAÇÕES
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
    return { success: false, error: "Escolha uma nota entre 1 e 5." };
  }

  const safeName = String(name).trim().slice(0, 80);
  const safeComment = String(comment).trim().slice(0, 500);

  try {
    const response = await fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
      throw new Error(data.error || `Erro HTTP ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Confiteri: não foi possível enviar a avaliação.", error);
    return {
      success: false,
      error: "Não foi possível enviar sua avaliação."
    };
  }
}

async function handleReviewSubmit() {
  const button = document.getElementById("btn-submit-review");
  const message = document.getElementById("review-message");

  if (!button || !message) return;

  const rating = Number(document.getElementById("review-rating")?.value);
  const name = document.getElementById("review-name")?.value || "";
  const comment = document.getElementById("review-comment")?.value || "";
  const publishComment =
    document.getElementById("review-publish-comment")?.checked || false;
  const publishName =
    document.getElementById("review-publish-name")?.checked || false;

  message.classList.remove("feedback-success", "feedback-error");

  if (!rating) {
    message.textContent = "Escolha uma nota antes de enviar.";
    message.classList.add("feedback-error");
    return;
  }

  if (publishName && !name.trim()) {
    message.textContent =
      "Informe seu nome ou desmarque a autorização de publicação do nome.";
    message.classList.add("feedback-error");
    return;
  }

  if (publishComment && !comment.trim()) {
    message.textContent =
      "Escreva um comentário ou desmarque a autorização de publicação.";
    message.classList.add("feedback-error");
    return;
  }

  const originalText = button.textContent;
  button.disabled = true;
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

    await loadPublicStats();
    return;
  }

  button.disabled = false;
  button.textContent = originalText;
  message.textContent = result.error || "Não foi possível enviar sua avaliação.";
  message.classList.add("feedback-error");
}

/* =========================================================
   ESTATÍSTICAS PÚBLICAS
   ========================================================= */

async function loadPublicStats() {
  try {
    const response = await fetch("/api/stats", {
      method: "GET",
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP ${response.status}`);
    }

    const stats = await response.json();

    updateStat("stat-visits", stats.visits);
    updateStat("stat-confessions", stats.confessions);
    updateStat("stat-countries", stats.countries);

    const ratingElement = document.getElementById("stat-rating");
    const ratingLabel = document.getElementById("stat-rating-label");
    const testimonialsAverage =
      document.getElementById("testimonials-average");
    const testimonialsTotal =
      document.getElementById("testimonials-total");

    const reviewCount = Number(stats.reviews || 0);

    if (reviewCount > 0) {
      const rating = Number(stats.ratingAverage || 0)
        .toFixed(1)
        .replace(".", ",");

      if (ratingElement) animateText(ratingElement, `★ ${rating}`);

      if (ratingLabel) {
        ratingLabel.textContent =
          `${reviewCount} ${reviewCount === 1 ? "avaliação" : "avaliações"}`;
      }

      if (testimonialsAverage) testimonialsAverage.textContent = rating;

      if (testimonialsTotal) {
        testimonialsTotal.textContent =
          `${reviewCount} ${reviewCount === 1 ? "avaliação" : "avaliações"}`;
      }
    } else {
      if (ratingElement) ratingElement.textContent = "—";
      if (ratingLabel) ratingLabel.textContent = "avaliação média";
      if (testimonialsAverage) testimonialsAverage.textContent = "—";
      if (testimonialsTotal) testimonialsTotal.textContent = "Ainda sem avaliações";
    }
  } catch (error) {
    console.error("Confiteri: erro ao carregar estatísticas.", error);
  }
}

function updateStat(id, value) {
  const element = document.getElementById(id);
  if (!element) return;

  animateNumber(element, Number(value || 0));
}

function animateNumber(element, finalValue) {
  const duration = 700;
  const startTime = performance.now();

  function frame(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(finalValue * eased);

    element.textContent = current.toLocaleString("pt-BR");

    if (progress < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function animateText(element, value) {
  element.style.opacity = "0";

  setTimeout(() => {
    element.textContent = value;
    element.style.transition = "opacity .25s ease";
    element.style.opacity = "1";
  }, 100);
}

/* =========================================================
   AVALIAÇÕES PÚBLICAS
   ========================================================= */

async function loadPublicTestimonials() {
  try {
    const response = await fetch("/api/reviews", {
      method: "GET",
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP ${response.status}`);
    }

    const data = await response.json();
    renderTestimonials(Array.isArray(data.reviews) ? data.reviews : []);
  } catch (error) {
    console.error(
      "Confiteri: não foi possível carregar avaliações públicas.",
      error
    );

    const list = document.getElementById("testimonials-list");

    if (list) {
      list.innerHTML = `
            <div class="empty-state">
              Não foi possível carregar as avaliações agora.
            </div>
          `;
    }
  }
}

function renderTestimonials(reviews = []) {
  const list = document.getElementById("testimonials-list");
  if (!list) return;

  const published = reviews.filter(review =>
    (review.publish_comment === true || review.publishComment === true) &&
    review.comment
  );

  if (!published.length) {
    list.innerHTML = `
          <div class="empty-state">
            Ainda não há comentários autorizados para publicação.
          </div>
        `;
    return;
  }

  list.innerHTML = published.map(review => {
    const rating = Math.max(1, Math.min(5, Number(review.rating) || 5));
    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

    const canPublishName =
      review.publish_name === true || review.publishName === true;

    const name =
      canPublishName && review.name
        ? review.name
        : "Avaliação anônima";

    return `
          <article class="testimonial-card">
            <div
              class="testimonial-card-stars"
              aria-label="${rating} de 5 estrelas"
            >
              ${stars}
            </div>

            <blockquote>
              “${escapeHtmlMetrics(review.comment)}”
            </blockquote>

            <div class="testimonial-meta">
              <strong>${escapeHtmlMetrics(name)}</strong>
            </div>
          </article>
        `;
  }).join("");
}

/* =========================================================
   MODAIS
   ========================================================= */

function setPageModalState(open) {
  document.body.style.overflow = open ? "hidden" : "";
}

function openFeedbackModal(modal) {
  if (!modal) return;
  modal.hidden = false;
  setPageModalState(true);
}

function closeFeedbackModal(modal) {
  if (!modal) return;
  modal.hidden = true;
  setPageModalState(false);
}

function openTestimonialsModal() {
  openFeedbackModal(document.getElementById("testimonials-modal"));
}

function closeTestimonialsModal() {
  closeFeedbackModal(document.getElementById("testimonials-modal"));
}

function initializeFeedbackModals() {
  const confessionModal = document.getElementById("confession-modal");
  const reviewModal = document.getElementById("review-modal");
  const testimonialsModal = document.getElementById("testimonials-modal");

  document
    .getElementById("open-confession-modal")
    ?.addEventListener("click", () => openFeedbackModal(confessionModal));

  document
    .getElementById("open-review-modal")
    ?.addEventListener("click", () => openFeedbackModal(reviewModal));

  [
    document.getElementById("open-testimonials-modal"),
    document.getElementById("open-testimonials-button")
  ]
    .filter(Boolean)
    .forEach(button => {
      button.addEventListener("click", openTestimonialsModal);
    });

  document.querySelectorAll("[data-close-feedback-modal]")
    .forEach(element => {
      element.addEventListener("click", () => {
        closeFeedbackModal(element.closest(".feedback-modal"));
      });
    });

  testimonialsModal
    ?.querySelectorAll("[data-close-testimonials-modal]")
    .forEach(element => {
      element.addEventListener("click", closeTestimonialsModal);
    });

  document
    .getElementById("testimonials-review-button")
    ?.addEventListener("click", () => {
      closeTestimonialsModal();
      openFeedbackModal(reviewModal);
    });

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    if (testimonialsModal && !testimonialsModal.hidden) {
      closeTestimonialsModal();
      return;
    }

    if (confessionModal && !confessionModal.hidden) {
      closeFeedbackModal(confessionModal);
      return;
    }

    if (reviewModal && !reviewModal.hidden) {
      closeFeedbackModal(reviewModal);
    }
  });
}

/* =========================================================
   EVENTOS DOS BOTÕES
   ========================================================= */

function initializeFeedbackArea() {
  const confessionButton =
    document.getElementById("btn-confession-completed");

  const reviewButton =
    document.getElementById("btn-submit-review");

  confessionButton?.addEventListener("click", handleConfessionButton);
  reviewButton?.addEventListener("click", handleReviewSubmit);

  if (
    confessionButton &&
    localStorage.getItem("confiteri_confession_registered")
  ) {
    confessionButton.disabled = true;
    confessionButton.textContent = "✓ Confissão já registrada";
  }
}

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  registerVisit();
  initializeFeedbackArea();
  initializeFeedbackModals();
  loadPublicStats();
  loadPublicTestimonials();
});
