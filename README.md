# Confiteri — Exame de Consciência

O **Confiteri** é uma aplicação web gratuita e interativa criada para auxiliar na preparação pessoal ao **Sacramento da Reconciliação (Confissão)**.

A proposta é oferecer uma experiência simples para quem já conhece o processo, mas também orientativa e catequética para quem está começando, voltou a se confessar depois de algum tempo ou deseja aprofundar seu exame de consciência.

> **Simples para quem já sabe. Explicativo para quem precisa. Profundo para quem quiser aprofundar.**

## 🌐 Acessar o Confiteri

**Site oficial:**  
[https://www.confiteri.com.br/](https://www.confiteri.com.br/)

Não é necessário instalar nada. O Confiteri funciona diretamente pelo navegador em celular, tablet ou computador.

---

## ✨ Recursos principais

### 🧭 Preparação para a Confissão

- seleção de um ou mais roteiros para o exame de consciência;
- registro aproximado de **quando foi a última Confissão**;
- opção para quem **não se lembra** ou fará a **primeira Confissão**;
- exame baseado nos **Dez Mandamentos**, **Sete Pecados Capitais** e **Cinco Mandamentos da Igreja**;
- respostas **Sim / Não / Tenho dúvida**;
- inclusão independente dos itens que o usuário deseja levar à Confissão;
- frequência ou número aproximado por item;
- observações pessoais opcionais;
- relações entre perguntas que tratam do mesmo pecado ou situação.

### ❓ Orientação e aprofundamento

- revisão específica dos itens marcados como **Tenho dúvida**;
- possibilidade de levar dúvidas não resolvidas ao sacerdote;
- explicações adicionais para auxiliar no discernimento;
- conteúdo catequético apresentado de forma progressiva;
- referências à **Sagrada Escritura** e ao **Catecismo da Igreja Católica (CIC)**;
- vídeos explicativos opcionais;
- conteúdos adicionais recolhidos por padrão para manter a interface simples.

### 🙏 Preparação final

Ao concluir o exame, o usuário pode revisar:

- os itens escolhidos para a Confissão;
- a frequência aproximada;
- as observações pessoais;
- as dúvidas que deseja apresentar ao sacerdote.

A partir dessa preparação, o Confiteri monta um **Roteiro para a Confissão**.

### 📱 Modo Confissão

O **Modo Confissão** é opcional e oferece uma interface simplificada para acompanhar as principais etapas do Sacramento pelo celular.

O roteiro auxilia o usuário a recordar:

1. início e Sinal da Cruz;
2. quando foi sua última Confissão;
3. pecados preparados;
4. dúvidas para apresentar ao sacerdote;
5. encerramento da acusação dos pecados;
6. orientações e penitência dadas pelo sacerdote;
7. Ato de Contrição;
8. absolvição e ação de graças.

O modo funciona apenas como **auxílio de memória**, dando prioridade ao diálogo e às orientações do sacerdote durante o Sacramento.

### 📄 Roteiro, PDF, impressão e TXT

O usuário **não precisa utilizar o Modo Confissão**.

A preparação também pode ser:

- impressa;
- salva em **PDF**;
- exportada em **TXT**.

O roteiro gerado organiza os itens preparados para a Confissão e apresenta separadamente as situações que permaneceram como dúvida.

### 🎵 Oração e meditação

- player opcional de música para oração e reflexão;
- playlist configurável por JSON;
- reprodução e pausa;
- troca de faixa;
- controle de volume;
- player minimizável;
- informações da música atual;
- créditos, fontes e informações de licença das gravações.

### 🎨 Experiência e acessibilidade

- tema claro e escuro;
- interface responsiva para celular, tablet e computador;
- conteúdo catequético progressivo, sem sobrecarregar quem já conhece o processo;
- proteção da tela após período de inatividade;
- opção **🔒 Limpar meus dados e sair**;
- encerramento do Modo Confissão com opção de apagar os dados da sessão.

---

## 🔄 Como funciona

O fluxo principal da plataforma é:

```text
Selecione os roteiros
        ↓
Informe quando foi sua última Confissão
        ↓
Faça o exame de consciência
        ↓
Revise suas dúvidas
        ↓
Revise o que deseja confessar
        ↓
Prepare seu roteiro
        ↓
┌────────────────────────┬────────────────────────┐
│   📱 Modo Confissão    │  📄 PDF / Impressão   │
│       opcional         │        / TXT           │
└────────────────────────┴────────────────────────┘
        ↓
Confissão e orientação do sacerdote
        ↓
Penitência e ação de graças
        ↓
Encerramento e limpeza da sessão
```

O Confiteri procura acompanhar a preparação sem substituir o papel do sacerdote ou transformar a ferramenta em um julgamento automático da consciência do usuário.

---

## 🔐 Privacidade

O Confiteri foi desenvolvido priorizando a privacidade do usuário, especialmente por lidar com informações pessoais relacionadas ao exame de consciência.

As respostas, dúvidas, frequências, observações e itens selecionados são processados no próprio navegador e **não são enviados para um servidor pelo código da aplicação**.

O andamento do exame utiliza:

```text
sessionStorage
```

Dessa forma, os dados permanecem associados à sessão atual do navegador.

A preferência de tema pode ser armazenada localmente para preservar apenas a escolha visual do usuário.

Como proteção adicional:

- o conteúdo sensível pode ser ocultado após um período de inatividade;
- após um período maior, o usuário é avisado antes da limpeza automática da sessão;
- o Modo Confissão não cria um histórico permanente dos itens marcados durante seu uso;
- o usuário pode encerrar a sessão e apagar os dados do exame.

Também está disponível a opção:

**🔒 Limpar meus dados e sair**

O objetivo é evitar a criação de um histórico permanente das informações pessoais utilizadas durante a preparação.

---

## 📖 Cadastro das perguntas

O conteúdo do exame é mantido separadamente da lógica principal da aplicação:

```text
data/perguntas.json
```

Esse arquivo concentra conteúdos relacionados aos:

- Dez Mandamentos;
- Sete Pecados Capitais;
- Cinco Mandamentos da Igreja;
- perguntas do exame;
- frases utilizadas na preparação para a Confissão;
- fundamentações e informações associadas aos itens.

Essa separação facilita a revisão e manutenção do conteúdo catequético sem misturá-lo com a lógica JavaScript da aplicação.

As relações entre perguntas equivalentes ou relacionadas são mantidas separadamente em:

```text
data/relacoes-perguntas.json
```

---

## 🎵 Música para oração e meditação

O Confiteri possui um player opcional com músicas adequadas ao momento de oração e reflexão.

A música **não é iniciada automaticamente**.

A playlist é configurada em:

```text
data/musicas.json
```

Os arquivos de áudio utilizados localmente ficam em:

```text
assets/audio/
```

O player permite, conforme a configuração disponível:

- reproduzir e pausar;
- trocar de faixa;
- controlar o volume;
- minimizar o player;
- visualizar a música atual;
- consultar créditos, fonte e licença.

As gravações devem possuir licença compatível com sua utilização no projeto, como domínio público, CC0, CC BY, CC BY-SA ou autorização expressa.

Os créditos e condições de licença de cada gravação devem ser preservados conforme a respectiva fonte.

---

## 🗂️ Estrutura principal

```text
confiteri/
├── index.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── app.js
│   │
│   ├── img/
│   │   └── identidade visual e imagens
│   │
│   └── audio/
│       └── arquivos de áudio
│
├── data/
│   ├── perguntas.json
│   ├── relacoes-perguntas.json
│   └── musicas.json
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## 💻 Execução local

Como conteúdos como perguntas, relações e playlist são carregados utilizando `fetch()`, não é recomendado simplesmente abrir o `index.html` pelo sistema de arquivos.

Utilize um servidor local.

### Com Python

Na pasta do projeto:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

Também é possível utilizar extensões como **Live Server** no VS Code.

---

## ☁️ Publicação

A versão pública do Confiteri está hospedada na **Vercel** e utiliza domínio próprio:

**[https://www.confiteri.com.br/](https://www.confiteri.com.br/)**

A publicação é integrada ao repositório do projeto no GitHub. Atualizações incorporadas à branch de produção podem gerar automaticamente uma nova implantação na Vercel.

---

## 🙏 Finalidade catequética

O Confiteri é um **auxílio pessoal e catequético para a preparação ao Sacramento da Reconciliação**.

A aplicação não substitui:

- o Sacramento da Confissão;
- a orientação de um sacerdote ou confessor;
- o acompanhamento pastoral;
- a formação da consciência segundo o ensinamento da Igreja.

O sistema também **não determina automaticamente a culpabilidade moral do usuário** e não declara automaticamente se determinada situação constitui pecado mortal ou venial.

Situações marcadas como **Tenho dúvida** são apresentadas separadamente para que possam ser examinadas com maior atenção e, quando necessário, levadas ao sacerdote.

Seu objetivo é ajudar a pessoa a:

- examinar sua consciência;
- compreender melhor os ensinamentos da Igreja;
- recordar aquilo que deseja apresentar na Confissão;
- organizar sua preparação;
- chegar ao Sacramento com maior tranquilidade e consciência.

---

## 📚 Fontes e referências

O conteúdo utiliza como referências, conforme indicado no próprio material:

- **Sagrada Escritura**;
- **Catecismo da Igreja Católica (CIC)**;
- **Compêndio do Catecismo da Igreja Católica**;
- **Código de Direito Canônico**;
- documentos e normas eclesiais citados no próprio conteúdo.

As citações e referências doutrinais devem ser preservadas e revisadas com atenção para evitar alterações no sentido dos textos oficiais.

---

## 👥 Créditos

**Idealização, elaboração e organização:**  
Catequista **Rickson Jordan**

**Revisão catequética:**  
Catequistas **Vito** e **Maria Clara**

As citações bíblicas, doutrinais, orações tradicionais, documentos e demais conteúdos de terceiros pertencem às respectivas fontes, autores e instituições.

As gravações musicais utilizadas possuem seus respectivos créditos e informações de licença indicados no próprio projeto.

---

## ⚠️ Aviso

O Confiteri é um auxílio catequético e pessoal para a preparação ao Sacramento da Reconciliação.

**Não substitui a orientação, o discernimento pastoral ou a absolvição do sacerdote.**
