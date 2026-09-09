    /**
     * Confiteri — Exportação pública da base de perguntas
     *
     * Gera uma página própria para leitura, impressão e salvamento em PDF
     * diretamente a partir de /data/perguntas.json.
     *
     * Modos disponíveis:
     * - "questions": somente as perguntas;
     * - "with-formulations": perguntas + formulações para a Confissão.
     */

    const PUBLIC_QUESTIONS_URL = "/data/perguntas.json";

    /* ============================================================
       ENTRADA PRINCIPAL
       ============================================================ */

    /**
     * Carrega a base pública e abre o documento em uma nova aba.
     *
     * @param {"questions"|"with-formulations"} mode
     */
    async function downloadQuestionsPdf(mode = "questions") {
      try {
        const response = await fetch(PUBLIC_QUESTIONS_URL, {
          cache: "no-store"
        });

        if (!response.ok) {
          throw new Error(`Erro HTTP ${response.status}`);
        }

        const data = await response.json();
        const html = buildQuestionsDocument(data, mode);

        const printWindow = window.open("", "_blank");

        if (!printWindow) {
          alert(
            "O navegador bloqueou a abertura do documento. " +
            "Permita pop-ups para o Confiteri e tente novamente."
          );
          return;
        }

        printWindow.document.open();
        printWindow.document.write(html);
        printWindow.document.close();
      } catch (error) {
        console.error(
          "Confiteri: não foi possível gerar a base de perguntas.",
          error
        );

        alert(
          "Não foi possível preparar o documento agora. " +
          "Tente novamente em alguns instantes."
        );
      }
    }

    /* ============================================================
       DOCUMENTO PRINCIPAL
       ============================================================ */

    /**
     * Monta todo o HTML da página de consulta.
     */
    function buildQuestionsDocument(data, mode) {
      const withFormulations = mode === "with-formulations";

      const title = withFormulations
        ? "Base de Perguntas e Formulações para a Confissão"
        : "Base de Perguntas do Exame de Consciência";

      const collections = [
        {
          title: "Dez Mandamentos",
          items: data.dezMandamentos || []
        },
        {
          title: "Sete Pecados Capitais",
          items: data.pecadosCapitais || []
        },
        {
          title: "Cinco Mandamentos da Igreja",
          items: data.mandamentosIgreja || []
        }
      ];

      const body = collections
        .filter(collection => collection.items.length)
        .map(collection =>
          renderQuestionCollection(
            collection.title,
            collection.items,
            withFormulations
          )
        )
        .join("");

      const version = escapePdfHtml(data.versao || "atual");
      const generatedAt = new Date().toLocaleDateString("pt-BR");

      return `
    <!DOCTYPE html>
    <html lang="pt-BR" data-theme="light">

    <head>
      <meta charset="UTF-8">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      >

      <title>${escapePdfHtml(title)} — Confiteri</title>

      <style>
        @page {
          size: A4;
          margin: 18mm 16mm;
        }

        * {
          box-sizing: border-box;
        }

        :root {
          color-scheme: light;
        }

        html[data-theme="dark"] {
          color-scheme: dark;
        }

        body {
          margin: 0;
          background: #fff;
          color: #241b1b;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11pt;
          line-height: 1.5;
        }

        .document {
          max-width: 820px;
          margin: 0 auto;
          padding: 0 20px 30px;
        }

        header {
          padding-bottom: 16px;
          margin-bottom: 26px;
          border-bottom: 2px solid #7a263a;
        }

        .brand {
          color: #7a263a;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        h1 {
          margin: 5px 0 8px;
          color: #4d1725;
          font-family: Georgia, serif;
          font-size: 25px;
          line-height: 1.2;
        }

        .intro {
          margin: 0;
          color: #655b5b;
          font-size: 10.5pt;
        }

        .update {
          margin-top: 8px;
          color: #776b6b;
          font-size: 9pt;
        }

        .collection {
          margin-top: 28px;
        }

        .collection > h2 {
          margin: 0 0 14px;
          padding-bottom: 7px;
          color: #7a263a;
          border-bottom: 1px solid #d9c8c8;
          font-family: Georgia, serif;
          font-size: 19px;
        }

        .section {
          margin: 0 0 22px;
          break-inside: avoid-page;
        }

        .section h3 {
          margin: 0 0 5px;
          color: #4d1725;
          font-size: 14px;
        }

        .references {
          margin-bottom: 9px;
          color: #746767;
          font-size: 9pt;
        }

        .foundation {
          padding: 9px 11px;
          margin: 9px 0 13px;
          background: #faf5e9;
          border-left: 3px solid #b99745;
          color: #241b1b;
          font-size: 9.5pt;
        }

        .group-title {
          margin: 13px 0 6px;
          font-size: 10pt;
          font-weight: 700;
        }

        ol {
          padding-left: 23px;
          margin-top: 7px;
        }

        li {
          margin-bottom: 10px;
          break-inside: avoid;
        }

        .formulation {
          display: block;
          padding: 5px 8px;
          margin-top: 4px;
          background: #faf7f0;
          color: #5f3d23;
          border-radius: 5px;
          font-size: 9.5pt;
        }

        .formulation strong {
          color: #7a263a;
        }

        .spiritual {
          color: #665d5d;
          font-style: italic;
        }

        footer {
          padding-top: 16px;
          margin-top: 30px;
          border-top: 1px solid #ddd;
          color: #766d6d;
          font-size: 8.5pt;
        }

        /* Barra superior da página de consulta */
        .print-actions {
          position: sticky;
          top: 0;
          z-index: 10;

          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;

          padding: 10px;
          margin-bottom: 18px;

          background: #fff;
          border-bottom: 1px solid #ddd;
        }

        button {
          padding: 9px 14px;
          border: 0;
          border-radius: 7px;
          cursor: pointer;
          font-weight: 700;
        }

        .theme-toggle {
          color: #4d1725;
          background: #eee7e7;
          border: 1px solid #d9c8c8;
        }

        .print {
          color: #fff;
          background: #7a263a;
        }

        .close {
          color: #4d1725;
          background: #eee7e7;
        }

        /* ================= TEMA ESCURO ================= */

        html[data-theme="dark"] body {
          background: #120d0c;
          color: #eee5df;
        }

        html[data-theme="dark"] .document {
          color: #eee5df;
        }

        html[data-theme="dark"] .brand,
        html[data-theme="dark"] h1,
        html[data-theme="dark"] .collection > h2,
        html[data-theme="dark"] .section h3 {
          color: #d7ad59;
        }

        html[data-theme="dark"] .intro,
        html[data-theme="dark"] .update,
        html[data-theme="dark"] .references,
        html[data-theme="dark"] .spiritual,
        html[data-theme="dark"] footer {
          color: #b9aaa1;
        }

        html[data-theme="dark"] .foundation,
        html[data-theme="dark"] .formulation {
          background: #271e18;
          color: #eee5df;
        }

        html[data-theme="dark"] .formulation strong {
          color: #d7ad59;
        }

        html[data-theme="dark"] .print-actions {
          background: #1d1513;
          border-color: #50352e;
        }

        html[data-theme="dark"] .close,
        html[data-theme="dark"] .theme-toggle {
          background: #2a201d;
          color: #eee5df;
          border-color: #50352e;
        }

        /* ================= RESPONSIVIDADE ================= */

        @media (max-width: 640px) {
          body {
            font-size: 10.5pt;
          }

          .document {
            padding: 0 16px 24px;
          }

          h1 {
            font-size: 22px;
          }

          .print-actions {
            justify-content: stretch;
          }

          .print-actions button {
            flex: 1 1 auto;
          }
        }

        /* ================= IMPRESSÃO / PDF ================= */

        @media print {
          html,
          html[data-theme="dark"],
          body {
            background: #fff !important;
            color: #241b1b !important;
          }

          .document {
            padding: 0 !important;
            background: #fff !important;
            color: #241b1b !important;
          }

          .brand {
            color: #7a263a !important;
          }

          h1,
          .collection > h2,
          .section h3 {
            color: #4d1725 !important;
          }

          .intro,
          .update,
          .references,
          .spiritual,
          footer {
            color: #655b5b !important;
          }

          .foundation {
            background: #faf5e9 !important;
            color: #241b1b !important;
          }

          .formulation {
            background: #faf7f0 !important;
            color: #5f3d23 !important;
          }

          .formulation strong {
            color: #7a263a !important;
          }

          .print-actions {
            display: none !important;
          }

          a {
            color: inherit !important;
            text-decoration: none !important;
          }
        }
      </style>
    </head>

    <body>

      <div class="print-actions">
        <button
          class="theme-toggle"
          id="document-theme-toggle"
          type="button"
          onclick="toggleDocumentTheme()"
        >
          🌙 Tema escuro
        </button>

        <button
          class="print"
          type="button"
          onclick="window.print()"
        >
          📄 Imprimir / Salvar como PDF
        </button>

        <button
          class="close"
          type="button"
          onclick="window.close()"
        >
          ✕ Fechar
        </button>
      </div>

      <main class="document">

        <header>
          <div class="brand">
            Confiteri
          </div>

          <h1>
            ${escapePdfHtml(title)}
          </h1>

          <p class="intro">
            Material complementar do Confiteri para consulta
            e preparação pessoal para o Sacramento da Reconciliação.
          </p>

          <p class="update">
            Base versão ${version} · Gerada em ${generatedAt}
          </p>
        </header>

        ${body}

      <footer>
        <strong>Confiteri</strong> —
        Exame de Consciência para preparação à Confissão.
        <br>
        www.confiteri.com.br

        <br><br>

        Este material é um auxílio de preparação e não substitui
        o Sacramento da Reconciliação nem a orientação do sacerdote.

        <div class="copyright">
          © ${new Date().getFullYear()} Confiteri · Rickson Jordan.
          Todos os direitos reservados sobre a organização,
          apresentação e desenvolvimento deste material.
          Os textos e referências de terceiros permanecem sujeitos
          aos direitos de seus respectivos autores e fontes.
        </div>
      </footer>

      </main>

      <script>
        function toggleDocumentTheme() {
          const html = document.documentElement;
          const button = document.getElementById("document-theme-toggle");

          const dark = html.dataset.theme !== "dark";

          html.dataset.theme = dark ? "dark" : "light";

          if (button) {
            button.textContent = dark
              ? "☀️ Tema claro"
              : "🌙 Tema escuro";
          }
        }
      </script>

    </body>

    </html>
      `;
    }

    /* ============================================================
       COLEÇÕES E SEÇÕES
       ============================================================ */

    function renderQuestionCollection(
      collectionTitle,
      sections,
      withFormulations
    ) {
      return `
        <section class="collection">
          <h2>${escapePdfHtml(collectionTitle)}</h2>

          ${sections
            .map(section =>
              renderQuestionSection(section, withFormulations)
            )
            .join("")}
        </section>
      `;
    }

    function renderQuestionSection(section, withFormulations) {
      const titlePrefix = section.num
        ? `${section.num}. `
        : "";

      const references = [
        section.verse,
        section.foundation?.catechism?.ref
      ]
        .filter(Boolean)
        .join(" · ");

      const foundation = section.foundation
        ? renderFoundation(section.foundation)
        : "";

      const groups = Array.isArray(section.groups)
        ? section.groups
        : [];

      return `
        <article class="section">

          <h3>
            ${escapePdfHtml(
              titlePrefix + (section.title || "")
            )}
          </h3>

          ${
            references
              ? `
                <div class="references">
                  ${escapePdfHtml(references)}
                </div>
              `
              : ""
          }

          ${foundation}

          ${
            section.description
              ? `
                <p class="spiritual">
                  ${escapePdfHtml(section.description)}
                </p>
              `
              : ""
          }

          ${groups
            .map(group =>
              renderQuestionGroup(group, withFormulations)
            )
            .join("")}

        </article>
      `;
    }

    /* ============================================================
       FUNDAMENTAÇÃO
       ============================================================ */

    function renderFoundation(foundation) {
      const scripture = foundation.scripture;
      const catechism = foundation.catechism;

      if (!scripture && !catechism) {
        return "";
      }

      return `
        <div class="foundation">

          ${
            scripture
              ? `
                <strong>Sagrada Escritura:</strong>
                ${escapePdfHtml(scripture.text || "")}
                ${
                  scripture.ref
                    ? ` (${escapePdfHtml(scripture.ref)})`
                    : ""
                }
                <br>
              `
              : ""
          }

          ${
            catechism
              ? `
                <strong>Catecismo:</strong>
                ${escapePdfHtml(catechism.text || "")}
                ${
                  catechism.ref
                    ? ` (${escapePdfHtml(catechism.ref)})`
                    : ""
                }
              `
              : ""
          }

        </div>
      `;
    }

    /* ============================================================
       GRUPOS E PERGUNTAS
       ============================================================ */

    function renderQuestionGroup(group, withFormulations) {
      const items = Array.isArray(group.items)
        ? group.items
        : [];

      if (!items.length) {
        return "";
      }

      return `
        ${
          group.label
            ? `
              <div class="group-title">
                ${escapePdfHtml(group.label)}
              </div>
            `
            : ""
        }

        <ol>
          ${items
            .map(item =>
              renderPdfQuestion(item, withFormulations)
            )
            .join("")}
        </ol>
      `;
    }

    function renderPdfQuestion(item, withFormulations) {
      const isSpiritual = item.reportable === false;

      return `
        <li class="${isSpiritual ? "spiritual" : ""}">

          ${escapePdfHtml(item.t || "")}

          ${
            withFormulations && item.f
              ? `
                <span class="formulation">
                  <strong>Formulação para a Confissão:</strong>
                  ${escapePdfHtml(item.f)}
                </span>
              `
              : ""
          }

        </li>
      `;
    }

    /* ============================================================
       SEGURANÇA DE SAÍDA
       ============================================================ */

    /**
     * Evita que qualquer conteúdo textual do JSON seja interpretado
     * como HTML no documento gerado.
     */
    function escapePdfHtml(value = "") {
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
