# Confiteri — Exame de Consciência

O **Confiteor** é uma aplicação web gratuita e interativa criada para auxiliar na preparação pessoal ao **Sacramento da Reconciliação (Confissão)**.

A proposta é oferecer um exame de consciência simples para quem já conhece o processo, mas também orientativo e catequético para quem está começando ou deseja se aprofundar.

> **Simples para quem já sabe. Explicativo para quem precisa. Profundo para quem quiser aprofundar.**

## 🌐 Acessar o Confiteor

**Site oficial:**  
https://confiteor.vercel.app/

Não é necessário instalar nada. O Confiteor funciona diretamente pelo navegador em celular, tablet ou computador.

---

## ✨ Recursos principais

- exame de consciência baseado nos **Dez Mandamentos**, **Sete Pecados Capitais** e **Cinco Mandamentos da Igreja**;
- respostas **Sim / Não / Tenho dúvida**;
- inclusão independente dos itens que o usuário deseja levar à Confissão;
- frequência aproximada por item;
- observações pessoais opcionais;
- explicações adicionais para dúvidas;
- relações entre perguntas que tratam do mesmo pecado ou situação;
- revisão específica dos itens marcados como **Tenho dúvida**;
- revisão final somente dos itens escolhidos para a Confissão;
- exportação do resumo em **TXT**;
- impressão ou salvamento em **PDF**;
- conteúdo catequético apresentado de forma progressiva;
- referências à **Sagrada Escritura** e ao **Catecismo da Igreja Católica (CIC)**;
- vídeos explicativos opcionais;
- player opcional de música para oração e meditação;
- playlist configurável por JSON;
- créditos e informações de licença das gravações;
- tema claro e escuro;
- proteção da tela após período de inatividade;
- opção **🔒 Limpar meus dados e sair**;
- armazenamento do exame somente durante a sessão do navegador (`sessionStorage`);
- interface responsiva para celular, tablet e computador.

---

## 🔐 Privacidade

O Confiteor foi desenvolvido priorizando a privacidade do usuário.

As respostas do exame, frequências, observações e itens selecionados são processados no próprio navegador e **não são enviados para um servidor pelo código da aplicação**.

O andamento do exame utiliza `sessionStorage`, portanto os dados permanecem associados à sessão atual do navegador. A preferência de tema pode ser armazenada localmente para preservar a escolha visual do usuário.

Como proteção adicional, após um período de inatividade o conteúdo sensível pode ser ocultado. Após um período maior, o usuário é avisado antes da limpeza automática da sessão.

Também está disponível a opção:

**🔒 Limpar meus dados e sair**

que permite encerrar o exame e remover os dados da sessão.

---

## 📖 Cadastro das perguntas

O conteúdo do exame é mantido separadamente da lógica principal da aplicação:

```text
data/perguntas.json
```

Esse arquivo concentra os conteúdos relacionados aos:

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

O Confiteor possui um player opcional com músicas adequadas ao momento de oração e reflexão.

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
Confiteri/
├── index.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── app.js
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

A versão pública do Confiteor está hospedada na **Vercel** e pode ser acessada em:

https://confiteor.vercel.app/

A publicação é realizada a partir do repositório do projeto no GitHub.

---

## 🙏 Finalidade catequética

O Confiteor é um **auxílio pessoal e catequético para a preparação ao Sacramento da Reconciliação**.

A aplicação não substitui:

- o Sacramento da Confissão;
- a orientação de um sacerdote ou confessor;
- o acompanhamento pastoral;
- a formação da consciência segundo o ensinamento da Igreja.

O sistema também **não determina automaticamente a culpabilidade moral do usuário** e não declara automaticamente se determinada situação constitui pecado mortal ou venial.

Seu objetivo é ajudar a pessoa a examinar sua consciência, compreender melhor os ensinamentos da Igreja e organizar aquilo que deseja apresentar na Confissão.

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

**Elaboração e organização:**  
Catequista **Rickson Jordan**

**Revisão catequética:**  
Catequistas **Vito** e **Maria Clara**

As citações bíblicas, doutrinais, orações tradicionais, documentos e demais conteúdos de terceiros pertencem às respectivas fontes, autores e instituições.

As gravações musicais utilizadas possuem seus respectivos créditos e informações de licença indicados no próprio projeto.

---

## ⚠️ Aviso

Este material é um auxílio catequético e pessoal. **Não substitui a orientação do sacerdote ou confessor.**
