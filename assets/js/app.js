/* ============================================================
   DADOS — DEZ MANDAMENTOS
   ============================================================ */
const SECTIONS_DEZ = [
  {
    num:"1", title:"Eu sou o Senhor teu Deus, não terás outro Deus além de mim",
    verse:"«Não terás outros deuses perante Mim.» (Ex 20,3)",
    groups:[
      { label:"Para examinar a consciência", items:[
        { t:"Tenho colocado conscientemente alguma pessoa, bem, poder, sucesso, dinheiro ou prática acima de Deus?", f:"Coloquei outras realidades acima de Deus" },
        { t:"Tenho abandonado deliberadamente a oração e a relação com Deus por indiferença ou rejeição?", f:"Negligenciei deliberadamente minha relação com Deus" },
        { t:"Tenho procurado adivinhação, cartomancia, horóscopos, médiuns, espiritismo, magia, feitiçaria ou práticas supersticiosas?", f:"Procurei práticas de adivinhação, espiritismo, magia ou superstição" },
        { t:"Tenho usado amuletos ou objetos atribuindo-lhes poder supersticioso?", f:"Usei amuletos ou objetos de modo supersticioso" },
        { t:"Tenho alimentado voluntariamente o desespero, recusando confiar na misericórdia de Deus, ou a presunção de obter perdão sem conversão?", f:"Alimentei voluntariamente desespero ou presunção diante de Deus" },
        { t:"Tenho rejeitado deliberadamente uma verdade da fé que reconheço ser ensinada pela Igreja?", f:"Rejeitei deliberadamente uma verdade da fé ensinada pela Igreja" }
      ]},
      { label:"Para aprofundar minha vida espiritual", items:[
        { t:"Tenho procurado crescer na oração e na confiança em Deus?", reportable:false },
        { t:"Tenho buscado conhecer melhor a Sagrada Escritura e a fé da Igreja?", reportable:false }
      ]}
    ]
  },
  {
    num:"2", title:"Não invocar o Santo Nome de Deus em vão",
    verse:"«Não pronunciarás em vão o nome do Senhor, teu Deus.» (Ex 20,7)",
    groups:[{ label:null, items:[
      { t:"Tenho usado deliberadamente o nome de Deus de modo irreverente, ofensivo ou desrespeitoso?", f:"Usei o nome de Deus de modo irreverente ou desrespeitoso" },
      { t:"Tenho blasfemado contra Deus, Nossa Senhora, os santos ou as coisas sagradas?", f:"Blasfemei contra Deus ou contra as coisas sagradas" },
      { t:"Tenho feito juramento falso ou invocado Deus como testemunha de uma mentira?", f:"Fiz juramento falso ou invoquei Deus como testemunha de uma mentira" },
      { t:"Tenho feito promessas a Deus sem intenção séria de cumpri-las?", f:"Fiz promessas a Deus sem intenção séria de cumpri-las" }
    ]}]
  },
  {
    num:"3", title:"Santificar os Domingos e Festas de Guarda",
    verse:"«Recorda-te do dia de sábado, para o santificar.» (Ex 20,8)",
    groups:[
      { label:"Para examinar a consciência", items:[
        { t:"Faltei à Santa Missa em domingo ou dia santo de guarda sem motivo sério?", f:"Faltei à Santa Missa em domingo ou dia santo de guarda sem motivo sério" },
        { t:"Por minha culpa, cheguei tão atrasado ou saí tão cedo da Missa que deixei de participar de parte importante da celebração?", f:"Por minha culpa, deixei de participar de parte importante da Missa por atraso ou saída antecipada" },
        { t:"Tenho realizado ou exigido sem necessidade trabalhos e atividades que impedem o culto devido a Deus, a alegria própria do Dia do Senhor ou o descanso adequado?", f:"Realizei ou exigi sem necessidade atividades que impediram a adequada santificação do Dia do Senhor" }
      ]},
      { label:"Para aprofundar minha vida espiritual", items:[
        { t:"Tenho procurado reservar no domingo tempo para Deus, para a família, para o descanso e para obras de caridade?", reportable:false }
      ]}
    ]
  },
  {
    num:"4", title:"Honrar Pai e Mãe",
    verse:"«Honra teu pai e tua mãe.» (Ex 20,12)",
    groups:[
      { label:"Filhos", items:[
        { t:"Tenho tratado meus pais ou responsáveis com grave desrespeito, desprezo ou ingratidão?", f:"Tratei meus pais ou responsáveis com desrespeito, desprezo ou ingratidão" },
        { t:"Sendo ainda dependente deles, desobedeci deliberadamente em matéria justa e importante?", f:"Desobedeci deliberadamente aos meus pais ou responsáveis em matéria justa e importante" },
        { t:"Tenho negligenciado, segundo minhas possibilidades, a ajuda devida aos meus pais na necessidade, doença, solidão ou velhice?", f:"Negligenciei a ajuda devida aos meus pais em suas necessidades" },
        { t:"Tenho me recusado, sem motivo justo, a buscar reconciliação em conflitos familiares?", f:"Recusei-me sem motivo justo a buscar reconciliação em conflitos familiares" }
      ]},
      { label:"Pais e responsáveis", items:[
        { t:"Tenho negligenciado as necessidades materiais, afetivas, educativas ou religiosas dos filhos sob minha responsabilidade?", f:"Negligenciei necessidades importantes dos filhos sob minha responsabilidade" },
        { t:"Tenho dado mau exemplo grave aos meus filhos por minhas palavras ou atitudes?", f:"Dei mau exemplo grave aos meus filhos por minhas palavras ou atitudes" },
        { t:"Tenho corrigido meus filhos com violência, humilhação ou severidade injusta?", f:"Corrigi meus filhos com violência, humilhação ou severidade injusta" },
        { t:"Tenho sido omisso quando uma correção prudente e necessária era minha responsabilidade?", f:"Fui omisso em correções necessárias sob minha responsabilidade" }
      ]},
      { label:"Autoridade, trabalho e sociedade", items:[
        { t:"Tenho tratado empregados, subordinados ou colegas com injustiça, exploração ou desrespeito à sua dignidade?", f:"Tratei trabalhadores ou colegas com injustiça, exploração ou desrespeito" },
        { t:"Tenho sido gravemente desonesto ou negligente no cumprimento de meus deveres profissionais?", f:"Fui gravemente desonesto ou negligente em meus deveres profissionais" },
        { t:"Tenho desobedecido legitimamente constituídas autoridades em matéria justa sem motivo proporcional?", f:"Desobedeci a uma autoridade legítima em matéria justa sem motivo proporcional" }
      ]}
    ]
  },
  {
    num:"5", title:"Não Matar",
    verse:"«Não matarás.» (Ex 20,13)",
    description:"Pensamentos involuntários de autolesão ou suicídio não devem ser tratados automaticamente como pecado. Se você estiver passando por esse sofrimento, procure apoio de uma pessoa de confiança, de profissionais qualificados e também do sacerdote.",
    groups:[{ label:null, items:[
      { t:"Tenho alimentado deliberadamente ódio grave, desejo de vingança ou desejo sério de mal contra alguém?", f:"Alimentei deliberadamente ódio grave, desejo de vingança ou desejo sério de mal contra alguém" },
      { t:"Tenho agredido alguém física ou verbalmente de modo injusto?", f:"Agredi alguém física ou verbalmente de modo injusto" },
      { t:"Pratiquei, incentivei, pressionei ou cooperei diretamente para a realização de um aborto?", f:"Pratiquei, incentivei, pressionei ou cooperei diretamente para a realização de um aborto" },
      { t:"Pratiquei ou cooperei diretamente com a eutanásia?", f:"Pratiquei ou cooperei diretamente com a eutanásia" },
      { t:"Coloquei deliberadamente minha própria vida ou a vida de outros em grave risco sem motivo proporcional?", f:"Coloquei deliberadamente minha vida ou a vida de outros em grave risco sem motivo proporcional" },
      { t:"Abusei de álcool ou drogas de modo a causar grave dano ou risco a mim ou a outras pessoas?", f:"Abusei de álcool ou drogas causando grave dano ou risco" },
      { t:"Dirigi ou agi de maneira gravemente imprudente, expondo pessoas a risco sério?", f:"Agi de maneira gravemente imprudente, expondo pessoas a risco sério" },
      { t:"Maltratei animais ou causei-lhes sofrimento desnecessário?", f:"Maltratei animais ou lhes causei sofrimento desnecessário" }
    ]}]
  },
  {
    num:"6", title:"Não cometer o Adultério",
    verse:"«Não cometerás adultério.» (Ex 20,14)",
    groups:[{ label:null, items:[
      { t:"Tenho praticado masturbação?", f:"Pratiquei masturbação" },
      { t:"Tenho procurado ou consumido pornografia deliberadamente?", f:"Procurei ou consumi pornografia deliberadamente" },
      { t:"Tenho praticado relações ou atos sexuais fora do matrimônio?", f:"Pratiquei relações ou atos sexuais fora do matrimônio" },
      { t:"Cometi adultério?", f:"Cometi adultério" },
      { t:"Tenho recorrido à prostituição ou contribuído para sua exploração?", f:"Recorri à prostituição ou contribuí para sua exploração" },
      { t:"Tenho praticado deliberadamente atos sexuais contrários à castidade segundo o ensinamento da Igreja?", f:"Pratiquei deliberadamente atos sexuais contrários à castidade" },
      { t:"No matrimônio, tenho recorrido deliberadamente à contracepção, separando o ato conjugal de sua abertura à vida?", f:"No matrimônio, recorri deliberadamente à contracepção" },
      { t:"Tenho usado conversas, mensagens, imagens ou redes sociais para comportamento sexualmente impróprio?", f:"Usei conversas, mensagens, imagens ou redes sociais para comportamento sexualmente impróprio" }
    ]}]
  },
  {
    num:"7", title:"Não Roubar",
    verse:"«Não furtarás.» (Ex 20,15)",
    groups:[{ label:null, items:[
      { t:"Tenho furtado, roubado ou me apropriado injustamente do que pertence a outra pessoa?", f:"Furtei, roubei ou me apropriei injustamente do que pertencia a outra pessoa" },
      { t:"Tenho retido deliberadamente algo emprestado ou devido quando podia restituí-lo?", f:"Retive deliberadamente algo emprestado ou devido quando podia restituí-lo" },
      { t:"Tenho danificado injustamente bens alheios?", f:"Danifiquei injustamente bens alheios" },
      { t:"Tenho praticado fraude, engano ou desonestidade em estudos, trabalho, contratos ou negócios?", f:"Pratiquei fraude, engano ou desonestidade em estudos, trabalho, contratos ou negócios" },
      { t:"Tenho deixado deliberadamente de pagar salário, dívida, imposto ou obrigação justa que eu podia cumprir?", f:"Deixei deliberadamente de cumprir obrigação econômica justa que eu podia cumprir" },
      { t:"Tenho explorado trabalhadores ou obtido vantagem injusta em negociações?", f:"Explorei trabalhadores ou obtive vantagem injusta em negociações" },
      { t:"Tendo obrigação de reparar ou restituir um dano injusto, recusei-me a fazê-lo podendo?", f:"Recusei-me a reparar ou restituir um dano injusto quando podia fazê-lo" }
    ]}]
  },
  {
    num:"8", title:"Não levantar falsos testemunhos",
    verse:"«Não levantarás falso testemunho contra o teu próximo.» (Ex 20,16)",
    groups:[{ label:null, items:[
      { t:"Tenho mentido deliberadamente para enganar alguém?", f:"Menti deliberadamente para enganar alguém" },
      { t:"Tenho dado falso testemunho ou cometido perjúrio?", f:"Dei falso testemunho ou cometi perjúrio" },
      { t:"Tenho feito juízo temerário, admitindo como verdadeira uma falta moral do próximo sem fundamento suficiente?", f:"Fiz juízo temerário sobre o próximo" },
      { t:"Tenho revelado, sem razão objetivamente válida, faltas ou defeitos verdadeiros de alguém a quem não os conhecia?", f:"Revelei sem razão válida faltas ou defeitos alheios, prejudicando sua reputação" },
      { t:"Tenho feito acusações falsas que prejudicaram a reputação de alguém?", f:"Fiz acusações falsas que prejudicaram a reputação de alguém" },
      { t:"Tenho revelado segredos ou informações confidenciais sem justa causa?", f:"Revelei segredos ou informações confidenciais sem justa causa" },
      { t:"Tenho manipulado a verdade ou difundido informações sem cuidado, causando dano injusto à reputação de alguém, inclusive nas redes sociais?", f:"Manipulei ou difundi informações causando dano injusto à reputação de alguém" }
    ]}]
  },
  {
    num:"9", title:"Guardar castidade nos pensamentos e nos desejos",
    verse:"«Todo aquele que olhar para uma mulher, desejando-a, já cometeu adultério com ela no seu coração.» (Mt 5,28)",
    groups:[{ label:null, items:[
      { t:"Tenho consentido deliberadamente em pensamentos ou fantasias sexualmente impuras?", f:"Consenti deliberadamente em pensamentos ou fantasias sexualmente impuras" },
      { t:"Tenho alimentado voluntariamente desejos sexuais desordenados em relação a alguém?", f:"Alimentei voluntariamente desejos sexuais desordenados" },
      { t:"Tenho procurado deliberadamente olhares, imagens ou situações com a intenção de alimentar desejos impuros?", f:"Procurei deliberadamente olhares, imagens ou situações para alimentar desejos impuros" }
    ]}]
  },
  {
    num:"10", title:"Não cobiçar as coisas alheias",
    verse:"«Não cobiçarás [...] coisa alguma que pertença ao teu próximo.» (Ex 20,17)",
    groups:[{ label:null, items:[
      { t:"Tenho desejado de modo desordenado apropriar-me dos bens ou vantagens de outra pessoa?", f:"Cobicei de modo desordenado os bens ou vantagens de outra pessoa" },
      { t:"Tenho sentido inveja deliberadamente alimentada diante dos bens ou prosperidade do próximo?", f:"Alimentei inveja diante dos bens ou da prosperidade do próximo" },
      { t:"Tenho desejado que outra pessoa perca seus bens, posição ou vantagens para que eu os tenha?", f:"Desejei que outra pessoa perdesse bens ou vantagens para que eu os tivesse" },
      { t:"Tenho alimentado apego desordenado às riquezas ou desejo desmedido de acumulá-las?", f:"Alimentei apego desordenado às riquezas ou desejo desmedido de acumulá-las" }
    ]}]
  }
];

/* ============================================================
   DADOS — OS 7 PECADOS CAPITAIS
   ============================================================ */
const SECTIONS_CAPITAIS = [
  {
    num:"1", title:"Soberba", subtitle:"Desordem pela qual a pessoa se exalta indevidamente e resiste à humildade.",
    verse:"«Deus resiste aos soberbos, mas dá a sua graça aos humildes.» (Tg 4,6)",
    groups:[{ label:null, items:[
      { t:"Tenho me colocado deliberadamente acima dos outros, desprezando-os?", f:"Coloquei-me acima dos outros e os desprezei" },
      { t:"Tenho recusado reconhecer meus erros por orgulho?", f:"Recusei reconhecer meus erros por orgulho" },
      { t:"Tenho rejeitado correções justas apenas por orgulho?", f:"Rejeitei correções justas por orgulho" },
      { t:"Tenho desprezado os dons ou capacidades dos outros para me sentir superior?", f:"Desprezei os dons ou capacidades dos outros para me sentir superior" },
      { t:"Tenho buscado elogios, prestígio ou reconhecimento de modo desordenado?", f:"Busquei elogios, prestígio ou reconhecimento de modo desordenado" },
      { t:"Tenho me considerado espiritualmente superior aos outros?", f:"Considerei-me espiritualmente superior aos outros" }
    ]}]
  },
  {
    num:"2", title:"Avareza", subtitle:"Apego desordenado aos bens e às riquezas.",
    verse:"«Onde está o teu tesouro, aí estará também o teu coração.» (Mt 6,21)",
    groups:[{ label:null, items:[
      { t:"Tenho me apegado de modo desordenado ao dinheiro ou aos bens?", f:"Apeguei-me de modo desordenado ao dinheiro ou aos bens" },
      { t:"Tenho recusado injustamente ajudar quem tinha necessidade quando eu podia fazê-lo?", f:"Recusei injustamente ajudar quem tinha necessidade quando eu podia fazê-lo" },
      { t:"Tenho colocado o dinheiro ou os bens acima de deveres importantes para com Deus e o próximo?", f:"Coloquei dinheiro ou bens acima de deveres importantes para com Deus e o próximo" },
      { t:"Tenho sido mesquinho ou injustamente fechado à partilha?", f:"Fui mesquinho ou injustamente fechado à partilha" },
      { t:"Tenho buscado segurança como se dependesse somente dos bens materiais?", f:"Busquei segurança como se dependesse somente dos bens materiais" }
    ]}]
  },
  {
    num:"3", title:"Luxúria", subtitle:"Desejo ou busca desordenada do prazer sexual.",
    verse:"«Fugi da imoralidade.» (1Cor 6,18)",
    groups:[{ label:null, items:[
      { t:"Tenho consentido deliberadamente em pensamentos ou fantasias sexualmente impuras?", f:"Consenti deliberadamente em pensamentos ou fantasias sexualmente impuras" },
      { t:"Tenho procurado deliberadamente pornografia ou outros estímulos para alimentar a luxúria?", f:"Procurei deliberadamente pornografia ou outros estímulos para alimentar a luxúria" },
      { t:"Tenho praticado masturbação?", f:"Pratiquei masturbação" },
      { t:"Tenho praticado atos sexuais fora do matrimônio?", f:"Pratiquei atos sexuais fora do matrimônio" },
      { t:"Tenho buscado deliberadamente ocasiões próximas de pecado contra a castidade?", f:"Busquei deliberadamente ocasiões próximas de pecado contra a castidade" }
    ]}]
  },
  {
    num:"4", title:"Ira", subtitle:"Movimento desordenado de cólera que pode levar ao ódio, à vingança ou à violência.",
    verse:"«Todo o homem seja pronto para ouvir, lento para falar e lento para se irar.» (Tg 1,19)",
    groups:[{ label:null, items:[
      { t:"Tenho alimentado deliberadamente raiva, ressentimento ou rancor contra alguém?", f:"Alimentei deliberadamente raiva, ressentimento ou rancor contra alguém" },
      { t:"Tenho desejado vingança injusta?", f:"Desejei vingança injusta" },
      { t:"Tenho tratado alguém com agressividade injusta nas palavras ou atitudes?", f:"Tratei alguém com agressividade injusta nas palavras ou atitudes" },
      { t:"Tenho recusado perdoar interiormente, alimentando deliberadamente o ódio?", f:"Recusei perdoar interiormente e alimentei deliberadamente o ódio" }
    ]}]
  },
  {
    num:"5", title:"Gula", subtitle:"Falta desordenada de temperança no comer ou beber.",
    verse:"«Não só de pão vive o homem.» (Mt 4,4)",
    groups:[{ label:null, items:[
      { t:"Tenho buscado comida ou bebida de modo habitualmente desordenado, sem a devida temperança?", f:"Busquei comida ou bebida de modo habitualmente desordenado, sem a devida temperança" },
      { t:"Tenho usado bebidas alcoólicas de modo excessivo ou imprudente?", f:"Usei bebidas alcoólicas de modo excessivo ou imprudente" },
      { t:"Tenho deliberadamente prejudicado deveres importantes ou a saúde por falta grave de moderação no comer ou beber?", f:"Prejudiquei deveres importantes ou a saúde por falta grave de moderação no comer ou beber" }
    ]}]
  },
  {
    num:"6", title:"Inveja", subtitle:"Tristeza diante do bem do outro e desejo desordenado de possuí-lo ou de que o outro o perca.",
    verse:"«Alegrai-vos com os que se alegram.» (Rm 12,15)",
    groups:[{ label:null, items:[
      { t:"Tenho alimentado tristeza ou ressentimento porque outra pessoa recebeu um bem, dom ou sucesso?", f:"Alimentei tristeza ou ressentimento diante do bem, dom ou sucesso de outra pessoa" },
      { t:"Tenho desejado que alguém perca um bem, posição ou vantagem por inveja?", f:"Desejei que alguém perdesse um bem, posição ou vantagem por inveja" },
      { t:"Tenho diminuído ou desvalorizado alguém por inveja de suas qualidades ou conquistas?", f:"Diminuí ou desvalorizei alguém por inveja de suas qualidades ou conquistas" },
      { t:"Tenho me alegrado deliberadamente com o fracasso de alguém por inveja?", f:"Alegrei-me deliberadamente com o fracasso de alguém por inveja" }
    ]}]
  },
  {
    num:"7", title:"Preguiça / Acídia", subtitle:"Negligência ou resistência diante do bem e dos deveres que devem ser realizados.",
    verse:"«Tudo o que fizerdes, fazei-o de coração, como para o Senhor.» (Cl 3,23)",
    groups:[{ label:null, items:[
      { t:"Tenho negligenciado deliberadamente deveres importantes por comodismo ou preguiça?", f:"Negligenciei deliberadamente deveres importantes por comodismo ou preguiça" },
      { t:"Tenho adiado repetidamente o bem que sabia dever realizar, causando prejuízo real?", f:"Adiei repetidamente o bem que sabia dever realizar, causando prejuízo real" },
      { t:"Tenho abandonado deliberadamente a oração ou deveres espirituais importantes por acídia ou indiferença?", f:"Abandonei deliberadamente a oração ou deveres espirituais importantes por acídia ou indiferença" },
      { t:"Tenho sido desleixado no estudo, trabalho, família ou missão quando esses deveres exigiam meu esforço?", f:"Fui desleixado em deveres de estudo, trabalho, família ou missão" },
      { t:"Tenho faltado à perseverança no bem simplesmente por recusar o esforço que ele exigia?", f:"Faltei à perseverança no bem por recusar o esforço que ele exigia" }
    ]}]
  }
];

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
const SECTIONS_IGREJA = [
  {
    num:"1", title:"Ouvir missa inteira e abster-se de trabalhos servis nos domingos e festas de guarda",
    subtitle:"O primeiro preceito da Igreja.",
    verse:"«Este é o dia que o Senhor fez: exultemos e alegremo-nos nele.» (Sl 118,24)",
    description:"Este preceito exige santificar os domingos e festas de guarda, sobretudo participando da celebração eucarística e evitando trabalhos e ocupações que impeçam a santificação desses dias. (cf. CIC 2042)",
    groups:[
      { label:"Para examinar o preceito", items:[
        { t:"Faltei à Missa em domingo ou festa de guarda sem motivo sério?", f:"Faltei à Missa em domingo ou festa de guarda sem motivo sério" },
        { t:"Tenho realizado sem necessidade trabalhos ou ocupações que impedem a santificação desses dias?", f:"Realizei sem necessidade trabalhos ou ocupações que impediram a santificação de domingos ou festas de guarda" }
      ]},
      { label:"Para aprofundar minha vida espiritual", items:[
        { t:"Tenho procurado viver o domingo como Dia do Senhor, reservando tempo para Deus, a família, o descanso e a caridade?", reportable:false }
      ]}
    ]
  },
  {
    num:"2", title:"Confessar-se ao menos uma vez em cada ano",
    subtitle:"O segundo preceito da Igreja.",
    verse:"«Àqueles a quem perdoardes os pecados, ser-lhes-ão perdoados.» (Jo 20,23)",
    description:"Este preceito assegura a preparação para a Eucaristia pela recepção do sacramento da Reconciliação. A obrigação anual se refere especialmente à confissão dos pecados graves. (cf. CIC 2042; cân. 989)",
    groups:[
      { label:"Para examinar o preceito", items:[
        { t:"Tendo consciência de pecado grave, deixei passar um ano sem receber o sacramento da Reconciliação?", f:"Tendo consciência de pecado grave, deixei passar um ano sem receber o sacramento da Reconciliação" }
      ]},
      { label:"Para aprofundar minha vida espiritual", items:[
        { t:"Tenho feito exame de consciência com sinceridade antes de me confessar?", reportable:false },
        { t:"Tenho procurado receber regularmente o sacramento da Reconciliação, também para crescer espiritualmente?", reportable:false }
      ]}
    ]
  },
  {
    num:"3", title:"Comungar ao menos pela Páscoa da Ressurreição",
    subtitle:"O terceiro preceito da Igreja.",
    verse:"«Quem come a minha carne e bebe o meu sangue permanece em Mim e Eu nele.» (Jo 6,56)",
    description:"Este preceito garante um mínimo na recepção da Eucaristia, em ligação com o tempo pascal. (cf. CIC 2042)",
    groups:[
      { label:"Para examinar o preceito", items:[
        { t:"Deixei de receber a Sagrada Comunhão ao menos no tempo pascal, sem causa legítima?", f:"Deixei de receber a Sagrada Comunhão ao menos no tempo pascal, sem causa legítima" },
        { t:"Recebi deliberadamente a Sagrada Comunhão tendo consciência de pecado grave sem antes me confessar, salvo a exceção prevista pela Igreja?", f:"Recebi deliberadamente a Sagrada Comunhão tendo consciência de pecado grave sem antes me confessar" }
      ]},
      { label:"Para aprofundar minha vida espiritual", items:[
        { t:"Tenho me preparado com fé e recolhimento para receber a Eucaristia?", reportable:false },
        { t:"Tenho agradecido a Cristo pelo dom da Eucaristia?", reportable:false }
      ]}
    ]
  },
  {
    num:"4", title:"Guardar abstinência e jejuar nos dias determinados pela Igreja",
    subtitle:"O quarto preceito da Igreja.",
    verse:"«Convertei-vos a Mim de todo o coração, com jejuns, lágrimas e lamentos.» (Jl 2,12)",
    description:"Este preceito assegura tempos de ascese e penitência. Sua aplicação concreta deve respeitar a disciplina vigente da Igreja e as normas particulares aplicáveis no Brasil. (cf. CIC 2043; cân. 1249–1253)",
    groups:[
      { label:"Para examinar o preceito", items:[
        { t:"Estando sujeito à obrigação e sem motivo legítimo, deixei de observar o jejum nos dias prescritos pela Igreja?", f:"Sem motivo legítimo, deixei de observar o jejum em dia prescrito pela Igreja" },
        { t:"Estando sujeito à obrigação e sem motivo legítimo, deixei de observar a abstinência ou a forma de penitência determinada pela Igreja?", f:"Sem motivo legítimo, deixei de observar a abstinência ou a forma de penitência determinada pela Igreja" }
      ]},
      { label:"Para aprofundar minha vida espiritual", items:[
        { t:"Tenho vivido as práticas penitenciais com espírito de conversão, oração e caridade?", reportable:false }
      ]}
    ]
  },
  {
    num:"5", title:"Prover as necessidades da Igreja, segundo os legítimos usos e costumes e as determinações",
    subtitle:"O quinto preceito da Igreja.",
    verse:"«Deus ama quem dá com alegria.» (2Cor 9,7)",
    description:"Os fiéis têm a obrigação de prover às necessidades materiais da Igreja segundo as possibilidades de cada um. (cf. CIC 2043)",
    groups:[
      { label:"Para examinar o preceito", items:[
        { t:"Tenho me recusado, sem motivo justo e podendo fazê-lo, a contribuir segundo minhas possibilidades para as necessidades materiais da Igreja?", f:"Recusei-me sem motivo justo, podendo fazê-lo, a contribuir segundo minhas possibilidades para as necessidades materiais da Igreja" }
      ]},
      { label:"Para aprofundar minha vida espiritual", items:[
        { t:"Tenho procurado colaborar também com meu tempo e talentos na missão da Igreja, conforme minhas possibilidades e vocação?", reportable:false }
      ]}
    ]
  }
];

const IGREJA_INTRO_HTML = `
  <p class="cmd-desc" style="margin-top:14px;">Os preceitos da Igreja garantem aos fiéis um mínimo indispensável de espírito de oração, vida sacramental, esforço moral e crescimento no amor de Deus e do próximo. <strong>(cf. CIC 2041–2043)</strong></p>
`;

// Frequency options offered after an item is marked.
const FREQ_OPTIONS = [
  { key:"uma_vez",        label:"Uma vez" },
  { key:"poucas_vezes",   label:"Poucas vezes" },
  { key:"algumas_vezes",  label:"Algumas vezes" },
  { key:"muitas_vezes",   label:"Muitas vezes" },
  { key:"frequentemente", label:"Frequentemente" },
  { key:"habitualmente",  label:"Habitualmente" },
  { key:"nao_precisar",   label:"Não recordo o número aproximado" },
  { key:"numero",         label:"Número aproximado" }
];

const answers = {};       // key -> true/false (marked or not)
const frequencies = {};   // key -> { type: "muitas_vezes" | "numero" | ..., n?: number }
const REPORT_SECTIONS = []; // populated at build time: {keyPrefix, sec, group, title, tallyId}
let current = 0;
let TOTAL_STEPS = 0;
let CONTRITION_STEP = 0;
let REPORT_STEP = 0;

/* ============================================================
   CONSTRUÇÃO DAS PÁGINAS (etapas do assistente)
   ============================================================ */
function buildChecklistPage(sec, opts){
  const section = document.createElement('section');
  section.className = 'step';
  section.dataset.step = opts.globalStep;

  let groupsHtml = '';
  let itemCount = 0;
  sec.groups.forEach((g, gIdx) => {
    if (g.label) groupsHtml += `<div class="group-label">${g.label}</div>`;
    g.items.forEach((item, iIdx) => {
      itemCount++;
      const key = `${opts.keyPrefix}-g${gIdx}-i${iIdx}`;
      const reportable = item.reportable !== false;
      const pills = FREQ_OPTIONS.map(o =>
        `<button type="button" class="freq-pill" data-freq="${o.key}" onclick="onFreqPick('${key}','${o.key}')">${o.label}</button>`
      ).join('');
      groupsHtml += `
        <div class="qwrap${reportable ? '' : ' reflection'}" id="wrap-${key}">
          <label class="q" data-key="${key}">
            <input type="checkbox" id="${key}" onchange="onCheck('${key}', this.checked)">
            <span class="txt">${item.t}</span>
          </label>
          ${reportable ? `<div class="freq-row" id="freq-${key}">
            <span class="freq-label">Quantas vezes, aproximadamente?</span>
            ${pills}
            <input type="number" min="1" class="freq-num" id="freqnum-${key}" placeholder="Nº" oninput="onFreqNumber('${key}', this.value)">
          </div>` : `<div class="reflection-note">Reflexão espiritual: este item não é acrescentado automaticamente à lista para a Confissão.</div>`}
        </div>`;
    });
  });

  section.innerHTML = `
    <div class="cmd-head">
      <div class="cmd-head-top">
        <div class="cmd-num"><span class="n">${opts.badge}</span> ${opts.chapterLabel}</div>
        <div class="cmd-progress">${opts.chapterProgress}</div>
      </div>
      <h2>${sec.title}</h2>
      ${sec.subtitle ? `<div class="cmd-subtitle">${sec.subtitle}</div>` : ''}
      <div class="cmd-verse">${sec.verse}</div>
      ${sec.description ? `<p class="cmd-desc">${sec.description}</p>` : ''}
      <div class="cmd-tally" id="tally-${opts.keyPrefix}">0 de ${itemCount} marcados</div>
    </div>
    ${groupsHtml}
    <div class="nav-buttons">
      <button class="btn ghost" onclick="goTo(${opts.prevStep})">← Voltar</button>
      <button class="btn primary" onclick="goTo(${opts.nextStep})">${opts.nextLabel}</button>
    </div>
  `;
  return section;
}

function buildInfoPage(def, globalStep, prevStep, nextStep){
  const section = document.createElement('section');
  section.className = 'step';
  section.dataset.step = globalStep;
  section.innerHTML = `
    <div class="cmd-head-top">
      <div class="cmd-num"><span class="n">${def.badge}</span> ${def.chapterLabel}</div>
    </div>
    ${def.eyebrow ? `<div class="eyebrow" style="margin-top:12px;">${def.eyebrow}</div>` : ''}
    <h2 style="font-size:28px; margin-top:6px;">${def.title}</h2>
    ${def.bodyHtml}
    <div class="nav-buttons">
      <button class="btn ghost" onclick="goTo(${prevStep})">← Voltar</button>
      <button class="btn primary" onclick="goTo(${nextStep})">${def.nextLabel}</button>
    </div>
  `;
  return section;
}

function buildAllSteps(sel){
  const container = document.getElementById('cmd-steps');
  container.innerHTML = '';
  REPORT_SECTIONS.length = 0;
  const railDefs = []; // {step, char, title, chapterFirst}

  // cover is already in the DOM as step 0
  railDefs.push({ step:0, char:'•', title:'Início' });

  let stepCounter = 1;

  // ---- Dez Mandamentos ----
  if (sel.dez){
    SECTIONS_DEZ.forEach((sec, i) => {
      const globalStep = stepCounter;
      const el = buildChecklistPage(sec, {
        globalStep, keyPrefix:`dez${i}`, badge:i+1,
        chapterLabel:`Mandamento ${sec.num}`,
        chapterProgress:`Etapa ${i+1} de ${SECTIONS_DEZ.length}`,
        prevStep: globalStep-1, nextStep: globalStep+1,
        nextLabel: i===SECTIONS_DEZ.length-1 ? 'Continuar →' : 'Próximo mandamento →'
      });
      container.appendChild(el);
      REPORT_SECTIONS.push({ keyPrefix:`dez${i}`, sec, group:'Dez Mandamentos', title:`${sec.num}º Mandamento — ${sec.title}` });
      railDefs.push({ step:globalStep, char:String(i+1), title:`Mandamento ${sec.num} — ${sec.title}`, chapterFirst:i===0 });
      stepCounter++;
    });
  }

  // ---- Pecados Capitais ----
  if (sel.capitais){
    // intro
    {
      const globalStep = stepCounter;
      const el = buildInfoPage({
        badge:'P', chapterLabel:'Pecados Capitais',
        eyebrow:'Conhecer · Discernir · Vencer',
        title:'Os 7 Pecados Capitais',
        bodyHtml: CAPITAIS_INTRO_HTML,
        nextLabel:'Começar →'
      }, globalStep, globalStep-1, globalStep+1);
      container.appendChild(el);
      railDefs.push({ step:globalStep, char:'P', title:'Os 7 Pecados Capitais', chapterFirst:true });
      stepCounter++;
    }

    // 7 seções
    SECTIONS_CAPITAIS.forEach((sec, i) => {
      const globalStep = stepCounter;
      const el = buildChecklistPage(sec, {
        globalStep, keyPrefix:`cap${i}`, badge:i+1,
        chapterLabel:`Pecado Capital ${sec.num}`,
        chapterProgress:`Etapa ${i+1} de ${SECTIONS_CAPITAIS.length}`,
        prevStep: globalStep-1, nextStep: globalStep+1,
        nextLabel: i===SECTIONS_CAPITAIS.length-1 ? 'Continuar →' : 'Próximo pecado →'
      });
      container.appendChild(el);
      REPORT_SECTIONS.push({ keyPrefix:`cap${i}`, sec, group:'Pecados Capitais', title:`${sec.num}º Pecado Capital — ${sec.title}` });
      railDefs.push({ step:globalStep, char:String(i+1), title:`Pecado Capital — ${sec.title}` });
      stepCounter++;
    });

    // para vencer (outro)
    {
      const globalStep = stepCounter;
      const el = buildInfoPage({
        badge:'+', chapterLabel:'Pecados Capitais',
        title:'Para vencer os pecados capitais',
        bodyHtml: CAPITAIS_OUTRO_HTML,
        nextLabel:'Continuar →'
      }, globalStep, globalStep-1, globalStep+1);
      container.appendChild(el);
      railDefs.push({ step:globalStep, char:'+', title:'Para vencer os pecados capitais' });
      stepCounter++;
    }
  }

  // ---- Mandamentos da Igreja ----
  if (sel.igreja){
    // intro
    {
      const globalStep = stepCounter;
      const el = buildInfoPage({
        badge:'I', chapterLabel:'Mandamentos da Igreja',
        eyebrow:'Viver a fé em comunhão',
        title:'Os 5 Mandamentos da Igreja',
        bodyHtml: IGREJA_INTRO_HTML,
        nextLabel:'Começar →'
      }, globalStep, globalStep-1, globalStep+1);
      container.appendChild(el);
      railDefs.push({ step:globalStep, char:'I', title:'Os 5 Mandamentos da Igreja', chapterFirst:true });
      stepCounter++;
    }

    // 5 seções
    SECTIONS_IGREJA.forEach((sec, i) => {
      const globalStep = stepCounter;
      const el = buildChecklistPage(sec, {
        globalStep, keyPrefix:`igr${i}`, badge:i+1,
        chapterLabel:`Mandamento da Igreja ${sec.num}`,
        chapterProgress:`Etapa ${i+1} de ${SECTIONS_IGREJA.length}`,
        prevStep: globalStep-1, nextStep: globalStep+1,
        nextLabel: i===SECTIONS_IGREJA.length-1 ? 'Continuar →' : 'Próximo →'
      });
      container.appendChild(el);
      REPORT_SECTIONS.push({ keyPrefix:`igr${i}`, sec, group:'Mandamentos da Igreja', title:`${sec.num}º Mandamento da Igreja — ${sec.title}` });
      railDefs.push({ step:globalStep, char:String(i+1), title:`Mandamento da Igreja — ${sec.title}` });
      stepCounter++;
    });
  }

  // ---- Contrição e Relatório (já existem no HTML) ----
  CONTRITION_STEP = stepCounter;
  REPORT_STEP = stepCounter + 1;
  TOTAL_STEPS = REPORT_STEP;

  const pageContrition = document.getElementById('page-contrition');
  pageContrition.dataset.step = CONTRITION_STEP;
  document.getElementById('contrition-progress').textContent = `Etapa ${CONTRITION_STEP} de ${TOTAL_STEPS}`;
  document.getElementById('btn-contrition-back').onclick = () => goTo(CONTRITION_STEP-1);
  document.getElementById('btn-contrition-next').onclick = () => goTo(REPORT_STEP);
  railDefs.push({ step:CONTRITION_STEP, char:'C', title:'Arrependimento', chapterFirst:true });

  const pageReport = document.getElementById('page-report');
  pageReport.dataset.step = REPORT_STEP;
  document.getElementById('report-progress').textContent = `Etapa ${REPORT_STEP} de ${TOTAL_STEPS}`;
  document.getElementById('btn-report-back').onclick = () => goTo(CONTRITION_STEP);
  railDefs.push({ step:REPORT_STEP, char:'R', title:'Relatório', chapterFirst:true });

  buildRail(railDefs);
}

/* ============================================================
   SELEÇÃO DE BLOCOS (capa)
   ============================================================ */
function chapterQuestionCount(sections){
  let n = 0;
  sections.forEach(sec => sec.groups.forEach(g => n += g.items.length));
  return n;
}

function getSelection(){
  return {
    dez: document.getElementById('sel-dez').checked,
    capitais: document.getElementById('sel-capitais').checked,
    igreja: document.getElementById('sel-igreja').checked
  };
}

function updateSelectionSummary(){
  document.getElementById('count-dez').textContent = chapterQuestionCount(SECTIONS_DEZ) + ' perguntas';
  document.getElementById('count-capitais').textContent = chapterQuestionCount(SECTIONS_CAPITAIS) + ' perguntas';
  document.getElementById('count-igreja').textContent = chapterQuestionCount(SECTIONS_IGREJA) + ' perguntas';

  const sel = getSelection();
  let total = 0, chapters = 0;
  if (sel.dez){ total += chapterQuestionCount(SECTIONS_DEZ); chapters++; }
  if (sel.capitais){ total += chapterQuestionCount(SECTIONS_CAPITAIS); chapters++; }
  if (sel.igreja){ total += chapterQuestionCount(SECTIONS_IGREJA); chapters++; }

  const summary = document.getElementById('picker-summary');
  const btn = document.getElementById('btn-start');
  if (chapters === 0){
    summary.textContent = 'Selecione ao menos um bloco para começar.';
    if (btn) btn.disabled = true;
  } else {
    const blocoLabel = chapters === 1 ? 'bloco' : 'blocos';
    summary.textContent = `${total} perguntas no total, em ${chapters} ${blocoLabel}.`;
    if (btn) btn.disabled = false;
  }
}

/* ============================================================
   VÍDEOS RECOMENDADOS (player embutido sob demanda)
   ============================================================ */
function playVideo(evt, el){
  evt.preventDefault();
  const id = el.dataset.yt;
  const thumb = el.querySelector('.video-thumb');
  if (thumb.classList.contains('is-playing')) return false;
  thumb.classList.add('is-playing');
  thumb.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" title="Vídeo do YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
  return false;
}

function startExam(){
  const sel = getSelection();
  if (!sel.dez && !sel.capitais && !sel.igreja){
    updateSelectionSummary();
    return;
  }
  buildAllSteps(sel);
  updateTallies();
  updateProgressBar();
  renderReport();
  goTo(1);
}

/* ============================================================
   NAVEGAÇÃO / RAIL / PROGRESSO
   ============================================================ */
function buildRail(railDefs){
  const rail = document.getElementById('rail');
  rail.innerHTML = '';
  railDefs.forEach((def, idx) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (def.chapterFirst ? ' chapter-first' : '');
    dot.id = 'dot-'+def.step;
    dot.textContent = def.char;
    dot.title = def.title;
    dot.setAttribute('role','button');
    dot.tabIndex = 0;
    dot.onclick = () => goTo(def.step);
    dot.onkeydown = (e) => { if (e.key==='Enter' || e.key===' ') { e.preventDefault(); goTo(def.step); } };
    rail.appendChild(dot);
    if (idx < railDefs.length-1){
      const line = document.createElement('div');
      line.className='line';
      line.id = 'line-'+def.step;
      rail.appendChild(line);
    }
  });
}

function updateRail(){
  for (let i=0;i<=TOTAL_STEPS;i++){
    const dot = document.getElementById('dot-'+i);
    if (!dot) continue;
    dot.classList.toggle('active', i===current);
    dot.classList.toggle('done', i<current);
    const line = document.getElementById('line-'+i);
    if (line) line.classList.toggle('done', i<current);
  }
  const activeDot = document.getElementById('dot-'+current);
  if (activeDot) activeDot.scrollIntoView({block:'nearest', inline:'center', behavior:'smooth'});
}

function totalQuestionCount(){
  let n = 0;
  REPORT_SECTIONS.forEach(rs => rs.sec.groups.forEach(g => n += g.items.length));
  return n;
}

function totalAnsweredCount(){
  return Object.values(answers).filter(Boolean).length;
}

function updateProgressBar(){
  const fill = document.getElementById('progress-fill');
  if (!fill) return;
  if (!TOTAL_STEPS){
    fill.style.width = '0%';
    return;
  }
  const pct = Math.round((current / TOTAL_STEPS) * 100);
  fill.style.width = Math.max(0, Math.min(100, pct)) + '%';
}

function goTo(step){
  step = Math.max(0, Math.min(TOTAL_STEPS, step));
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  const target = document.querySelector(`.step[data-step="${step}"]`);
  if (target) target.classList.add('active');
  current = step;
  updateRail();
  updateTallies();
  updateProgressBar();
  if (step === REPORT_STEP) renderReport();
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ============================================================
   MARCAÇÃO DE ITENS E FREQUÊNCIA
   ============================================================ */
function onCheck(key, isChecked){
  answers[key] = isChecked;
  const box = document.getElementById(key);
  box.closest('.q').classList.toggle('checked', isChecked);
  const wrap = document.getElementById('wrap-'+key);
  if (wrap) wrap.classList.toggle('show-freq', isChecked);
  if (!isChecked){
    delete frequencies[key];
    const row = document.getElementById('freq-'+key);
    if (row) row.querySelectorAll('.freq-pill').forEach(b => b.classList.remove('sel'));
    const numEl = document.getElementById('freqnum-'+key);
    if (numEl){ numEl.classList.remove('show'); numEl.value=''; }
  }
  updateTallies();
  updateProgressBar();
}

function onFreqPick(key, freqKey){
  const row = document.getElementById('freq-'+key);
  if (!row) return;
  row.querySelectorAll('.freq-pill').forEach(b => b.classList.toggle('sel', b.dataset.freq === freqKey));
  const numEl = document.getElementById('freqnum-'+key);
  if (freqKey === 'numero'){
    numEl.classList.add('show');
    frequencies[key] = { type:'numero', n: numEl.value ? parseInt(numEl.value,10) : null };
    numEl.focus();
  } else {
    if (numEl){ numEl.classList.remove('show'); numEl.value=''; }
    frequencies[key] = { type:freqKey };
  }
}

function onFreqNumber(key, value){
  const n = value ? parseInt(value,10) : null;
  frequencies[key] = { type:'numero', n };
}

function updateTallies(){
  REPORT_SECTIONS.forEach(rs => {
    let count = 0;
    let total = 0;
    rs.sec.groups.forEach((g, gIdx) => g.items.forEach((_, iIdx) => {
      total++;
      if (answers[`${rs.keyPrefix}-g${gIdx}-i${iIdx}`]) count++;
    }));
    const el = document.getElementById('tally-'+rs.keyPrefix);
    if (el) el.textContent = `${count} de ${total} marcados`;
  });
}

// Builds the confession-ready sentence from the pre-written base phrase
// plus the frequency the person picked. Never invents wording beyond this.
function buildConfessionSentence(frase, freq){
  if (!freq || !freq.type || freq.type === 'nao_precisar'){
    return frase + '.';
  }
  if (freq.type === 'numero'){
    if (!freq.n || freq.n < 1) return frase + '.';
    const vezes = freq.n === 1 ? 'vez' : 'vezes';
    return `${frase} aproximadamente ${freq.n} ${vezes}.`;
  }
  const words = {
    uma_vez: 'uma vez',
    poucas_vezes: 'poucas vezes',
    algumas_vezes: 'algumas vezes',
    muitas_vezes: 'muitas vezes',
    frequentemente: 'frequentemente',
    habitualmente: 'habitualmente'
  };
  const suffix = words[freq.type];
  return suffix ? `${frase} ${suffix}.` : frase + '.';
}

/* ============================================================
   RELATÓRIO
   ============================================================ */
function collectMarked(){
  // returns [{ group, sections:[{title, items}] }]
  const byGroup = [];
  const groupIndex = {};
  REPORT_SECTIONS.forEach(rs => {
    const items = [];
    rs.sec.groups.forEach((g, gIdx) => g.items.forEach((item, iIdx) => {
      const key = `${rs.keyPrefix}-g${gIdx}-i${iIdx}`;
      if (answers[key] && item.reportable !== false && item.f) items.push(buildConfessionSentence(item.f, frequencies[key]));
    }));
    if (!items.length) return;
    if (!(rs.group in groupIndex)){
      groupIndex[rs.group] = byGroup.length;
      byGroup.push({ group: rs.group, sections: [] });
    }
    byGroup[groupIndex[rs.group]].sections.push({ title: rs.title, items });
  });
  return byGroup;
}

function renderReport(){
  const groups = collectMarked();
  const notes = document.getElementById('notes') ? document.getElementById('notes').value.trim() : '';
  const total = groups.reduce((n,g)=> n + g.sections.reduce((m,s)=>m+s.items.length,0), 0);

  document.getElementById('rp-total').innerHTML = `${total}<span>itens marcados</span>`;

  const body = document.getElementById('report-body');
  if (!groups.length){
    body.innerHTML = `<div class="report-empty">Nenhum item foi marcado ainda. Volte ao exame para revisar com calma.</div>`;
  } else {
    body.innerHTML = groups.map(g => `
      <div class="report-group-title">${g.group}</div>
      ${g.sections.map(s => `
        <div class="report-block">
          <h4>${s.title}</h4>
          <ul>${s.items.map(t=>`<li>${t}</li>`).join('')}</ul>
        </div>
      `).join('')}
    `).join('');
  }

  const print = document.getElementById('report-print');
  print.innerHTML = `
    <div class="rp-head">
      <h1>Minha preparação para a Confissão</h1>
      <p>Exame de Consciência · ${new Date().toLocaleDateString('pt-BR')}<br>Elaboração e organização: Catequista Rickson Jordan</p>
    </div>
    ${ groups.length ? groups.map(g => `
      <div class="rp-block">
        <h4 style="font-size:15px; color:var(--wine); border-bottom:2px solid var(--wine); padding-bottom:4px;">${g.group}</h4>
        ${g.sections.map(s => `
          <div style="margin:10px 0 14px;">
            <h4>${s.title}</h4>
            <ul>${s.items.map(t=>`<li>${t}</li>`).join('')}</ul>
          </div>
        `).join('')}
      </div>
    `).join('') : '<p style="font-style:italic; color:#8B7960;">Nenhum item foi marcado.</p>' }
    ${ notes ? `<div class="rp-notes"><strong>Anotações:</strong><br>${notes.replace(/</g,'&lt;')}</div>` : '' }
    <div class="rp-contrition">
      “Meu Deus, eu me arrependo de todo o coração de vos ter ofendido, porque sois tão bom e amável.
      Prometo, com a vossa graça, esforçar-me para ser bom. Meu Jesus, misericórdia! Amém.”
    </div>
    <p style="margin-top:14px; font-size:11px; color:#8B7960;">Esta lista é apenas um auxílio pessoal de memória para a Confissão.<br>Exame de Consciência — Elaboração e organização: Catequista Rickson Jordan.</p>
  `;
}

function downloadTxt(){
  const groups = collectMarked();
  const notes = document.getElementById('notes') ? document.getElementById('notes').value.trim() : '';
  let out = `MINHA PREPARAÇÃO PARA A CONFISSÃO\nExame de Consciência\nElaboração e organização: Catequista Rickson Jordan\n${new Date().toLocaleDateString('pt-BR')}\n\n`;
  if (!groups.length){
    out += 'Nenhum item foi marcado.\n\n';
  } else {
    groups.forEach(g => {
      out += `${g.group.toUpperCase()}\n${'='.repeat(g.group.length)}\n\n`;
      g.sections.forEach(s => {
        out += `${s.title}\n`;
        s.items.forEach(t => out += `  - ${t}\n`);
        out += '\n';
      });
    });
  }
  if (notes) out += `Anotações:\n${notes}\n\n`;
  out += `Ato de Contrição:\n"Meu Deus, eu me arrependo de todo o coração de vos ter ofendido, porque sois tão bom e amável. Prometo, com a vossa graça, esforçar-me para ser bom. Meu Jesus, misericórdia! Amém."\n\n`;
  out += `Esta lista é apenas um auxílio pessoal de memória para a Confissão.\n`;
  out += `Elaboração e organização: Catequista Rickson Jordan.\n`;

  const blob = new Blob([out], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'minha-preparacao-para-confissao.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function resetAll(){
  Object.keys(answers).forEach(k => delete answers[k]);
  Object.keys(frequencies).forEach(k => delete frequencies[k]);
  document.querySelectorAll('.q input[type=checkbox]').forEach(cb => { cb.checked=false; cb.closest('.q').classList.remove('checked'); });
  document.querySelectorAll('.qwrap').forEach(w => w.classList.remove('show-freq'));
  document.querySelectorAll('.freq-pill').forEach(b => b.classList.remove('sel'));
  document.querySelectorAll('.freq-num').forEach(n => { n.classList.remove('show'); n.value=''; });
  const notesEl = document.getElementById('notes');
  if (notesEl) notesEl.value = '';
  updateTallies();
  updateProgressBar();
  renderReport();
  goTo(0);
}

/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */
updateSelectionSummary();
buildRail([{ step:0, char:'•', title:'Início' }]);
updateRail();
