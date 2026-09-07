/* ============================================================
   DADOS DO EXAME
   As perguntas são carregadas de data/perguntas.json
   ============================================================ */

const QUESTIONS_URL = 'data/perguntas.json';

let SECTIONS_DEZ = [];
let SECTIONS_CAPITAIS = [];
let SECTIONS_IGREJA = [];

let questionDatabaseLoaded = false;

async function loadQuestionDatabase() {

  if (questionDatabaseLoaded) {
    return true;
  }

  try {

    const response = await fetch(
      QUESTIONS_URL,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    if (
      !Array.isArray(data.dezMandamentos) ||
      !Array.isArray(data.pecadosCapitais) ||
      !Array.isArray(data.mandamentosIgreja)
    ) {
      throw new Error(
        'Estrutura inválida em perguntas.json'
      );
    }

    SECTIONS_DEZ = data.dezMandamentos;
    SECTIONS_CAPITAIS = data.pecadosCapitais;
    SECTIONS_IGREJA = data.mandamentosIgreja;

    questionDatabaseLoaded = true;

    console.info(
      'Conteúdo do exame carregado:',
      {
        dezMandamentos: SECTIONS_DEZ.length,
        pecadosCapitais: SECTIONS_CAPITAIS.length,
        mandamentosIgreja: SECTIONS_IGREJA.length
      }
    );

    return true;

  } catch (error) {

    console.error(
      'Não foi possível carregar data/perguntas.json:',
      error
    );

    return false;
  }
}

const CAPITAIS_INTRO_HTML = `
  <p class="cmd-desc" style="margin-top:14px;">Os vícios podem ser classificados segundo as virtudes a que se opõem ou relacionados com os chamados pecados capitais, assim denominados porque geram outros pecados e outros vícios. <strong>(cf. CIC 1866)</strong></p>
  <div class="verse">«Vigiai e orai, para que não entreis em tentação.»<cite>Mt 26,41</cite></div>
  <div class="verse">«Tudo me é permitido, mas nem tudo convém.»<cite>1Cor 6,12</cite></div>
  <div class="verse">«Resisti ao diabo, e ele fugirá de vós.»<cite>Tg 4,7</cite></div>
`;

const CAPITAIS_OUTRO_HTML = `
  <p class="cmd-desc" style="margin-top:14px;">Reconhecer as inclinações desordenadas é apenas o começo. A vida cristã cresce pela graça de Deus, pela oração, pelos sacramentos e pelo exercício das virtudes.</p>
  <ul class="remedy-list">
    <li class="remedy-item"><div class="rt">Vida de oração</div><div class="rq">«Sem Mim nada podeis fazer.» (Jo 15,5)</div></li>
    <li class="remedy-item"><div class="rt">Sagrada Escritura</div><div class="rq">«A tua palavra é lâmpada para os meus passos.» (Sl 119,105)</div></li>
    <li class="remedy-item"><div class="rt">Vida sacramental</div><div class="rq">A graça é participação na vida de Deus. (cf. CIC 1996)</div></li>
    <li class="remedy-item"><div class="rt">Vida fraterna e direção espiritual</div><div class="rq">«Exortai-vos uns aos outros todos os dias.» (Hb 3,13)</div></li>
    <li class="remedy-item"><div class="rt">Virtudes</div><div class="rq">«Revesti-vos do Senhor Jesus Cristo.» (Rm 13,14)</div></li>
  </ul>
  <p style="color:var(--muted); font-size:13px; margin-top:18px;">Examine o coração com sinceridade, confie na misericórdia de Deus e recomece com a sua graça.</p>
`;

/* ============================================================
   DADOS — OS 5 MANDAMENTOS DA IGREJA
   ============================================================ */

const IGREJA_INTRO_HTML = `
  <p class="cmd-desc" style="margin-top:14px;">Os preceitos da Igreja garantem aos fiéis um mínimo indispensável de espírito de oração, vida sacramental, esforço moral e crescimento no amor de Deus e do próximo. <strong>(cf. CIC 2041–2043)</strong></p>
`;

// Frequency options offered after an item is marked.
const FREQ_OPTIONS = [
  { key: "uma_vez", label: "Uma vez" },
  { key: "poucas_vezes", label: "Poucas vezes" },
  { key: "algumas_vezes", label: "Algumas vezes" },
  { key: "muitas_vezes", label: "Muitas vezes" },
  { key: "frequentemente", label: "Frequentemente" },
  { key: "habitualmente", label: "Habitualmente" },
  { key: "nao_precisar", label: "Não recordo o número aproximado" },
  { key: "numero", label: "Número aproximado" }
];


/* ============================================================
   ESTADO SEMÂNTICO, UX PROGRESSIVA, PRIVACIDADE E RELATÓRIO
   ============================================================ */

const STORAGE_KEY = 'confiteor-exam-state-v2';
const NOTES_KEY = 'confiteor-general-notes-v2';
const SELECTION_KEY = 'confiteor-selection-v2';
const LAST_CONFESSION_KEY = 'confiteri-last-confession-v1';
const THEME_KEY = 'confiteor-theme';
const PRIVACY_LOCK_MS = 5 * 60 * 1000;
const PRIVACY_WARNING_MS = 25 * 60 * 1000;
const PRIVACY_CLEAR_MS = 30 * 60 * 1000;

const QUESTION_RELATIONS_URL = 'data/relacoes-perguntas.json';
let questionRelations = { equivalencias: [], relacionados: [] };
let questionRelationsLoaded = false;

async function loadQuestionRelations() {
  if (questionRelationsLoaded) return questionRelations;
  try {
    const response = await fetch(QUESTION_RELATIONS_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    questionRelations = {
      equivalencias: Array.isArray(data.equivalencias) ? data.equivalencias : [],
      relacionados: Array.isArray(data.relacionados) ? data.relacionados : []
    };
  } catch (error) {
    console.warn('Não foi possível carregar as relações entre perguntas:', error);
    questionRelations = { equivalencias: [], relacionados: [] };
  }
  questionRelationsLoaded = true;
  return questionRelations;
}

function blockTypeFromKey(key) {
  if (key.startsWith('dez')) return 'dez';
  if (key.startsWith('cap')) return 'capitais';
  if (key.startsWith('igr')) return 'igreja';
  return '';
}

function relationSelectorMatches(meta, selector) {
  if (!meta || !selector) return false;
  return blockTypeFromKey(meta.key) === selector.bloco
    && String(meta.sec?.num || '') === String(selector.secao || '')
    && String(meta.item?.t || '').trim() === String(selector.pergunta || '').trim();
}

function relationGroupsForKey(key, type = 'equivalencias') {
  const meta = ITEM_REGISTRY[key];
  if (!meta) return [];
  const groups = questionRelations[type] || [];
  return groups.filter(group => (group.itens || []).some(selector => relationSelectorMatches(meta, selector)));
}

function equivalentGroupForKey(key) {
  return relationGroupsForKey(key, 'equivalencias')[0] || null;
}

function relatedGroupsForKey(key) {
  return relationGroupsForKey(key, 'relacionados');
}

function registryKeysForRelationGroup(group) {
  if (!group) return [];
  return Object.keys(ITEM_REGISTRY).filter(key => {
    const meta = ITEM_REGISTRY[key];
    return (group.itens || []).some(selector => relationSelectorMatches(meta, selector));
  });
}

function equivalentKeysForKey(key) {
  const group = equivalentGroupForKey(key);
  return registryKeysForRelationGroup(group).filter(other => other !== key);
}

function questionLocationLabel(key) {
  const meta = ITEM_REGISTRY[key];
  if (!meta) return '';
  if (blockTypeFromKey(key) === 'dez') return `${meta.sec.num}º Mandamento — ${meta.sec.title}`;
  if (blockTypeFromKey(key) === 'capitais') return `${meta.sec.title} — Pecados Capitais`;
  if (blockTypeFromKey(key) === 'igreja') return `${meta.sec.num}º Mandamento da Igreja — ${meta.sec.title}`;
  return meta.sectionTitle || '';
}

function relationNoticeHtml(key) {
  const equivalent = equivalentGroupForKey(key);
  const related = relatedGroupsForKey(key);
  let html = '';

  if (equivalent) {
    const others = registryKeysForRelationGroup(equivalent).filter(k => k !== key);
    const where = others.map(questionLocationLabel).filter(Boolean);
    html += `<div class="question-relation equivalent">
      <strong>🔗 Mesmo ponto moral</strong>
      <span>Esta pergunta trata da mesma falta/ato moral${where.length ? ` também examinado em <strong>${where.map(escapeHtml).join('</strong> e <strong>')}</strong>` : ''}. Para evitar duplicidade, resposta, inclusão, frequência e observação são compartilhadas.</span>
    </div>`;
  }

  related.forEach(group => {
    const others = registryKeysForRelationGroup(group).filter(k => k !== key);
    const where = others.map(questionLocationLabel).filter(Boolean);
    if (!where.length) return;
    html += `<div class="question-relation related">
      <strong>↔ Tema relacionado: ${escapeHtml(group.nome || '')}</strong>
      <span>Também aparece em ${where.map(escapeHtml).join(' e ')}. É um tema próximo, mas não é automaticamente a mesma falta; responda cada pergunta conforme o que realmente se aplica.</span>
    </div>`;
  });

  return html;
}

function syncEquivalentState(sourceKey, { refresh = true } = {}) {
  const group = equivalentGroupForKey(sourceKey);
  if (!group) return;
  const sourceState = { ...getItemState(sourceKey) };
  registryKeysForRelationGroup(group).forEach(key => {
    if (key === sourceKey) return;
    examState[key] = { ...sourceState };
  });
  persistExamState();
  if (refresh) {
    registryKeysForRelationGroup(group).forEach(key => {
      if (key !== sourceKey) {
        const card = document.getElementById('card-' + key);
        if (card) card.innerHTML = renderQuestionCardHtml(key);
      }
    });
    updateTallies();
  }
}


const examState = loadExamState();
const REPORT_SECTIONS = [];
const ITEM_REGISTRY = {};
const STEP_LABELS = { 0: 'Início' };
let current = 0;
let TOTAL_STEPS = 0;
let CONTRITION_STEP = 0;
let DOUBT_STEP = 0;
let REVIEW_STEP = 0;
let FINAL_STEP = 0;

const CIC_GUIDES = {

  capitais: {
    ref: 'CIC 1866',
    text: 'A tradição cristã chama de capitais certos vícios porque geram outros pecados e outros vícios.'
  },

  igreja: {
    ref: 'CIC 2041–2043',
    text: 'Os preceitos da Igreja garantem um mínimo indispensável de vida sacramental, oração e crescimento moral.'
  }

};

function loadExamState() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (_) { return {}; }
}
function persistExamState() {
  try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(examState)); } catch (_) { }
}
function getItemState(key) {
  if (!examState[key]) {
    examState[key] = { answer: null, includeInConfession: false, frequency: null, note: '', decideLater: false };
  }
  return examState[key];
}
function updateItemState(key, changes) {
  examState[key] = { ...getItemState(key), ...changes };
  persistExamState();
  return examState[key];
}
function isItemSelected(key) { return getItemState(key).includeInConfession === true; }
function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch]));
}
function getIndicativeAnswer(item) { return item.indicativeAnswer || 'sim'; }
function getGuide(opts) {

  // Nos Dez Mandamentos, a fundamentação geral
  // agora aparece no cabeçalho da seção.
  if (opts.keyPrefix.startsWith('dez')) {
    return null;
  }

  if (opts.keyPrefix.startsWith('cap')) {
    return CIC_GUIDES.capitais;
  }

  if (opts.keyPrefix.startsWith('igr')) {
    return CIC_GUIDES.igreja;
  }

  return null;
}

/* ============================================================
   COMPONENTES DE PERGUNTA
   ============================================================ */
function frequencyButtonsHtml(key, state) {
  return FREQ_OPTIONS.map(o => {
    const sel = state.frequency?.type === o.key ? ' sel' : '';
    return `<button type="button" class="freq-pill${sel}" data-freq="${o.key}" onclick="onFreqPick('${key}','${o.key}')">${o.label}</button>`;
  }).join('');
}
function renderQuestionCardHtml(key) {
  const meta = ITEM_REGISTRY[key];
  if (!meta) return '';
  const { item, guide } = meta;
  const state = getItemState(key);
  const reportable = item.reportable !== false && !!item.f;
  const indicative = getIndicativeAnswer(item);
  const shouldShowDetails = state.answer === 'duvida' || state.includeInConfession || state.decideLater || !!state.note || !!state.frequency;
  const sentence = item.f || '';
  const noteHidden = ' hidden';
  const numberValue = state.frequency?.type === 'numero' && state.frequency?.n ? state.frequency.n : '';

  let details = '';
  if (shouldShowDetails) {
    let decision = '';
    if (reportable) {
      if (state.answer === 'duvida') {
        decision = `<div class="doubt-help">Uma dúvida não é classificada automaticamente como pecado. Leia a explicação e, se ainda precisar, leve a questão ao sacerdote.</div>
          <div class="include-row">
            <button type="button" class="include-toggle ${state.includeInConfession ? 'included' : ''}" onclick="setInclude('${key}',true)">☑ Incluir na confissão</button>
            <button type="button" class="link-action" onclick="setInclude('${key}',false)">Não incluir</button>
            <button type="button" class="link-action" onclick="setDecideLater('${key}')">Decidir depois</button>
            <span class="include-status">${state.decideLater ? 'Decisão pendente' : state.includeInConfession ? 'Incluído na Confissão' : 'Não incluído'}</span>
          </div>`;
      } else if (state.answer === indicative || state.includeInConfession) {
        decision = `<div class="include-row"><button type="button" class="include-toggle ${state.includeInConfession ? 'included' : ''}" onclick="toggleInclude('${key}')">${state.includeInConfession ? '✓ Incluído na Confissão' : 'Incluir na minha Confissão'}</button><span class="include-status">Resposta e inclusão são decisões separadas.</span></div>`;
      }
    }

    const freq = reportable && state.includeInConfession ? `<div class="freq-inline"><span class="freq-label">Frequência aproximada (opcional)</span>${frequencyButtonsHtml(key, state)}<input type="number" min="1" class="freq-num ${state.frequency?.type === 'numero' ? 'show' : ''}" id="freqnum-${key}" value="${numberValue}" placeholder="Nº" oninput="onFreqNumber('${key}',this.value)"></div>` : '';
    const note = reportable && (state.includeInConfession || state.answer === 'duvida') ? `<div class="item-actions"><button type="button" class="link-action" onclick="toggleItemNote('${key}')">✏️ ${state.note ? 'Editar observação' : 'Adicionar observação (opcional)'}</button></div><div class="item-note" id="note-${key}"${noteHidden}><textarea maxlength="800" placeholder="Escreva aqui alguma informação que você queira lembrar no momento da confissão..." oninput="updateNote('${key}',this.value)">${escapeHtml(state.note || '')}</textarea><div class="item-note-tools"><button type="button" class="link-action" onclick="toggleItemNote('${key}')">Recolher</button><button type="button" class="link-action" onclick="removeNote('${key}')">Remover observação</button></div></div>` : '';
    const help = guide ? `
  <div class="accordion-stack">
    <div class="accordion">

      <button
        class="accordion-trigger"
        type="button"
        aria-expanded="false"
      >
        <span>📖 O que a Igreja ensina?</span>
        <span class="accordion-chevron">⌄</span>
      </button>

      <div class="accordion-panel" hidden>
        <div class="catechism-box">

          <div class="catechism-kicker">
            Referência no Catecismo
          </div>

          <p>${guide.text}</p>

          <div class="catechism-ref">
            ${guide.ref}
          </div>

        </div>
      </div>

    </div>
  </div>
` : '';
    details = `<div class="question-details">${decision}${freq}${note}${help}</div>`;
  }

  const relationNotice = relationNoticeHtml(key);
  return `${item.reportable === false ? '<div class="spiritual-badge">Para aprofundar minha vida espiritual</div>' : ''}<div class="question-text">${item.t}</div>${relationNotice}<div class="answer-row" role="group" aria-label="Resposta"><button type="button" class="answer-btn ${state.answer === 'sim' ? 'selected' : ''}" data-answer="sim" onclick="setAnswer('${key}','sim')">Sim</button><button type="button" class="answer-btn ${state.answer === 'nao' ? 'selected' : ''}" data-answer="nao" onclick="setAnswer('${key}','nao')">Não</button><button type="button" class="answer-btn ${state.answer === 'duvida' ? 'selected' : ''}" data-answer="duvida" onclick="setAnswer('${key}','duvida')">Tenho dúvida</button></div>${details}`;
}
function refreshQuestion(key) {
  const card = document.getElementById('card-' + key);
  if (card) card.innerHTML = renderQuestionCardHtml(key);
  updateTallies();
}
function setAnswer(key, answer) {
  const meta = ITEM_REGISTRY[key];
  if (!meta) return;
  const reportable = meta.item.reportable !== false && !!meta.item.f;
  const indicative = getIndicativeAnswer(meta.item);
  const changes = { answer };
  if (!reportable) { changes.includeInConfession = false; changes.decideLater = false; }
  else if (answer === 'duvida') { changes.includeInConfession = false; changes.decideLater = true; }
  else if (answer === indicative) { changes.includeInConfession = true; changes.decideLater = false; }
  else { changes.includeInConfession = false; changes.decideLater = false; changes.frequency = null; }
  updateItemState(key, changes);
  syncEquivalentState(key, { refresh: false });
  refreshQuestion(key);
  syncEquivalentState(key);
}
function toggleInclude(key) { setInclude(key, !getItemState(key).includeInConfession); }
function setInclude(key, value) {
  updateItemState(key, { includeInConfession: !!value, decideLater: false });
  if (!value) updateItemState(key, { frequency: null });
  syncEquivalentState(key, { refresh: false });
  refreshQuestion(key);
  syncEquivalentState(key);
  if (current === REVIEW_STEP) renderReview();
  if (current === DOUBT_STEP) renderDoubts();
}
function setDecideLater(key) { updateItemState(key, { includeInConfession: false, decideLater: true }); syncEquivalentState(key, { refresh: false }); refreshQuestion(key); syncEquivalentState(key); if (current === DOUBT_STEP) renderDoubts(); }
function toggleItemNote(key) { const el = document.getElementById('note-' + key); if (el) el.hidden = !el.hidden; }
function updateNote(key, value) { updateItemState(key, { note: value }); syncEquivalentState(key, { refresh: false }); if (current === REVIEW_STEP) renderReview(); }
function removeNote(key) { updateItemState(key, { note: '' }); syncEquivalentState(key, { refresh: false }); refreshQuestion(key); syncEquivalentState(key); if (current === REVIEW_STEP) renderReview(); }

function onFreqPick(key, freqKey) {
  const state = getItemState(key);
  if (freqKey === 'numero') updateItemState(key, { frequency: { type: 'numero', n: state.frequency?.type === 'numero' ? state.frequency.n : null } });
  else updateItemState(key, { frequency: { type: freqKey } });
  syncEquivalentState(key, { refresh: false });
  refreshQuestion(key);
  syncEquivalentState(key);
  if (freqKey === 'numero') document.getElementById('freqnum-' + key)?.focus();
  if (current === REVIEW_STEP) renderReview();
}
function onFreqNumber(key, value) { updateItemState(key, { frequency: { type: 'numero', n: value ? parseInt(value, 10) : null } }); syncEquivalentState(key, { refresh: false }); if (current === REVIEW_STEP) renderReview(); }

/* ============================================================
   CONSTRUÇÃO DAS ETAPAS
   ============================================================ */
function renderSectionFoundation(sec) {
  if (!sec.foundation) return '';

  const scripture = sec.foundation.scripture;
  const catechism = sec.foundation.catechism;

  return `
    <div class="accordion commandment-foundation">

      <button
        class="accordion-trigger"
        type="button"
        aria-expanded="false"
      >
        <span>📖 Fundamentação bíblica e catequética</span>
        <span class="accordion-chevron">⌄</span>
      </button>

      <div class="accordion-panel" hidden>

        <div class="catechism-box">

          ${scripture ? `
            <div class="catechism-kicker">
              Na Sagrada Escritura
            </div>

            <p class="scripture-text">
              «${escapeHtml(scripture.text)}»
            </p>

            <div class="catechism-ref">
              ${escapeHtml(scripture.ref)}
            </div>
          ` : ''}

          ${catechism ? `
            <div
              class="catechism-kicker"
              style="margin-top:18px;"
            >
              Catecismo da Igreja Católica
            </div>

            <p>
              ${escapeHtml(catechism.text)}
            </p>

            <div class="catechism-ref">
              ${escapeHtml(catechism.ref)}
            </div>
          ` : ''}

        </div>

      </div>
    </div>
  `;
}

function buildChecklistPage(sec, opts) {
  const section = document.createElement('section');
  section.className = 'step'; section.dataset.step = opts.globalStep;
  let groupsHtml = ''; let itemCount = 0;
  sec.groups.forEach((g, gIdx) => {
    if (g.label) groupsHtml += `<div class="group-label">${g.label}</div>`;
    g.items.forEach((item, iIdx) => {
      itemCount++;
      const key = `${opts.keyPrefix}-g${gIdx}-i${iIdx}`;
      ITEM_REGISTRY[key] = { key, item, sec, groupLabel: g.label, groupName: opts.groupName, sectionTitle: opts.reportTitle, guide: getGuide({ ...opts, secNum: sec.num }) };
      getItemState(key);
      groupsHtml += `<div class="question-card" id="card-${key}">${renderQuestionCardHtml(key)}</div>`;
    });
  });
  section.innerHTML = `
  <div class="cmd-head">

    <div class="cmd-head-top">

      <div class="cmd-num">
        <span class="n">${opts.badge}</span>
        ${opts.chapterLabel}
      </div>

      <div class="cmd-progress">
        ${opts.chapterProgress}
      </div>

    </div>

    <h2>${sec.title || ''}</h2>

    ${sec.subtitle
      ? `<div class="cmd-subtitle">${sec.subtitle}</div>`
      : ''
    }

    ${sec.verse
      ? `<div class="cmd-verse">${sec.verse}</div>`
      : ''
    }

    ${renderSectionFoundation(sec)}

    ${sec.description
      ? `<p class="cmd-desc">${sec.description}</p>`
      : ''
    }

    <div
      class="cmd-tally"
      id="tally-${opts.keyPrefix}"
    >
      0 incluídos
    </div>

  </div>

  ${groupsHtml}

  <div class="nav-buttons">

    <button
      class="btn ghost"
      onclick="goTo(${opts.prevStep})"
    >
      ← Voltar
    </button>

    <button
      class="btn primary"
      onclick="goTo(${opts.nextStep})"
    >
      ${opts.nextLabel}
    </button>

  </div>
`;
  return section;
}
function buildInfoPage(def, globalStep, prevStep, nextStep) {
  const section = document.createElement('section'); section.className = 'step'; section.dataset.step = globalStep;
  section.innerHTML = `<div class="cmd-head-top"><div class="cmd-num"><span class="n">${def.badge}</span> ${def.chapterLabel}</div></div>${def.eyebrow ? `<div class="eyebrow" style="margin-top:12px;">${def.eyebrow}</div>` : ''}<h2 style="font-size:28px;margin-top:6px;">${def.title}</h2>${def.bodyHtml}<div class="nav-buttons"><button class="btn ghost" onclick="goTo(${prevStep})">← Voltar</button><button class="btn primary" onclick="goTo(${nextStep})">${def.nextLabel}</button></div>`;
  return section;
}
function buildAllSteps(sel) {
  const container = document.getElementById('cmd-steps'); container.innerHTML = '';
  REPORT_SECTIONS.length = 0; Object.keys(ITEM_REGISTRY).forEach(k => delete ITEM_REGISTRY[k]);
  const railDefs = [{ step: 0, char: '•', title: 'Início' }]; let stepCounter = 1;
  if (sel.dez) {
    SECTIONS_DEZ.forEach((sec, i) => {
      const globalStep = stepCounter; const kp = `dez${i}`;
      const title = `${sec.num}º Mandamento — ${sec.title}`;
      container.appendChild(buildChecklistPage(sec, { globalStep, keyPrefix: kp, badge: i + 1, chapterLabel: `Mandamento ${sec.num}`, chapterProgress: `Etapa ${i + 1} de ${SECTIONS_DEZ.length}`, prevStep: globalStep - 1, nextStep: globalStep + 1, nextLabel: i === SECTIONS_DEZ.length - 1 ? 'Continuar →' : 'Próximo mandamento →', groupName: 'Dez Mandamentos', reportTitle: title }));
      REPORT_SECTIONS.push({ keyPrefix: kp, sec, group: 'Dez Mandamentos', title }); STEP_LABELS[globalStep] = `${sec.num}º Mandamento`; railDefs.push({ step: globalStep, char: String(i + 1), title, chapterFirst: i === 0 }); stepCounter++;
    });
  }
  if (sel.capitais) {
    let gs = stepCounter; container.appendChild(buildInfoPage({ badge: 'P', chapterLabel: 'Pecados Capitais', eyebrow: 'Conhecer · Discernir · Vencer', title: 'Os 7 Pecados Capitais', bodyHtml: CAPITAIS_INTRO_HTML, nextLabel: 'Começar →' }, gs, gs - 1, gs + 1)); STEP_LABELS[gs] = 'Pecados Capitais'; railDefs.push({ step: gs, char: 'P', title: 'Pecados Capitais', chapterFirst: true }); stepCounter++;
    SECTIONS_CAPITAIS.forEach((sec, i) => { const globalStep = stepCounter, kp = `cap${i}`, title = `${sec.num}º Pecado Capital — ${sec.title}`; container.appendChild(buildChecklistPage(sec, { globalStep, keyPrefix: kp, badge: i + 1, chapterLabel: `Pecado Capital ${sec.num}`, chapterProgress: `Etapa ${i + 1} de ${SECTIONS_CAPITAIS.length}`, prevStep: globalStep - 1, nextStep: globalStep + 1, nextLabel: i === SECTIONS_CAPITAIS.length - 1 ? 'Continuar →' : 'Próximo pecado →', groupName: 'Pecados Capitais', reportTitle: title })); REPORT_SECTIONS.push({ keyPrefix: kp, sec, group: 'Pecados Capitais', title }); STEP_LABELS[globalStep] = sec.title; railDefs.push({ step: globalStep, char: String(i + 1), title }); stepCounter++; });
    gs = stepCounter; container.appendChild(buildInfoPage({ badge: '+', chapterLabel: 'Pecados Capitais', title: 'Para vencer os pecados capitais', bodyHtml: CAPITAIS_OUTRO_HTML, nextLabel: 'Continuar →' }, gs, gs - 1, gs + 1)); STEP_LABELS[gs] = 'Para vencer os pecados capitais'; railDefs.push({ step: gs, char: '+', title: 'Para vencer os pecados capitais' }); stepCounter++;
  }
  if (sel.igreja) {
    let gs = stepCounter; container.appendChild(buildInfoPage({ badge: 'I', chapterLabel: 'Mandamentos da Igreja', eyebrow: 'Viver a fé em comunhão', title: 'Os 5 Mandamentos da Igreja', bodyHtml: IGREJA_INTRO_HTML, nextLabel: 'Começar →' }, gs, gs - 1, gs + 1)); STEP_LABELS[gs] = 'Mandamentos da Igreja'; railDefs.push({ step: gs, char: 'I', title: 'Mandamentos da Igreja', chapterFirst: true }); stepCounter++;
    SECTIONS_IGREJA.forEach((sec, i) => { const globalStep = stepCounter, kp = `igr${i}`, title = `${sec.num}º Mandamento da Igreja — ${sec.title}`; container.appendChild(buildChecklistPage(sec, { globalStep, keyPrefix: kp, badge: i + 1, chapterLabel: `Mandamento da Igreja ${sec.num}`, chapterProgress: `Etapa ${i + 1} de ${SECTIONS_IGREJA.length}`, prevStep: globalStep - 1, nextStep: globalStep + 1, nextLabel: i === SECTIONS_IGREJA.length - 1 ? 'Continuar →' : 'Próximo →', groupName: 'Mandamentos da Igreja', reportTitle: title })); REPORT_SECTIONS.push({ keyPrefix: kp, sec, group: 'Mandamentos da Igreja', title }); STEP_LABELS[globalStep] = `Mandamento da Igreja ${sec.num}`; railDefs.push({ step: globalStep, char: String(i + 1), title }); stepCounter++; });
  }
  CONTRITION_STEP = stepCounter++; DOUBT_STEP = stepCounter++; REVIEW_STEP = stepCounter++; FINAL_STEP = stepCounter++; TOTAL_STEPS = FINAL_STEP;
  STEP_LABELS[CONTRITION_STEP] = 'Arrependimento'; STEP_LABELS[DOUBT_STEP] = 'Revisão de dúvidas'; STEP_LABELS[REVIEW_STEP] = 'Revisão para a Confissão'; STEP_LABELS[FINAL_STEP] = 'Conclusão';
  const contr = document.getElementById('page-contrition'); contr.dataset.step = CONTRITION_STEP; document.getElementById('contrition-progress').textContent = `Etapa ${CONTRITION_STEP} de ${TOTAL_STEPS}`; document.getElementById('btn-contrition-back').onclick = () => goTo(CONTRITION_STEP - 1); document.getElementById('btn-contrition-next').onclick = () => goTo(DOUBT_STEP); railDefs.push({ step: CONTRITION_STEP, char: 'C', title: 'Arrependimento', chapterFirst: true });
  const doubts = document.getElementById('page-doubts'); doubts.dataset.step = DOUBT_STEP; document.getElementById('doubts-progress').textContent = `Etapa ${DOUBT_STEP} de ${TOTAL_STEPS}`; document.getElementById('btn-doubts-back').onclick = () => goTo(CONTRITION_STEP); document.getElementById('btn-doubts-next').onclick = () => goTo(REVIEW_STEP); railDefs.push({ step: DOUBT_STEP, char: '?', title: 'Revisão de dúvidas', chapterFirst: true });
  const review = document.getElementById('page-review'); review.dataset.step = REVIEW_STEP; document.getElementById('review-progress').textContent = `Etapa ${REVIEW_STEP} de ${TOTAL_STEPS}`; document.getElementById('btn-review-back').onclick = () => goTo(DOUBT_STEP); document.getElementById('btn-review-next').onclick = () => goTo(FINAL_STEP); railDefs.push({ step: REVIEW_STEP, char: 'R', title: 'Revisão para a Confissão', chapterFirst: true });
  const final = document.getElementById('page-final'); final.dataset.step = FINAL_STEP; document.getElementById('final-progress').textContent = `Etapa ${FINAL_STEP} de ${TOTAL_STEPS}`; railDefs.push({ step: FINAL_STEP, char: '✓', title: 'Conclusão', chapterFirst: true });
  buildRail(railDefs); persistExamState();
}

function chapterQuestionCount(sections) { let n = 0; sections.forEach(sec => sec.groups.forEach(g => n += g.items.length)); return n; }
function getSelection() { return { dez: document.getElementById('sel-dez').checked, capitais: document.getElementById('sel-capitais').checked, igreja: document.getElementById('sel-igreja').checked }; }
function saveSelection() { try { sessionStorage.setItem(SELECTION_KEY, JSON.stringify(getSelection())); } catch (_) { } }
function restoreSelection() { try { const s = JSON.parse(sessionStorage.getItem(SELECTION_KEY) || 'null'); if (s) { document.getElementById('sel-dez').checked = !!s.dez; document.getElementById('sel-capitais').checked = !!s.capitais; document.getElementById('sel-igreja').checked = !!s.igreja; } } catch (_) { } }

function getLastConfessionData() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(LAST_CONFESSION_KEY) || 'null');
    if (saved && typeof saved === 'object') return saved;
  } catch (_) { }
  return { value: '', other: '' };
}
function saveLastConfession() {
  const select = document.getElementById('last-confession');
  const other = document.getElementById('last-confession-other');
  if (!select) return;
  if (other) other.hidden = select.value !== 'outro';
  try { sessionStorage.setItem(LAST_CONFESSION_KEY, JSON.stringify({ value: select.value, other: other?.value?.trim() || '' })); } catch (_) { }
}
function restoreLastConfession() {
  const data = getLastConfessionData();
  const select = document.getElementById('last-confession');
  const other = document.getElementById('last-confession-other');
  if (!select) return;
  select.value = data.value || '';
  if (other) { other.value = data.other || ''; other.hidden = select.value !== 'outro'; }
}
function lastConfessionPhrase() {
  const data = getLastConfessionData();
  const map = {
    poucos_dias: 'Padre, minha última Confissão foi há poucos dias.',
    algumas_semanas: 'Padre, minha última Confissão foi há algumas semanas.',
    um_mes: 'Padre, minha última Confissão foi há cerca de um mês.',
    alguns_meses: 'Padre, minha última Confissão foi há alguns meses.',
    um_ano: 'Padre, minha última Confissão foi há cerca de um ano.',
    mais_de_um_ano: 'Padre, minha última Confissão foi há mais de um ano.',
    nao_lembro: 'Padre, não me lembro exatamente quando foi minha última Confissão.',
    primeira_confissao: 'Padre, esta é a minha primeira Confissão.'
  };
  if (data.value === 'outro' && data.other) return `Padre, minha última Confissão foi ${data.other.replace(/[.]+$/, '')}.`;
  return map[data.value] || 'Diga ao sacerdote aproximadamente quando foi sua última Confissão.';
}
function hasLastConfessionSelection() {
  const data = getLastConfessionData();
  return !!data.value && (data.value !== 'outro' || !!data.other);
}
function updateSelectionSummary() {
  document.getElementById('count-dez').textContent = chapterQuestionCount(SECTIONS_DEZ) + ' perguntas'; document.getElementById('count-capitais').textContent = chapterQuestionCount(SECTIONS_CAPITAIS) + ' perguntas'; document.getElementById('count-igreja').textContent = chapterQuestionCount(SECTIONS_IGREJA) + ' perguntas';
  const sel = getSelection(); let total = 0, chapters = 0; if (sel.dez) { total += chapterQuestionCount(SECTIONS_DEZ); chapters++; } if (sel.capitais) { total += chapterQuestionCount(SECTIONS_CAPITAIS); chapters++; } if (sel.igreja) { total += chapterQuestionCount(SECTIONS_IGREJA); chapters++; }
  const summary = document.getElementById('picker-summary'), btn = document.getElementById('btn-start');
  const lastOk = hasLastConfessionSelection();
  if (chapters === 0) { summary.textContent = 'Selecione ao menos um bloco para começar.'; btn.disabled = true; }
  else if (!lastOk) { summary.textContent = `${total} perguntas no total. Antes de começar, informe aproximadamente quando foi sua última Confissão.`; btn.disabled = true; }
  else { summary.textContent = `${total} perguntas no total, em ${chapters} ${chapters === 1 ? 'bloco' : 'blocos'}.`; btn.disabled = false; }
  saveSelection(); saveLastConfession();
}
async function startExam() { const sel = getSelection(); if (!sel.dez && !sel.capitais && !sel.igreja) return updateSelectionSummary(); if (!hasLastConfessionSelection()) { updateSelectionSummary(); document.getElementById('last-confession')?.focus(); return; } await loadQuestionRelations(); buildAllSteps(sel); updateTallies(); goTo(1); }

/* ============================================================
   NAVEGAÇÃO E PROGRESSO
   ============================================================ */
function buildRail(defs) { const rail = document.getElementById('rail'); rail.innerHTML = ''; defs.forEach((def, idx) => { const dot = document.createElement('div'); dot.className = 'dot' + (def.chapterFirst ? ' chapter-first' : ''); dot.id = 'dot-' + def.step; dot.textContent = def.char; dot.title = def.title; dot.setAttribute('role', 'button'); dot.tabIndex = 0; dot.onclick = () => goTo(def.step); dot.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goTo(def.step); } }; rail.appendChild(dot); if (idx < defs.length - 1) { const line = document.createElement('div'); line.className = 'line'; line.id = 'line-' + def.step; rail.appendChild(line); } }); }
function updateRail() { for (let i = 0; i <= TOTAL_STEPS; i++) { const dot = document.getElementById('dot-' + i); if (!dot) continue; dot.classList.toggle('active', i === current); dot.classList.toggle('done', i < current); const line = document.getElementById('line-' + i); if (line) line.classList.toggle('done', i < current); } document.getElementById('dot-' + current)?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' }); }
function updateProgressBar() {
  const max = Math.max(TOTAL_STEPS, 1); const pct = Math.max(0, Math.min(100, Math.round((current / max) * 100))); const fill = document.getElementById('progress-fill'); if (fill) fill.style.width = pct + '%'; document.getElementById('progress-percent').textContent = pct + '%'; document.getElementById('progress-label').textContent = STEP_LABELS[current] || 'Exame de consciência'; const remaining = Math.max(TOTAL_STEPS - current, 0); document.getElementById('progress-remaining').textContent = remaining ? `${remaining} ${remaining === 1 ? 'etapa restante' : 'etapas restantes'}` : 'Concluído'; const track = document.querySelector('.progress-track[role="progressbar"]'); track?.setAttribute('aria-valuenow', String(pct));
}
function goTo(step) { step = Math.max(0, Math.min(TOTAL_STEPS, step)); document.querySelectorAll('.step').forEach(s => s.classList.remove('active')); const target = document.querySelector(`.step[data-step="${step}"]`); if (target) target.classList.add('active'); current = step; updateRail(); updateTallies(); updateProgressBar(); if (step === DOUBT_STEP) renderDoubts(); if (step === REVIEW_STEP) renderReview(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function updateTallies() { REPORT_SECTIONS.forEach(rs => { let count = 0, total = 0; rs.sec.groups.forEach((g, gi) => g.items.forEach((item, ii) => { if (item.reportable !== false) total++; const key = `${rs.keyPrefix}-g${gi}-i${ii}`; if (item.reportable !== false && isItemSelected(key)) count++; })); const el = document.getElementById('tally-' + rs.keyPrefix); if (el) el.textContent = `${count} ${count === 1 ? 'incluído' : 'incluídos'} na Confissão`; }); }

/* ============================================================
   DÚVIDAS E REVISÃO
   ============================================================ */
function getDoubtKeys() {

  const seen = new Set();
  const result = [];

  Object.keys(ITEM_REGISTRY)
    .forEach(key => {

      const state =
        getItemState(key);

      if (
        state.answer !== 'duvida' &&
        !state.decideLater
      ) {
        return;
      }

      const equivalent =
        equivalentGroupForKey(key);

      const dedupeKey =
        equivalent
          ? `eq:${equivalent.id}`
          : `item:${key}`;

      if (seen.has(dedupeKey)) {
        return;
      }

      seen.add(dedupeKey);

      result.push(key);
    });

  return result;
}
function getDoubtItems() {
  const out = [];

  getDoubtKeys().forEach(key => {
    const meta = ITEM_REGISTRY[key];
    if (!meta || meta.item?.reportable === false) return;

    const state = getItemState(key);

    out.push({
      key,
      item: meta.item,
      state,
      group: meta.groupName || '',
      sectionTitle: meta.sectionTitle || '',
      question: meta.item.t || '',
      note: state.note || ''
    });
  });

  return out;
}

function renderDoubts() { const body = document.getElementById('doubts-body'); const keys = getDoubtKeys(); if (!keys.length) { body.innerHTML = '<div class="empty-state">Nenhum item ficou pendente. Você pode seguir para a revisão da Confissão.</div>'; return; } body.innerHTML = keys.map(key => { const m = ITEM_REGISTRY[key], s = getItemState(key), g = m.guide; return `<div class="doubt-card"><h4>${m.sectionTitle}</h4><p class="review-sentence">${m.item.t}</p>${g ? `<div class="catechism-box"><div class="catechism-kicker">Referência no Catecismo</div><p>${g.text}</p><div class="catechism-ref">${g.ref}</div></div>` : ''}<div class="review-tools"><button class="btn ${s.includeInConfession ? 'primary' : ''}" onclick="setInclude('${key}',true)">☑ Incluir na Confissão</button><button class="btn" onclick="resolveDoubt('${key}',false)">Não incluir</button><button class="btn ghost" onclick="focusOriginalQuestion('${key}')">Voltar à pergunta</button></div></div>`; }).join(''); }
function resolveDoubt(key, include) {
  updateItemState(key, {
    includeInConfession: !!include,
    decideLater: false
  });

  if (!include) {
    updateItemState(key, {
      frequency: null
    });
  }

  syncEquivalentState(key, {
    refresh: false
  });

  refreshQuestion(key);

  syncEquivalentState(key);

  renderDoubts();
}
function focusOriginalQuestion(key) { const card = document.getElementById('card-' + key); if (!card) return; const step = Number(card.closest('.step')?.dataset.step || 0); goTo(step); setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'center' }), 350); }
function getIncludedItems() {
  const out = [];
  const byMoralGroup = new Map();

  REPORT_SECTIONS.forEach(rs => rs.sec.groups.forEach((g, gi) => g.items.forEach((item, ii) => {
    const key = `${rs.keyPrefix}-g${gi}-i${ii}`;
    const state = getItemState(key);
    if (item.reportable === false || !item.f || !state.includeInConfession) return;

    const equivalent = equivalentGroupForKey(key);
    const dedupeKey = equivalent ? `eq:${equivalent.id}` : `item:${key}`;

    if (byMoralGroup.has(dedupeKey)) {
      const existing = byMoralGroup.get(dedupeKey);
      if (!existing.alsoIn.includes(rs.title)) existing.alsoIn.push(rs.title);
      return;
    }

    const entry = {
      key, item, state, group: rs.group, sectionTitle: rs.title,
      moralGroup: equivalent?.id || null,
      moralName: equivalent?.nome || null,
      alsoIn: []
    };
    byMoralGroup.set(dedupeKey, entry);
    out.push(entry);
  })));

  return out;
}
function frequencyText(freq) { if (!freq || !freq.type || freq.type === 'nao_precisar') return ''; if (freq.type === 'numero') { if (!freq.n) return ''; return `aproximadamente ${freq.n} ${freq.n === 1 ? 'vez' : 'vezes'}`; } const map = { uma_vez: 'uma vez', poucas_vezes: 'poucas vezes', algumas_vezes: 'algumas vezes', muitas_vezes: 'muitas vezes', frequentemente: 'frequentemente', habitualmente: 'habitualmente' }; return map[freq.type] || ''; }
function buildConfessionSentence(frase, freq) { const f = frequencyText(freq); return f ? `${frase} ${f}.` : `${frase}.`; }
function renderReview() {
  const body = document.getElementById('review-body'), items = getIncludedItems(); document.getElementById('rp-total').innerHTML = `${items.length}<span>itens incluídos</span>`; const notes = document.getElementById('notes'); if (notes && !notes.dataset.loaded) { notes.value = sessionStorage.getItem(NOTES_KEY) || ''; notes.dataset.loaded = '1'; }
  if (!items.length) { body.innerHTML = '<div class="empty-state">Você ainda não incluiu nenhum item na Confissão. Volte ao exame ou revise suas dúvidas.</div>'; renderPrintable(); return; }
  const groups = {}; items.forEach(x => { (groups[x.group] ??= []).push(x); }); body.innerHTML = Object.entries(groups).map(([group, list]) => `<div class="report-group-title">${group}</div>${list.map(x => reviewCardHtml(x)).join('')}`).join(''); renderPrintable();
}
function reviewCardHtml(x) {
  const f = frequencyText(x.state.frequency);
  const current = x.state.frequency?.type || 'nao_precisar';
  const opts = FREQ_OPTIONS.map(o => `<option value="${o.key}" ${current === o.key ? 'selected' : ''}>${o.label}</option>`).join('');
  const relationInfo = x.alsoIn?.length ? `<div class="review-relation">🔗 Este mesmo ponto também foi examinado em: ${x.alsoIn.map(escapeHtml).join(' · ')}</div>` : '';
  return `<div class="review-card"><h4>${x.sectionTitle}</h4><p class="review-sentence">${escapeHtml(x.item.f)}${f ? ' — <em>' + escapeHtml(f) + '</em>' : ''}</p>${relationInfo}${x.state.note ? `<div class="review-note">📝 ${escapeHtml(x.state.note)}</div>` : ''}<div class="review-edit-row"><label>Frequência <select onchange="setReviewFrequency('${x.key}',this.value)">${opts}</select></label></div><div class="review-tools"><button class="btn" onclick="editReviewNote('${x.key}')">Editar observação</button><button class="btn ghost" onclick="setInclude('${x.key}',false)">Remover item</button><button class="btn ghost" onclick="focusOriginalQuestion('${x.key}')">Voltar à pergunta</button></div></div>`;
}
function setReviewFrequency(key, type) {

  if (type === 'numero') {

    const atual =
      getItemState(key).frequency?.n || '';

    const n = prompt(
      'Número aproximado de vezes:',
      atual
    );

    if (n === null) {
      renderReview();
      return;
    }

    const parsed = parseInt(n, 10);

    updateItemState(key, {
      frequency: {
        type: 'numero',
        n:
          Number.isFinite(parsed) &&
          parsed > 0
            ? parsed
            : null
      }
    });

  } else {

    updateItemState(key, {
      frequency: { type }
    });
  }

  syncEquivalentState(key, {
    refresh: false
  });

  renderReview();

  refreshQuestion(key);

  syncEquivalentState(key);
}
function editReviewNote(key) {

  const currentNote =
    getItemState(key).note || '';

  const value = prompt(
    'Observação opcional para lembrar na Confissão:',
    currentNote
  );

  if (value !== null) {

    updateItemState(key, {
      note: value.trim()
    });

    syncEquivalentState(key, {
      refresh: false
    });

    renderReview();

    refreshQuestion(key);

    syncEquivalentState(key);
  }
}
function saveGeneralNotes() { try { sessionStorage.setItem(NOTES_KEY, document.getElementById('notes')?.value || ''); } catch (_) { } renderPrintable(); }

/* ============================================================
   PDF / TXT — UMA ÚNICA FONTE DE DADOS
   ============================================================ */
function buildRoteiroSectionsHtml(items, doubts, notes) {
  const grouped = {};
  items.forEach(x => { (grouped[x.group] ??= []).push(x); });

  const sinsHtml = Object.entries(grouped).map(([group, list]) => `
    <div class="rp-block"><h4>${escapeHtml(group)}</h4><ul>${list.map(x => `<li>${escapeHtml(buildConfessionSentence(x.item.f, x.state.frequency))}${x.state.note ? `<br><small><strong>Observação:</strong> ${escapeHtml(x.state.note)}</small>` : ''}</li>`).join('')}</ul></div>`).join('') || '<p>Nenhum item foi incluído na Confissão.</p>';

  const doubtsHtml = doubts.length
    ? `<p>Você marcou estas situações como dúvida. Apresente-as ao sacerdote para receber orientação:</p>
       <ul>${doubts.map(x => `<li><strong>${escapeHtml(x.sectionTitle)}</strong><br>${escapeHtml(x.question)}${x.note ? `<br><small><strong>Observação:</strong> ${escapeHtml(x.note)}</small>` : ''}</li>`).join('')}</ul>`
    : '<p>Nenhuma dúvida ficou registrada.</p>';

  const notesHtml = notes ? `<div class="rp-notes"><strong>Anotação geral:</strong><br>${escapeHtml(notes)}</div>` : '';

  return `
    <div class="rp-block"><h4>1. Início</h4><p>Faça o sinal da cruz: <strong>Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</strong></p><p>${escapeHtml(lastConfessionPhrase())}</p></div>
    <div class="rp-block"><h4>2. Pecados que desejo confessar</h4>${sinsHtml}</div>
    ${notesHtml}
    <div class="rp-block"><h4>3. Dúvidas para apresentar ao sacerdote</h4>${doubtsHtml}</div>
    <div class="rp-block"><h4>4. Para encerrar a acusação</h4><p>Depois de dizer aquilo de que se recorda, você pode concluir: <em>“Por estes pecados e por todos aqueles dos quais não me recordo neste momento, peço perdão a Deus.”</em></p></div>
    <div class="rp-block"><h4>5. Escute o sacerdote</h4><p>Ouça suas orientações e receba a penitência indicada.</p></div>
    <div class="rp-block"><h4>6. Ato de Contrição</h4><p class="rp-contrition">“Meu Deus, eu me arrependo de todo o coração de vos ter ofendido, porque sois tão bom e amável. Prometo, com a vossa graça, esforçar-me para ser bom. Meu Jesus, misericórdia! Amém.”</p></div>
    <div class="rp-block"><h4>7. Absolvição</h4><p>Escute atentamente a absolvição dada pelo sacerdote e, ao final, responda: <strong>Amém.</strong></p></div>
    <div class="rp-block"><h4>8. Depois da Confissão</h4><p>Cumpra a penitência indicada e faça sua ação de graças a Deus.</p></div>`;
}

function renderPrintable() {
  const items = getIncludedItems();
  const doubts = getDoubtItems();
  const notes = (document.getElementById('notes')?.value || sessionStorage.getItem(NOTES_KEY) || '').trim();
  const print = document.getElementById('report-print');
  print.innerHTML = `<div class="rp-head"><h1>Roteiro para minha Confissão</h1><p>Confiteri · ${new Date().toLocaleDateString('pt-BR')}<br>Elaboração e organização: Catequista Rickson Jordan</p></div>${buildRoteiroSectionsHtml(items, doubts, notes)}<p style="font-size:11px;color:#666;">Este roteiro é apenas um auxílio pessoal de memória e não substitui a orientação do sacerdote.</p>`;
}
function printConfession() { renderPrintable(); window.print(); }
function downloadTxt() {
  const items = getIncludedItems();
  const doubts = getDoubtItems();
  const notes = (document.getElementById('notes')?.value || sessionStorage.getItem(NOTES_KEY) || '').trim();
  const grouped = {};

  items.forEach(x => { (grouped[x.group] ??= []).push(x); });

  let out = `ROTEIRO PARA MINHA CONFISSÃO\nConfiteri\n${new Date().toLocaleDateString('pt-BR')}\n\n1. INÍCIO\nFaça o sinal da cruz.\n${lastConfessionPhrase()}\n\n2. PECADOS QUE DESEJO CONFESSAR\n`;

  Object.entries(grouped).forEach(([group, list]) => {
    out += `\n${group.toUpperCase()}\n`;
    list.forEach(x => {
      out += `- ${buildConfessionSentence(x.item.f, x.state.frequency)}\n`;
      if (x.state.note) out += `  Observação: ${x.state.note}\n`;
    });
  });

  if (!items.length) out += 'Nenhum item foi incluído.\n';
  if (notes) out += `\nAnotação geral:\n${notes}\n`;

  out += `\n3. DÚVIDAS PARA APRESENTAR AO SACERDOTE\n`;

  if (doubts.length) {
    doubts.forEach(x => {
      out += `- ${x.sectionTitle}: ${x.question}\n`;
      if (x.note) out += `  Observação: ${x.note}\n`;
    });
  } else {
    out += 'Nenhuma dúvida ficou registrada.\n';
  }

  out += `\n4. PARA ENCERRAR A ACUSAÇÃO\nPor estes pecados e por todos aqueles dos quais não me recordo neste momento, peço perdão a Deus.\n\n5. ESCUTE O SACERDOTE\nOuça suas orientações e receba a penitência.\n\n6. ATO DE CONTRIÇÃO\nMeu Deus, eu me arrependo de todo o coração de vos ter ofendido, porque sois tão bom e amável. Prometo, com a vossa graça, esforçar-me para ser bom. Meu Jesus, misericórdia! Amém.\n\n7. ABSOLVIÇÃO\nEscute atentamente e, ao final, responda: Amém.\n\n8. DEPOIS DA CONFISSÃO\nCumpra a penitência e faça sua ação de graças.\n\nEste roteiro é apenas um auxílio pessoal de memória e não substitui a orientação do sacerdote.\n`;

  const blob = new Blob([out], { type: 'text/plain;charset=utf-8' }),
    url = URL.createObjectURL(blob),
    a = document.createElement('a');

  a.href = url;
  a.download = 'roteiro-para-minha-confissao.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}


/* ============================================================
   MODO CONFISSÃO — OPCIONAL E SEM NOVO ARMAZENAMENTO
   ============================================================ */
let confessionModeIndex = 0;
function confessionModeSteps() {
  const items = getIncludedItems();
  const doubts = getDoubtItems();

  const list = items.length
    ? `<ul class="confession-sins-list">${items.map(x => `<li><label><input type="checkbox"> <span>${escapeHtml(buildConfessionSentence(x.item.f, x.state.frequency))}${x.state.note ? `<small>${escapeHtml(x.state.note)}</small>` : ''}</span></label></li>`).join('')}</ul>`
    : '<div class="empty-state">Nenhum item foi incluído no roteiro.</div>';

  const doubtList = doubts.length
    ? `<ul class="confession-sins-list confession-doubts-list">${doubts.map(x => `<li><span><strong>${escapeHtml(x.sectionTitle)}</strong><br>${escapeHtml(x.question)}${x.note ? `<small>${escapeHtml(x.note)}</small>` : ''}</span></li>`).join('')}</ul>`
    : '<div class="empty-state">Nenhuma dúvida ficou registrada.</div>';

  return [
    { title: '1. Inicie a Confissão', body: `<p>Faça o sinal da cruz:</p><div class="confession-mode-quote">Em nome do Pai, e do Filho, e do Espírito Santo. Amém.</div><p>Depois diga ao sacerdote:</p><div class="confession-mode-quote">${escapeHtml(lastConfessionPhrase())}</div>` },
    { title: '2. Confesse seus pecados', body: `<p>Fale com sinceridade e simplicidade. Use esta lista apenas como auxílio de memória.</p>${list}<p class="field-help">As marcações acima existem somente na tela e não são salvas.</p>` },
    { title: '3. Apresente suas dúvidas', body: `<p>Estas são as situações que você marcou como dúvida. Apresente-as ao sacerdote para receber orientação.</p>${doubtList}` },
    { title: '4. Encerre a acusação', body: `<p>Depois de dizer aquilo de que se recorda, você pode concluir:</p><div class="confession-mode-quote">Por estes pecados e por todos aqueles dos quais não me recordo neste momento, peço perdão a Deus.</div>` },
    { title: '5. Escute o sacerdote', body: `<p>Agora volte sua atenção ao sacerdote. Ele poderá aconselhá-lo, esclarecer alguma dúvida e indicar uma penitência.</p>` },
    { title: '6. Ato de Contrição', body: `<p>Quando for oportuno, manifeste seu arrependimento:</p><div class="confession-mode-quote">Meu Deus, eu me arrependo de todo o coração de vos ter ofendido, porque sois tão bom e amável. Prometo, com a vossa graça, esforçar-me para ser bom. Meu Jesus, misericórdia! Amém.</div>` },
    { title: '7. Receba a absolvição', body: `<p class="confession-focus">Agora volte sua atenção ao sacerdote.</p><p>Escute a absolvição e, ao final, responda:</p><div class="confession-mode-amen">Amém.</div>` },
    { title: '8. Depois da Confissão', body: `<div class="confession-finished">✝️</div><h3>Confissão concluída</h3><p>Dê graças a Deus pelo perdão recebido. Cumpra a penitência indicada assim que for oportuno.</p><div class="post-confession-actions"><button class="btn primary" type="button" onclick="finishConfessionAndClear()">🔒 Encerrar e apagar os dados desta sessão</button><button class="btn" type="button" onclick="closeConfessionMode()">Voltar sem apagar</button></div>` }
  ];
}

function openConfessionMode() { confessionModeIndex = 0; const modal = document.getElementById('confession-mode'); if (!modal) return; modal.hidden = false; document.body.style.overflow = 'hidden'; renderConfessionMode(); }
function closeConfessionMode() { const modal = document.getElementById('confession-mode'); if (modal) modal.hidden = true; document.body.style.overflow = ''; }
function renderConfessionMode() { const steps = confessionModeSteps(); confessionModeIndex = Math.max(0, Math.min(steps.length - 1, confessionModeIndex)); const currentStep = steps[confessionModeIndex]; const body = document.getElementById('confession-mode-body'); if (body) body.innerHTML = `<div class="confession-mode-step"><h3>${currentStep.title}</h3>${currentStep.body}</div>`; const prev = document.getElementById('confession-mode-prev'); const next = document.getElementById('confession-mode-next'); if (prev) prev.hidden = confessionModeIndex === 0 || confessionModeIndex === steps.length - 1; if (next) { next.hidden = confessionModeIndex === steps.length - 1; next.textContent = confessionModeIndex === steps.length - 2 ? 'Recebi a absolvição ✓' : 'Próximo →'; } const fill = document.getElementById('confession-mode-progress-fill'); if (fill) fill.style.width = `${((confessionModeIndex + 1) / steps.length) * 100}%`; }
function confessionModeNext() { const steps = confessionModeSteps(); if (confessionModeIndex < steps.length - 1) confessionModeIndex++; renderConfessionMode(); document.querySelector('.confession-mode-shell')?.scrollTo({ top: 0, behavior: 'smooth' }); }
function confessionModePrev() { if (confessionModeIndex > 0) confessionModeIndex--; renderConfessionMode(); document.querySelector('.confession-mode-shell')?.scrollTo({ top: 0, behavior: 'smooth' }); }
function finishConfessionAndClear() { if (confirm('Encerrar esta sessão e apagar respostas, observações, frequências e progresso deste exame?')) clearSensitiveData(true); }

/* ============================================================
   VÍDEOS E ACORDEÕES
   ============================================================ */
function playVideo(evt, el) { evt.preventDefault(); const id = el.dataset.yt, thumb = el.querySelector('.video-thumb'); if (thumb.classList.contains('is-playing')) return false; thumb.classList.add('is-playing'); thumb.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" title="Vídeo do YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`; return false; }
function initAccordions() { document.addEventListener('click', e => { const btn = e.target.closest('.accordion-trigger'); if (!btn) return; const expanded = btn.getAttribute('aria-expanded') === 'true'; btn.setAttribute('aria-expanded', String(!expanded)); let panel = null; const id = btn.getAttribute('aria-controls'); if (id) panel = document.getElementById(id); else panel = btn.nextElementSibling; if (panel) panel.hidden = expanded; registerActivity(); }); }

/* ============================================================
   TEMA CLARO / ESCURO
   ============================================================ */
function preferredTheme() { const stored = localStorage.getItem(THEME_KEY); if (stored === 'dark' || stored === 'light') return stored; return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
function applyTheme(theme) { document.documentElement.dataset.theme = theme; const btn = document.getElementById('theme-toggle'); if (btn) { btn.textContent = theme === 'dark' ? '☀️' : '🌙'; btn.title = theme === 'dark' ? 'Usar tema claro' : 'Usar tema escuro'; } }
function toggleTheme() { const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; localStorage.setItem(THEME_KEY, next); applyTheme(next); }

/* ============================================================
   PRIVACIDADE, INATIVIDADE E LIMPEZA
   ============================================================ */
let lastActivity = Date.now(), isPrivacyLocked = false;
function registerActivity() { if (!isPrivacyLocked) lastActivity = Date.now(); }
function lockForPrivacy() { if (isPrivacyLocked) return; isPrivacyLocked = true; document.getElementById('privacy-lock').hidden = false; document.body.style.overflow = 'hidden'; }
function unlockPrivacy() { isPrivacyLocked = false; lastActivity = Date.now(); document.getElementById('privacy-lock').hidden = true; document.getElementById('privacy-lock-warning').textContent = ''; document.body.style.overflow = ''; }
function checkInactivity() { const elapsed = Date.now() - lastActivity; if (elapsed >= PRIVACY_LOCK_MS) lockForPrivacy(); if (isPrivacyLocked && elapsed >= PRIVACY_WARNING_MS) { const min = Math.max(0, Math.ceil((PRIVACY_CLEAR_MS - elapsed) / 60000)); document.getElementById('privacy-lock-warning').textContent = `Se a inatividade continuar, os dados desta sessão serão apagados em aproximadamente ${min} ${min === 1 ? 'minuto' : 'minutos'}.`; } if (elapsed >= PRIVACY_CLEAR_MS) { clearSensitiveData(false); } }
function confirmClearData() { if (confirm('Isso apagará respostas, observações, frequências e progresso desta sessão. Deseja continuar?')) clearSensitiveData(true); }
function clearSensitiveData(reload = true) { pauseMeditation(); try { sessionStorage.removeItem(STORAGE_KEY); sessionStorage.removeItem(NOTES_KEY); sessionStorage.removeItem(SELECTION_KEY); sessionStorage.removeItem(LAST_CONFESSION_KEY); } catch (_) { } Object.keys(examState).forEach(k => delete examState[k]); if (reload) location.reload(); else location.reload(); }

/* ============================================================
   PLAYER DE MÚSICA PARA REFLEXÃO
   ============================================================ */
let meditationPlaylist = [], meditationCurrentTrack = 0;
function playerEls(){
  return {
    audio:document.getElementById('meditation-audio'),
    toggle:document.getElementById('meditation-toggle'),
    prev:document.getElementById('meditation-prev'),
    next:document.getElementById('meditation-next'),
    title:document.getElementById('meditation-title'),
    mini:document.getElementById('mini-track-title'),
    select:document.getElementById('meditation-select'),
    volume:document.getElementById('meditation-volume'),

    credit:document.getElementById('music-credit'),
    source:document.getElementById('music-source'),
    license:document.getElementById('music-license'),
    modified:document.getElementById('music-modified')
  };
}
async function loadMeditationPlaylist() {

  const e = playerEls();

  if (!e.audio) return;

  try {

    const r = await fetch(
      'data/musicas.json',
      { cache: 'no-store' }
    );

    if (!r.ok) {
      throw new Error('playlist');
    }

    meditationPlaylist =
      (await r.json())
        .filter(m => m.ativo !== false);


    e.select.innerHTML =
      meditationPlaylist
        .map(
          (m, i) =>
            `<option value="${i}">
              ${escapeHtml(m.titulo)}
              ${
                m.subtitulo
                  ? ' — ' + escapeHtml(m.subtitulo)
                  : ''
              }
            </option>`
        )
        .join('');


    if (meditationPlaylist.length) {

      loadMeditationTrack(0);

    } else {

      e.title.textContent =
        'Nenhuma música disponível';

    }

  } catch (error) {

    console.error(
      'Erro ao carregar músicas:',
      error
    );

    e.title.textContent =
      'Músicas indisponíveis';

  }

}
function loadMeditationTrack(index){

  const e = playerEls();
  const m = meditationPlaylist[index];

  if(!m) return;

  meditationCurrentTrack = index;

  e.audio.src = encodeURI(m.arquivo);

  const label =
    `${m.titulo}${m.subtitulo ? ' — ' + m.subtitulo : ''}`;

  e.title.textContent = label;

  e.mini.textContent = m.titulo;

  e.select.value = String(index);


  /* Créditos */

  if(e.credit){
    e.credit.textContent =
      m.credito || m.subtitulo || 'Não informado';
  }

  if(e.source){
    e.source.textContent =
      m.fonte || 'Fonte';

    e.source.href =
      m.paginaFonte || '#';
  }

  if(e.license){
    e.license.textContent =
      m.licenca || 'Não informada';

    e.license.href =
      m.urlLicenca || '#';
  }

  if(e.modified){
    e.modified.hidden =
      m.modificado !== true;
  }
}
async function playMeditation() { const e = playerEls(); if (!meditationPlaylist.length) return; try { await e.audio.play(); e.toggle.textContent = '⏸'; e.toggle.title = 'Pausar'; } catch (_) { } }
function pauseMeditation() { const e = playerEls(); if (!e.audio) return; e.audio.pause(); e.toggle.textContent = '▶'; e.toggle.title = 'Reproduzir'; }
function nextMeditation(delta = 1) { if (!meditationPlaylist.length) return; loadMeditationTrack((meditationCurrentTrack + delta + meditationPlaylist.length) % meditationPlaylist.length); playMeditation(); }
function openMeditationPlayer() {
  const collapsed =
    document.getElementById('meditation-collapsed');

  const expanded =
    document.getElementById('meditation-expanded');

  if (collapsed) {
    collapsed.hidden = true;
  }

  if (expanded) {
    expanded.hidden = false;
  }
}


function closeMeditationPlayer() {
  const collapsed =
    document.getElementById('meditation-collapsed');

  const expanded =
    document.getElementById('meditation-expanded');

  if (expanded) {
    expanded.hidden = true;
  }

  if (collapsed) {
    collapsed.hidden = false;
  }
}
function initMeditationPlayer() {

  const e = playerEls();

  if (!e.audio) return;


  /* ========================================================
     PLAY / PAUSE
  ======================================================== */

  e.toggle?.addEventListener('click', () => {

    if (e.audio.paused) {
      playMeditation();
    } else {
      pauseMeditation();
    }

  });


  /* ========================================================
     MÚSICA ANTERIOR
  ======================================================== */

  e.prev?.addEventListener('click', () => {
    nextMeditation(-1);
  });


  /* ========================================================
     PRÓXIMA MÚSICA
  ======================================================== */

  e.next?.addEventListener('click', () => {
    nextMeditation(1);
  });


  /* ========================================================
     QUANDO A MÚSICA TERMINAR
  ======================================================== */

  e.audio.addEventListener('ended', () => {
    nextMeditation(1);
  });


  /* ========================================================
     VOLUME
  ======================================================== */

  if (e.volume) {

    e.audio.volume =
      Number(e.volume.value || 0.25);

    e.volume.addEventListener('input', () => {

      e.audio.volume =
        Number(e.volume.value);

    });

  }


  /* ========================================================
     SELEÇÃO MANUAL DA MÚSICA
  ======================================================== */

  e.select?.addEventListener('change', () => {

    const index =
      Number(e.select.value);

    if (!Number.isFinite(index)) return;

    loadMeditationTrack(index);

    playMeditation();

  });


/* ========================================================
   MINIMIZAR / EXPANDIR PLAYER
======================================================== */

const minimize =
  document.getElementById('meditation-minimize');

const expand =
  document.getElementById('meditation-expand');


minimize?.addEventListener(
  'click',
  closeMeditationPlayer
);

expand?.addEventListener(
  'click',
  openMeditationPlayer
);




  /* ========================================================
     CRÉDITOS E LICENÇA
  ======================================================== */

  const creditsToggle =
    document.getElementById(
      'music-credits-toggle'
    );

  const creditsPanel =
    document.getElementById(
      'music-credits-panel'
    );


  if (
    creditsToggle &&
    creditsPanel
  ) {

    creditsToggle.addEventListener(
      'click',
      () => {

        const isOpen =
          !creditsPanel.hidden;

        creditsPanel.hidden =
          isOpen;

        creditsToggle.setAttribute(
          'aria-expanded',
          String(!isOpen)
        );

      }
    );

  }


  /* ========================================================
     CARREGAR PLAYLIST
  ======================================================== */

  loadMeditationPlaylist();

}

/* ============================================================
   RESET VISUAL E INICIALIZAÇÃO
   ============================================================ */
function resetAll() { confirmClearData(); }
async function init() {
  const questionsLoaded =
  await loadQuestionDatabase();

if (!questionsLoaded) {

  console.error(
    'Inicialização interrompida: perguntas não carregadas.'
  );

  const startButton =
    document.getElementById('btn-start');

  if (startButton) {
    startButton.disabled = true;
  }

  const summary =
    document.getElementById('picker-summary');

  if (summary) {
    summary.textContent =
      'Não foi possível carregar o conteúdo do exame. Atualize a página e tente novamente.';
  }

  return;
}
  applyTheme(preferredTheme()); document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme); document.getElementById('clear-data-btn')?.addEventListener('click', confirmClearData); document.getElementById('privacy-continue-btn')?.addEventListener('click', unlockPrivacy);
  ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(ev => window.addEventListener(ev, registerActivity, { passive: true })); setInterval(checkInactivity, 15000);
  initAccordions(); initMeditationPlayer(); loadQuestionRelations(); restoreSelection(); restoreLastConfession(); updateSelectionSummary(); buildRail([{ step: 0, char: '•', title: 'Início' }]); updateRail(); updateProgressBar();
  const notes = document.getElementById('notes'); if (notes) { notes.value = sessionStorage.getItem(NOTES_KEY) || ''; notes.dataset.loaded = '1'; }
}

document.addEventListener('DOMContentLoaded', init);
