/* ============================================================
   DADOS — DEZ MANDAMENTOS
   ============================================================ */

const SECTIONS_DEZ = [
  {
    num: "1",
    title: "Amar a Deus sobre todas as coisas",

    verse: "Ex 20,2-6 • Dt 5,6-10",

    foundation: {
      scripture: {
        text: "Eu sou o Senhor teu Deus [...] Não terás outros deuses diante de mim.",
        ref: "Ex 20,2-3; Dt 5,6-7"
      },
      catechism: {
        ref: "CIC 2083–2141",
        text: "O primeiro mandamento orienta a fé, a esperança e a caridade para Deus e rejeita a idolatria, a superstição e as práticas contrárias ao culto devido a Ele."
      }
    },

    groups: [
      {
        label: "Para examinar a consciência", items: [
          { t: "Tenho colocado conscientemente alguma pessoa, bem, poder, sucesso, dinheiro ou prática acima de Deus?", f: "Coloquei outras realidades acima de Deus" },
          { t: "Tenho abandonado deliberadamente a oração e a relação com Deus por indiferença ou rejeição?", f: "Negligenciei deliberadamente minha relação com Deus" },
          { t: "Tenho procurado adivinhação, cartomancia, horóscopos, médiuns, espiritismo, magia, feitiçaria ou práticas supersticiosas?", f: "Procurei práticas de adivinhação, espiritismo, magia ou superstição" },
          { t: "Tenho usado amuletos ou objetos atribuindo-lhes poder supersticioso?", f: "Usei amuletos ou objetos de modo supersticioso" },
          { t: "Tenho alimentado voluntariamente o desespero, recusando confiar na misericórdia de Deus, ou a presunção de obter perdão sem conversão?", f: "Alimentei voluntariamente desespero ou presunção diante de Deus" },
          { t: "Tenho rejeitado deliberadamente uma verdade da fé que reconheço ser ensinada pela Igreja?", f: "Rejeitei deliberadamente uma verdade da fé ensinada pela Igreja" }
        ]
      },

      {
        label: "Para aprofundar minha vida espiritual", items: [
          { t: "Tenho procurado crescer na oração e na confiança em Deus?", reportable: false },
          { t: "Tenho buscado conhecer melhor a Sagrada Escritura e a fé da Igreja?", reportable: false }
        ]
      }
    ]
  },

  {
    num: "2",
    title: "Não tomar seu santo nome em vão",

    verse: "Ex 20,7 • Dt 5,11",

    foundation: {
      scripture: {
        text: "Não pronunciarás em vão o nome do Senhor, teu Deus.",
        ref: "Ex 20,7; Dt 5,11"
      },
      catechism: {
        ref: "CIC 2142–2167",
        text: "O segundo mandamento pede respeito pelo santo nome de Deus e trata do uso do nome divino, das promessas, dos juramentos e da blasfêmia."
      }
    },

    groups: [{
      label: null,
      items: [
        { t: "Tenho usado deliberadamente o nome de Deus de modo irreverente, ofensivo ou desrespeitoso?", f: "Usei o nome de Deus de modo irreverente ou desrespeitoso" },
        { t: "Tenho blasfemado contra Deus, Nossa Senhora, os santos ou as coisas sagradas?", f: "Blasfemei contra Deus ou contra as coisas sagradas" },
        { t: "Tenho feito juramento falso ou invocado Deus como testemunha de uma mentira?", f: "Fiz juramento falso ou invoquei Deus como testemunha de uma mentira" },
        { t: "Tenho feito promessas a Deus sem intenção séria de cumpri-las?", f: "Fiz promessas a Deus sem intenção séria de cumpri-las" }
      ]
    }]
  },

  {
    num: "3",
    title: "Guardar domingos e festas de guarda",

    verse: "Ex 20,8-11 • Dt 5,12-15",

    foundation: {
      scripture: {
        text: "Lembra-te do dia de sábado para santificá-lo.",
        ref: "Ex 20,8; cf. Dt 5,12"
      },
      catechism: {
        ref: "CIC 2168–2195",
        text: "O terceiro mandamento trata da santificação do Dia do Senhor, da participação na Eucaristia e do descanso devido."
      }
    },

    groups: [
      {
        label: "Para examinar a consciência", items: [
          { t: "Faltei à Santa Missa em domingo ou dia santo de guarda sem motivo sério?", f: "Faltei à Santa Missa em domingo ou dia santo de guarda sem motivo sério" },
          { t: "Por minha culpa, cheguei tão atrasado ou saí tão cedo da Missa que deixei de participar de parte importante da celebração?", f: "Por minha culpa, deixei de participar de parte importante da Missa por atraso ou saída antecipada" },
          { t: "Tenho realizado ou exigido sem necessidade trabalhos e atividades que impedem o culto devido a Deus, a alegria própria do Dia do Senhor ou o descanso adequado?", f: "Realizei ou exigi sem necessidade atividades que impediram a adequada santificação do Dia do Senhor" }
        ]
      },

      {
        label: "Para aprofundar minha vida espiritual", items: [
          { t: "Tenho procurado reservar no domingo tempo para Deus, para a família, para o descanso e para obras de caridade?", reportable: false }
        ]
      }
    ]
  },

  {
    num: "4",
    title: "Honrar pai e mãe",

    verse: "Ex 20,12 • Dt 5,16",

    foundation: {
      scripture: {
        text: "Honra teu pai e tua mãe.",
        ref: "Ex 20,12; Dt 5,16"
      },
      catechism: {
        ref: "CIC 2197–2257",
        text: "O quarto mandamento trata dos deveres na família, das relações entre pais e filhos, da autoridade e das responsabilidades na sociedade."
      }
    },

    groups: [
      {
        label: "Filhos", items: [
          { t: "Tenho tratado meus pais ou responsáveis com grave desrespeito, desprezo ou ingratidão?", f: "Tratei meus pais ou responsáveis com desrespeito, desprezo ou ingratidão" },
          { t: "Sendo ainda dependente deles, desobedeci deliberadamente em matéria justa e importante?", f: "Desobedeci deliberadamente aos meus pais ou responsáveis em matéria justa e importante" },
          { t: "Tenho negligenciado, segundo minhas possibilidades, a ajuda devida aos meus pais na necessidade, doença, solidão ou velhice?", f: "Negligenciei a ajuda devida aos meus pais em suas necessidades" },
          { t: "Tenho me recusado, sem motivo justo, a buscar reconciliação em conflitos familiares?", f: "Recusei-me sem motivo justo a buscar reconciliação em conflitos familiares" }
        ]
      },

      {
        label: "Pais e responsáveis", items: [
          { t: "Tenho negligenciado as necessidades materiais, afetivas, educativas ou religiosas dos filhos sob minha responsabilidade?", f: "Negligenciei necessidades importantes dos filhos sob minha responsabilidade" },
          { t: "Tenho dado mau exemplo grave aos meus filhos por minhas palavras ou atitudes?", f: "Dei mau exemplo grave aos meus filhos por minhas palavras ou atitudes" },
          { t: "Tenho corrigido meus filhos com violência, humilhação ou severidade injusta?", f: "Corrigi meus filhos com violência, humilhação ou severidade injusta" },
          { t: "Tenho sido omisso quando uma correção prudente e necessária era minha responsabilidade?", f: "Fui omisso em correções necessárias sob minha responsabilidade" }
        ]
      },

      {
        label: "Autoridade, trabalho e sociedade", items: [
          { t: "Tenho tratado empregados, subordinados ou colegas com injustiça, exploração ou desrespeito à sua dignidade?", f: "Tratei trabalhadores ou colegas com injustiça, exploração ou desrespeito" },
          { t: "Tenho sido gravemente desonesto ou negligente no cumprimento de meus deveres profissionais?", f: "Fui gravemente desonesto ou negligente em meus deveres profissionais" },
          { t: "Tenho desobedecido legitimamente constituídas autoridades em matéria justa sem motivo proporcional?", f: "Desobedeci a uma autoridade legítima em matéria justa sem motivo proporcional" }
        ]
      }
    ]
  },

  {
    num: "5",
    title: "Não matar",

    verse: "Ex 20,13 • Dt 5,17",

    foundation: {
      scripture: {
        text: "Não matarás.",
        ref: "Ex 20,13; Dt 5,17"
      },
      catechism: {
        ref: "CIC 2258–2330",
        text: "O quinto mandamento protege a vida e a dignidade da pessoa humana e trata também da violência, da saúde e do respeito pela criação."
      }
    },

    description: "Pensamentos involuntários de autolesão ou suicídio não devem ser tratados automaticamente como pecado. Se você estiver passando por esse sofrimento, procure apoio de uma pessoa de confiança, de profissionais qualificados e também do sacerdote.",

    groups: [{
      label: null,
      items: [
        { t: "Tenho alimentado deliberadamente ódio grave, desejo de vingança ou desejo sério de mal contra alguém?", f: "Alimentei deliberadamente ódio grave, desejo de vingança ou desejo sério de mal contra alguém" },
        { t: "Tenho agredido alguém física ou verbalmente de modo injusto?", f: "Agredi alguém física ou verbalmente de modo injusto" },
        { t: "Pratiquei, incentivei, pressionei ou cooperei diretamente para a realização de um aborto?", f: "Pratiquei, incentivei, pressionei ou cooperei diretamente para a realização de um aborto" },
        { t: "Pratiquei ou cooperei diretamente com a eutanásia?", f: "Pratiquei ou cooperei diretamente com a eutanásia" },
        { t: "Coloquei deliberadamente minha própria vida ou a vida de outros em grave risco sem motivo proporcional?", f: "Coloquei deliberadamente minha vida ou a vida de outros em grave risco sem motivo proporcional" },
        { t: "Abusei de álcool ou drogas de modo a causar grave dano ou risco a mim ou a outras pessoas?", f: "Abusei de álcool ou drogas causando grave dano ou risco" },
        { t: "Dirigi ou agi de maneira gravemente imprudente, expondo pessoas a risco sério?", f: "Agi de maneira gravemente imprudente, expondo pessoas a risco sério" },
        { t: "Maltratei animais ou causei-lhes sofrimento desnecessário?", f: "Maltratei animais ou lhes causei sofrimento desnecessário" }
      ]
    }]
  },

  {
    num: "6",
    title: "Não pecar contra a castidade",

    verse: "Ex 20,14 • Dt 5,18",

    foundation: {
      scripture: {
        text: "Não cometerás adultério.",
        ref: "Ex 20,14; Dt 5,18"
      },
      catechism: {
        ref: "CIC 2331–2400",
        text: "O sexto mandamento trata da vocação à castidade, do matrimônio e da integração da sexualidade na dignidade da pessoa."
      }
    },

    groups: [{
      label: null,
      items: [
        { t: "Tenho praticado masturbação?", f: "Pratiquei masturbação" },
        { t: "Tenho procurado ou consumido pornografia deliberadamente?", f: "Procurei ou consumi pornografia deliberadamente" },
        { t: "Tenho praticado relações ou atos sexuais fora do matrimônio?", f: "Pratiquei relações ou atos sexuais fora do matrimônio" },
        { t: "Cometi adultério?", f: "Cometi adultério" },
        { t: "Tenho recorrido à prostituição ou contribuído para sua exploração?", f: "Recorri à prostituição ou contribuí para sua exploração" },
        { t: "Tenho praticado deliberadamente atos sexuais contrários à castidade segundo o ensinamento da Igreja?", f: "Pratiquei deliberadamente atos sexuais contrários à castidade" },
        { t: "No matrimônio, tenho recorrido deliberadamente à contracepção, separando o ato conjugal de sua abertura à vida?", f: "No matrimônio, recorri deliberadamente à contracepção" },
        { t: "Tenho usado conversas, mensagens, imagens ou redes sociais para comportamento sexualmente impróprio?", f: "Usei conversas, mensagens, imagens ou redes sociais para comportamento sexualmente impróprio" }
      ]
    }]
  },

  {
    num: "7",
    title: "Não furtar",

    verse: "Ex 20,15 • Dt 5,19",

    foundation: {
      scripture: {
        text: "Não furtarás.",
        ref: "Ex 20,15; Dt 5,19"
      },
      catechism: {
        ref: "CIC 2401–2463",
        text: "O sétimo mandamento trata do respeito aos bens, da justiça, da restituição, do trabalho e da responsabilidade econômica e social."
      }
    },

    groups: [{
      label: null,
      items: [
        { t: "Tenho furtado, roubado ou me apropriado injustamente do que pertence a outra pessoa?", f: "Furtei, roubei ou me apropriei injustamente do que pertencia a outra pessoa" },
        { t: "Tenho retido deliberadamente algo emprestado ou devido quando podia restituí-lo?", f: "Retive deliberadamente algo emprestado ou devido quando podia restituí-lo" },
        { t: "Tenho danificado injustamente bens alheios?", f: "Danifiquei injustamente bens alheios" },
        { t: "Tenho praticado fraude, engano ou desonestidade em estudos, trabalho, contratos ou negócios?", f: "Pratiquei fraude, engano ou desonestidade em estudos, trabalho, contratos ou negócios" },
        { t: "Tenho deixado deliberadamente de pagar salário, dívida, imposto ou obrigação justa que eu podia cumprir?", f: "Deixei deliberadamente de cumprir obrigação econômica justa que eu podia cumprir" },
        { t: "Tenho explorado trabalhadores ou obtido vantagem injusta em negociações?", f: "Explorei trabalhadores ou obtive vantagem injusta em negociações" },
        { t: "Tendo obrigação de reparar ou restituir um dano injusto, recusei-me a fazê-lo podendo?", f: "Recusei-me a reparar ou restituir um dano injusto quando podia fazê-lo" }
      ]
    }]
  },

  {
    num: "8",
    title: "Não levantar falso testemunho",

    verse: "Ex 20,16 • Dt 5,20",

    foundation: {
      scripture: {
        text: "Não levantarás falso testemunho contra teu próximo.",
        ref: "Ex 20,16; Dt 5,20"
      },
      catechism: {
        ref: "CIC 2464–2513",
        text: "O oitavo mandamento trata da verdade, da reputação, do testemunho, do sigilo e da responsabilidade na comunicação."
      }
    },

    groups: [{
      label: null,
      items: [
        { t: "Tenho mentido deliberadamente para enganar alguém?", f: "Menti deliberadamente para enganar alguém" },
        { t: "Tenho dado falso testemunho ou cometido perjúrio?", f: "Dei falso testemunho ou cometi perjúrio" },
        { t: "Tenho feito juízo temerário, admitindo como verdadeira uma falta moral do próximo sem fundamento suficiente?", f: "Fiz juízo temerário sobre o próximo" },
        { t: "Tenho revelado, sem razão objetivamente válida, faltas ou defeitos verdadeiros de alguém a quem não os conhecia?", f: "Revelei sem razão válida faltas ou defeitos alheios, prejudicando sua reputação" },
        { t: "Tenho feito acusações falsas que prejudicaram a reputação de alguém?", f: "Fiz acusações falsas que prejudicaram a reputação de alguém" },
        { t: "Tenho revelado segredos ou informações confidenciais sem justa causa?", f: "Revelei segredos ou informações confidenciais sem justa causa" },
        { t: "Tenho manipulado a verdade ou difundido informações sem cuidado, causando dano injusto à reputação de alguém, inclusive nas redes sociais?", f: "Manipulei ou difundi informações causando dano injusto à reputação de alguém" }
      ]
    }]
  },

  {
    num: "9",
    title: "Não desejar a mulher do próximo",

    verse: "Ex 20,17 • Dt 5,21",

    foundation: {
      scripture: {
        text: "Não cobiçarás a mulher do teu próximo.",
        ref: "Ex 20,17; Dt 5,21"
      },
      catechism: {
        ref: "CIC 2514–2533",
        text: "O nono mandamento trata da pureza do coração e do combate aos desejos desordenados."
      }
    },

    groups: [{
      label: null,
      items: [
        { t: "Tenho consentido deliberadamente em pensamentos ou fantasias sexualmente impuras?", f: "Consenti deliberadamente em pensamentos ou fantasias sexualmente impuras" },
        { t: "Tenho alimentado voluntariamente desejos sexuais desordenados em relação a alguém?", f: "Alimentei voluntariamente desejos sexuais desordenados" },
        { t: "Tenho procurado deliberadamente olhares, imagens ou situações com a intenção de alimentar desejos impuros?", f: "Procurei deliberadamente olhares, imagens ou situações para alimentar desejos impuros" }
      ]
    }]
  },

  {
    num: "10",
    title: "Não cobiçar as coisas alheias",

    verse: "Ex 20,17 • Dt 5,21",

    foundation: {
      scripture: {
        text: "Não cobiçarás [...] coisa alguma que pertença ao teu próximo.",
        ref: "Ex 20,17; Dt 5,21"
      },
      catechism: {
        ref: "CIC 2534–2557",
        text: "O décimo mandamento trata da cobiça, da inveja e do apego desordenado aos bens."
      }
    },

    groups: [{
      label: null,
      items: [
        { t: "Tenho desejado de modo desordenado apropriar-me dos bens ou vantagens de outra pessoa?", f: "Cobicei de modo desordenado os bens ou vantagens de outra pessoa" },
        { t: "Tenho sentido inveja deliberadamente alimentada diante dos bens ou prosperidade do próximo?", f: "Alimentei inveja diante dos bens ou da prosperidade do próximo" },
        { t: "Tenho desejado que outra pessoa perca seus bens, posição ou vantagens para que eu os tenha?", f: "Desejei que outra pessoa perdesse bens ou vantagens para que eu os tivesse" },
        { t: "Tenho alimentado apego desordenado às riquezas ou desejo desmedido de acumulá-las?", f: "Alimentei apego desordenado às riquezas ou desejo desmedido de acumulá-las" }
      ]
    }]
  }
];

/* ============================================================
   DADOS — OS 7 PECADOS CAPITAIS
   ============================================================ */
const SECTIONS_CAPITAIS = [
  {
    num: "1", title: "Soberba", subtitle: "Desordem pela qual a pessoa se exalta indevidamente e resiste à humildade.",
    verse: "«Deus resiste aos soberbos, mas dá a sua graça aos humildes.» (Tg 4,6)",
    groups: [{
      label: null, items: [
        { t: "Tenho me colocado deliberadamente acima dos outros, desprezando-os?", f: "Coloquei-me acima dos outros e os desprezei" },
        { t: "Tenho recusado reconhecer meus erros por orgulho?", f: "Recusei reconhecer meus erros por orgulho" },
        { t: "Tenho rejeitado correções justas apenas por orgulho?", f: "Rejeitei correções justas por orgulho" },
        { t: "Tenho desprezado os dons ou capacidades dos outros para me sentir superior?", f: "Desprezei os dons ou capacidades dos outros para me sentir superior" },
        { t: "Tenho buscado elogios, prestígio ou reconhecimento de modo desordenado?", f: "Busquei elogios, prestígio ou reconhecimento de modo desordenado" },
        { t: "Tenho me considerado espiritualmente superior aos outros?", f: "Considerei-me espiritualmente superior aos outros" }
      ]
    }]
  },
  {
    num: "2", title: "Avareza", subtitle: "Apego desordenado aos bens e às riquezas.",
    verse: "«Onde está o teu tesouro, aí estará também o teu coração.» (Mt 6,21)",
    groups: [{
      label: null, items: [
        { t: "Tenho me apegado de modo desordenado ao dinheiro ou aos bens?", f: "Apeguei-me de modo desordenado ao dinheiro ou aos bens" },
        { t: "Tenho recusado injustamente ajudar quem tinha necessidade quando eu podia fazê-lo?", f: "Recusei injustamente ajudar quem tinha necessidade quando eu podia fazê-lo" },
        { t: "Tenho colocado o dinheiro ou os bens acima de deveres importantes para com Deus e o próximo?", f: "Coloquei dinheiro ou bens acima de deveres importantes para com Deus e o próximo" },
        { t: "Tenho sido mesquinho ou injustamente fechado à partilha?", f: "Fui mesquinho ou injustamente fechado à partilha" },
        { t: "Tenho buscado segurança como se dependesse somente dos bens materiais?", f: "Busquei segurança como se dependesse somente dos bens materiais" }
      ]
    }]
  },
  {
    num: "3", title: "Luxúria", subtitle: "Desejo ou busca desordenada do prazer sexual.",
    verse: "«Fugi da imoralidade.» (1Cor 6,18)",
    groups: [{
      label: null, items: [
        { t: "Tenho consentido deliberadamente em pensamentos ou fantasias sexualmente impuras?", f: "Consenti deliberadamente em pensamentos ou fantasias sexualmente impuras" },
        { t: "Tenho procurado deliberadamente pornografia ou outros estímulos para alimentar a luxúria?", f: "Procurei deliberadamente pornografia ou outros estímulos para alimentar a luxúria" },
        { t: "Tenho praticado masturbação?", f: "Pratiquei masturbação" },
        { t: "Tenho praticado atos sexuais fora do matrimônio?", f: "Pratiquei atos sexuais fora do matrimônio" },
        { t: "Tenho buscado deliberadamente ocasiões próximas de pecado contra a castidade?", f: "Busquei deliberadamente ocasiões próximas de pecado contra a castidade" }
      ]
    }]
  },
  {
    num: "4", title: "Ira", subtitle: "Movimento desordenado de cólera que pode levar ao ódio, à vingança ou à violência.",
    verse: "«Todo o homem seja pronto para ouvir, lento para falar e lento para se irar.» (Tg 1,19)",
    groups: [{
      label: null, items: [
        { t: "Tenho alimentado deliberadamente raiva, ressentimento ou rancor contra alguém?", f: "Alimentei deliberadamente raiva, ressentimento ou rancor contra alguém" },
        { t: "Tenho desejado vingança injusta?", f: "Desejei vingança injusta" },
        { t: "Tenho tratado alguém com agressividade injusta nas palavras ou atitudes?", f: "Tratei alguém com agressividade injusta nas palavras ou atitudes" },
        { t: "Tenho recusado perdoar interiormente, alimentando deliberadamente o ódio?", f: "Recusei perdoar interiormente e alimentei deliberadamente o ódio" }
      ]
    }]
  },
  {
    num: "5", title: "Gula", subtitle: "Falta desordenada de temperança no comer ou beber.",
    verse: "«Não só de pão vive o homem.» (Mt 4,4)",
    groups: [{
      label: null, items: [
        { t: "Tenho buscado comida ou bebida de modo habitualmente desordenado, sem a devida temperança?", f: "Busquei comida ou bebida de modo habitualmente desordenado, sem a devida temperança" },
        { t: "Tenho usado bebidas alcoólicas de modo excessivo ou imprudente?", f: "Usei bebidas alcoólicas de modo excessivo ou imprudente" },
        { t: "Tenho deliberadamente prejudicado deveres importantes ou a saúde por falta grave de moderação no comer ou beber?", f: "Prejudiquei deveres importantes ou a saúde por falta grave de moderação no comer ou beber" }
      ]
    }]
  },
  {
    num: "6", title: "Inveja", subtitle: "Tristeza diante do bem do outro e desejo desordenado de possuí-lo ou de que o outro o perca.",
    verse: "«Alegrai-vos com os que se alegram.» (Rm 12,15)",
    groups: [{
      label: null, items: [
        { t: "Tenho alimentado tristeza ou ressentimento porque outra pessoa recebeu um bem, dom ou sucesso?", f: "Alimentei tristeza ou ressentimento diante do bem, dom ou sucesso de outra pessoa" },
        { t: "Tenho desejado que alguém perca um bem, posição ou vantagem por inveja?", f: "Desejei que alguém perdesse um bem, posição ou vantagem por inveja" },
        { t: "Tenho diminuído ou desvalorizado alguém por inveja de suas qualidades ou conquistas?", f: "Diminuí ou desvalorizei alguém por inveja de suas qualidades ou conquistas" },
        { t: "Tenho me alegrado deliberadamente com o fracasso de alguém por inveja?", f: "Alegrei-me deliberadamente com o fracasso de alguém por inveja" }
      ]
    }]
  },
  {
    num: "7", title: "Preguiça / Acídia", subtitle: "Negligência ou resistência diante do bem e dos deveres que devem ser realizados.",
    verse: "«Tudo o que fizerdes, fazei-o de coração, como para o Senhor.» (Cl 3,23)",
    groups: [{
      label: null, items: [
        { t: "Tenho negligenciado deliberadamente deveres importantes por comodismo ou preguiça?", f: "Negligenciei deliberadamente deveres importantes por comodismo ou preguiça" },
        { t: "Tenho adiado repetidamente o bem que sabia dever realizar, causando prejuízo real?", f: "Adiei repetidamente o bem que sabia dever realizar, causando prejuízo real" },
        { t: "Tenho abandonado deliberadamente a oração ou deveres espirituais importantes por acídia ou indiferença?", f: "Abandonei deliberadamente a oração ou deveres espirituais importantes por acídia ou indiferença" },
        { t: "Tenho sido desleixado no estudo, trabalho, família ou missão quando esses deveres exigiam meu esforço?", f: "Fui desleixado em deveres de estudo, trabalho, família ou missão" },
        { t: "Tenho faltado à perseverança no bem simplesmente por recusar o esforço que ele exigia?", f: "Faltei à perseverança no bem por recusar o esforço que ele exigia" }
      ]
    }]
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
    num: "1", title: "Ouvir missa inteira e abster-se de trabalhos servis nos domingos e festas de guarda",
    subtitle: "O primeiro preceito da Igreja.",
    verse: "«Este é o dia que o Senhor fez: exultemos e alegremo-nos nele.» (Sl 118,24)",
    description: "Este preceito exige santificar os domingos e festas de guarda, sobretudo participando da celebração eucarística e evitando trabalhos e ocupações que impeçam a santificação desses dias. (cf. CIC 2042)",
    groups: [
      {
        label: "Para examinar o preceito", items: [
          { t: "Faltei à Missa em domingo ou festa de guarda sem motivo sério?", f: "Faltei à Missa em domingo ou festa de guarda sem motivo sério" },
          { t: "Tenho realizado sem necessidade trabalhos ou ocupações que impedem a santificação desses dias?", f: "Realizei sem necessidade trabalhos ou ocupações que impediram a santificação de domingos ou festas de guarda" }
        ]
      },
      {
        label: "Para aprofundar minha vida espiritual", items: [
          { t: "Tenho procurado viver o domingo como Dia do Senhor, reservando tempo para Deus, a família, o descanso e a caridade?", reportable: false }
        ]
      }
    ]
  },
  {
    num: "2", title: "Confessar-se ao menos uma vez em cada ano",
    subtitle: "O segundo preceito da Igreja.",
    verse: "«Àqueles a quem perdoardes os pecados, ser-lhes-ão perdoados.» (Jo 20,23)",
    description: "Este preceito assegura a preparação para a Eucaristia pela recepção do sacramento da Reconciliação. A obrigação anual se refere especialmente à confissão dos pecados graves. (cf. CIC 2042; cân. 989)",
    groups: [
      {
        label: "Para examinar o preceito", items: [
          { t: "Tendo consciência de pecado grave, deixei passar um ano sem receber o sacramento da Reconciliação?", f: "Tendo consciência de pecado grave, deixei passar um ano sem receber o sacramento da Reconciliação" }
        ]
      },
      {
        label: "Para aprofundar minha vida espiritual", items: [
          { t: "Tenho feito exame de consciência com sinceridade antes de me confessar?", reportable: false },
          { t: "Tenho procurado receber regularmente o sacramento da Reconciliação, também para crescer espiritualmente?", reportable: false }
        ]
      }
    ]
  },
  {
    num: "3", title: "Comungar ao menos pela Páscoa da Ressurreição",
    subtitle: "O terceiro preceito da Igreja.",
    verse: "«Quem come a minha carne e bebe o meu sangue permanece em Mim e Eu nele.» (Jo 6,56)",
    description: "Este preceito garante um mínimo na recepção da Eucaristia, em ligação com o tempo pascal. (cf. CIC 2042)",
    groups: [
      {
        label: "Para examinar o preceito", items: [
          { t: "Deixei de receber a Sagrada Comunhão ao menos no tempo pascal, sem causa legítima?", f: "Deixei de receber a Sagrada Comunhão ao menos no tempo pascal, sem causa legítima" },
          { t: "Recebi deliberadamente a Sagrada Comunhão tendo consciência de pecado grave sem antes me confessar, salvo a exceção prevista pela Igreja?", f: "Recebi deliberadamente a Sagrada Comunhão tendo consciência de pecado grave sem antes me confessar" }
        ]
      },
      {
        label: "Para aprofundar minha vida espiritual", items: [
          { t: "Tenho me preparado com fé e recolhimento para receber a Eucaristia?", reportable: false },
          { t: "Tenho agradecido a Cristo pelo dom da Eucaristia?", reportable: false }
        ]
      }
    ]
  },
  {
    num: "4", title: "Guardar abstinência e jejuar nos dias determinados pela Igreja",
    subtitle: "O quarto preceito da Igreja.",
    verse: "«Convertei-vos a Mim de todo o coração, com jejuns, lágrimas e lamentos.» (Jl 2,12)",
    description: "Este preceito assegura tempos de ascese e penitência. Sua aplicação concreta deve respeitar a disciplina vigente da Igreja e as normas particulares aplicáveis no Brasil. (cf. CIC 2043; cân. 1249–1253)",
    groups: [
      {
        label: "Para examinar o preceito", items: [
          { t: "Estando sujeito à obrigação e sem motivo legítimo, deixei de observar o jejum nos dias prescritos pela Igreja?", f: "Sem motivo legítimo, deixei de observar o jejum em dia prescrito pela Igreja" },
          { t: "Estando sujeito à obrigação e sem motivo legítimo, deixei de observar a abstinência ou a forma de penitência determinada pela Igreja?", f: "Sem motivo legítimo, deixei de observar a abstinência ou a forma de penitência determinada pela Igreja" }
        ]
      },
      {
        label: "Para aprofundar minha vida espiritual", items: [
          { t: "Tenho vivido as práticas penitenciais com espírito de conversão, oração e caridade?", reportable: false }
        ]
      }
    ]
  },
  {
    num: "5", title: "Prover as necessidades da Igreja, segundo os legítimos usos e costumes e as determinações",
    subtitle: "O quinto preceito da Igreja.",
    verse: "«Deus ama quem dá com alegria.» (2Cor 9,7)",
    description: "Os fiéis têm a obrigação de prover às necessidades materiais da Igreja segundo as possibilidades de cada um. (cf. CIC 2043)",
    groups: [
      {
        label: "Para examinar o preceito", items: [
          { t: "Tenho me recusado, sem motivo justo e podendo fazê-lo, a contribuir segundo minhas possibilidades para as necessidades materiais da Igreja?", f: "Recusei-me sem motivo justo, podendo fazê-lo, a contribuir segundo minhas possibilidades para as necessidades materiais da Igreja" }
        ]
      },
      {
        label: "Para aprofundar minha vida espiritual", items: [
          { t: "Tenho procurado colaborar também com meu tempo e talentos na missão da Igreja, conforme minhas possibilidades e vocação?", reportable: false }
        ]
      }
    ]
  }
];

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
function updateSelectionSummary() {
  document.getElementById('count-dez').textContent = chapterQuestionCount(SECTIONS_DEZ) + ' perguntas'; document.getElementById('count-capitais').textContent = chapterQuestionCount(SECTIONS_CAPITAIS) + ' perguntas'; document.getElementById('count-igreja').textContent = chapterQuestionCount(SECTIONS_IGREJA) + ' perguntas';
  const sel = getSelection(); let total = 0, chapters = 0; if (sel.dez) { total += chapterQuestionCount(SECTIONS_DEZ); chapters++; } if (sel.capitais) { total += chapterQuestionCount(SECTIONS_CAPITAIS); chapters++; } if (sel.igreja) { total += chapterQuestionCount(SECTIONS_IGREJA); chapters++; }
  const summary = document.getElementById('picker-summary'), btn = document.getElementById('btn-start'); if (chapters === 0) { summary.textContent = 'Selecione ao menos um bloco para começar.'; btn.disabled = true; } else { summary.textContent = `${total} perguntas no total, em ${chapters} ${chapters === 1 ? 'bloco' : 'blocos'}.`; btn.disabled = false; } saveSelection();
}
async function startExam() { const sel = getSelection(); if (!sel.dez && !sel.capitais && !sel.igreja) return updateSelectionSummary(); await loadQuestionRelations(); buildAllSteps(sel); updateTallies(); goTo(1); }

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
function getDoubtKeys() { return Object.keys(ITEM_REGISTRY).filter(k => { const s = getItemState(k); return s.answer === 'duvida' || s.decideLater; }); }
function renderDoubts() { const body = document.getElementById('doubts-body'); const keys = getDoubtKeys(); if (!keys.length) { body.innerHTML = '<div class="empty-state">Nenhum item ficou pendente. Você pode seguir para a revisão da Confissão.</div>'; return; } body.innerHTML = keys.map(key => { const m = ITEM_REGISTRY[key], s = getItemState(key), g = m.guide; return `<div class="doubt-card"><h4>${m.sectionTitle}</h4><p class="review-sentence">${m.item.t}</p>${g ? `<div class="catechism-box"><div class="catechism-kicker">Referência no Catecismo</div><p>${g.text}</p><div class="catechism-ref">${g.ref}</div></div>` : ''}<div class="review-tools"><button class="btn ${s.includeInConfession ? 'primary' : ''}" onclick="setInclude('${key}',true)">☑ Incluir na Confissão</button><button class="btn" onclick="resolveDoubt('${key}',false)">Não incluir</button><button class="btn ghost" onclick="focusOriginalQuestion('${key}')">Voltar à pergunta</button></div></div>`; }).join(''); }
function resolveDoubt(key, include) { updateItemState(key, { includeInConfession: !!include, decideLater: false }); if (!include) updateItemState(key, { frequency: null }); refreshQuestion(key); renderDoubts(); }
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
    const atual = getItemState(key).frequency?.n || '';
    const n = prompt('Número aproximado de vezes:', atual);
    if (n === null) { renderReview(); return; }
    const parsed = parseInt(n, 10);
    updateItemState(key, { frequency: { type: 'numero', n: Number.isFinite(parsed) && parsed > 0 ? parsed : null } });
  } else {
    updateItemState(key, { frequency: { type } });
  }
  renderReview(); refreshQuestion(key);
}
function editReviewNote(key) { const currentNote = getItemState(key).note || ''; const value = prompt('Observação opcional para lembrar na Confissão:', currentNote); if (value !== null) { updateItemState(key, { note: value.trim() }); renderReview(); refreshQuestion(key); } }
function saveGeneralNotes() { try { sessionStorage.setItem(NOTES_KEY, document.getElementById('notes')?.value || ''); } catch (_) { } renderPrintable(); }

/* ============================================================
   PDF / TXT — UMA ÚNICA FONTE DE DADOS
   ============================================================ */
function renderPrintable() {
  const items = getIncludedItems(), notes = (document.getElementById('notes')?.value || sessionStorage.getItem(NOTES_KEY) || '').trim(); const grouped = {}; items.forEach(x => { (grouped[x.group] ??= []).push(x); }); const print = document.getElementById('report-print');
  print.innerHTML = `<div class="rp-head"><h1>Minha preparação para a Confissão</h1><p>Exame de Consciência · ${new Date().toLocaleDateString('pt-BR')}<br>Elaboração e organização: Catequista Rickson Jordan</p></div>${Object.entries(grouped).map(([group, list]) => `<div class="rp-block"><h4 style="font-size:15px;border-bottom:2px solid #777;padding-bottom:4px;">${group}</h4><ul>${list.map(x => `<li>${escapeHtml(buildConfessionSentence(x.item.f, x.state.frequency))}${x.state.note ? `<br><small><strong>Observação:</strong> ${escapeHtml(x.state.note)}</small>` : ''}</li>`).join('')}</ul></div>`).join('') || '<p>Nenhum item incluído.</p>'}${notes ? `<div class="rp-notes"><strong>Anotação geral:</strong><br>${escapeHtml(notes)}</div>` : ''}<div class="rp-contrition">“Meu Deus, eu me arrependo de todo o coração de vos ter ofendido, porque sois tão bom e amável. Prometo, com a vossa graça, esforçar-me para ser bom. Meu Jesus, misericórdia! Amém.”</div><p style="font-size:11px;color:#666;">Esta lista é apenas um auxílio pessoal de memória para a Confissão.</p>`;
}
function printConfession() { renderPrintable(); window.print(); }
function downloadTxt() {
  const items = getIncludedItems(), notes = (document.getElementById('notes')?.value || sessionStorage.getItem(NOTES_KEY) || '').trim(); const grouped = {}; items.forEach(x => { (grouped[x.group] ??= []).push(x); }); let out = `MINHA PREPARAÇÃO PARA A CONFISSÃO\nExame de Consciência\nElaboração e organização: Catequista Rickson Jordan\n${new Date().toLocaleDateString('pt-BR')}\n\n`; Object.entries(grouped).forEach(([group, list]) => { out += `${group.toUpperCase()}\n${'='.repeat(group.length)}\n`; list.forEach(x => { out += `- ${buildConfessionSentence(x.item.f, x.state.frequency)}\n`; if (x.state.note) out += `  Observação: ${x.state.note}\n`; }); out += '\n'; }); if (!items.length) out += 'Nenhum item incluído.\n\n'; if (notes) out += `Anotação geral:\n${notes}\n\n`; out += `Ato de Contrição:\n"Meu Deus, eu me arrependo de todo o coração de vos ter ofendido, porque sois tão bom e amável. Prometo, com a vossa graça, esforçar-me para ser bom. Meu Jesus, misericórdia! Amém."\n\nEsta lista é apenas um auxílio pessoal de memória para a Confissão.\n`;
  const blob = new Blob([out], { type: 'text/plain;charset=utf-8' }), url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = 'minha-preparacao-para-confissao.txt'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

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
function clearSensitiveData(reload = true) { pauseMeditation(); try { sessionStorage.removeItem(STORAGE_KEY); sessionStorage.removeItem(NOTES_KEY); sessionStorage.removeItem(SELECTION_KEY); } catch (_) { } Object.keys(examState).forEach(k => delete examState[k]); if (reload) location.reload(); else location.reload(); }

/* ============================================================
   PLAYER DE MÚSICA PARA REFLEXÃO
   ============================================================ */
let meditationPlaylist = [], meditationCurrentTrack = 0;
function playerEls() { return { audio: document.getElementById('meditation-audio'), toggle: document.getElementById('meditation-toggle'), prev: document.getElementById('meditation-prev'), next: document.getElementById('meditation-next'), title: document.getElementById('meditation-title'), mini: document.getElementById('mini-track-title'), select: document.getElementById('meditation-select'), volume: document.getElementById('meditation-volume') }; }
async function loadMeditationPlaylist() { const e = playerEls(); if (!e.audio) return; try { const r = await fetch('data/musicas.json', { cache: 'no-store' }); if (!r.ok) throw new Error('playlist'); meditationPlaylist = (await r.json()).filter(m => m.ativo !== false); e.select.innerHTML = meditationPlaylist.map((m, i) => `<option value="${i}">${escapeHtml(m.titulo)}${m.subtitulo ? ' — ' + escapeHtml(m.subtitulo) : ''}</option>`).join(''); if (meditationPlaylist.length) loadMeditationTrack(0); else e.title.textContent = 'Nenhuma música disponível'; } catch (_) { e.title.textContent = 'Músicas indisponíveis'; document.getElementById('meditation-player').hidden = true; } }
function loadMeditationTrack(index) { const e = playerEls(), m = meditationPlaylist[index]; if (!m) return; meditationCurrentTrack = index; e.audio.src = encodeURI(m.arquivo); const label = `${m.titulo}${m.subtitulo ? ' — ' + m.subtitulo : ''}`; e.title.textContent = label; e.mini.textContent = m.titulo; e.select.value = String(index); }
async function playMeditation() { const e = playerEls(); if (!meditationPlaylist.length) return; try { await e.audio.play(); e.toggle.textContent = '⏸'; e.toggle.title = 'Pausar'; } catch (_) { } }
function pauseMeditation() { const e = playerEls(); if (!e.audio) return; e.audio.pause(); e.toggle.textContent = '▶'; e.toggle.title = 'Reproduzir'; }
function nextMeditation(delta = 1) { if (!meditationPlaylist.length) return; loadMeditationTrack((meditationCurrentTrack + delta + meditationPlaylist.length) % meditationPlaylist.length); playMeditation(); }
function initMeditationPlayer() { const e = playerEls(); if (!e.audio) return; e.audio.volume = .25; e.toggle.addEventListener('click', () => e.audio.paused ? playMeditation() : pauseMeditation()); e.prev.addEventListener('click', () => nextMeditation(-1)); e.next.addEventListener('click', () => nextMeditation(1)); e.audio.addEventListener('ended', () => nextMeditation(1)); e.volume.addEventListener('input', () => { e.audio.volume = Number(e.volume.value); }); e.select.addEventListener('change', () => { loadMeditationTrack(Number(e.select.value)); playMeditation(); }); document.getElementById('meditation-minimize').addEventListener('click', () => { document.getElementById('meditation-expanded').hidden = true; document.getElementById('meditation-collapsed').hidden = false; }); document.getElementById('meditation-expand').addEventListener('click', () => { document.getElementById('meditation-collapsed').hidden = true; document.getElementById('meditation-expanded').hidden = false; }); loadMeditationPlaylist(); }

/* ============================================================
   RESET VISUAL E INICIALIZAÇÃO
   ============================================================ */
function resetAll() { confirmClearData(); }
function init() {
  applyTheme(preferredTheme()); document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme); document.getElementById('clear-data-btn')?.addEventListener('click', confirmClearData); document.getElementById('privacy-continue-btn')?.addEventListener('click', unlockPrivacy);
  ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(ev => window.addEventListener(ev, registerActivity, { passive: true })); setInterval(checkInactivity, 15000);
  initAccordions(); initMeditationPlayer(); loadQuestionRelations(); restoreSelection(); updateSelectionSummary(); buildRail([{ step: 0, char: '•', title: 'Início' }]); updateRail(); updateProgressBar();
  const notes = document.getElementById('notes'); if (notes) { notes.value = sessionStorage.getItem(NOTES_KEY) || ''; notes.dataset.loaded = '1'; }
}

document.addEventListener('DOMContentLoaded', init);
