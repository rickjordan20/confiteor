# Confiteri — Exame de Consciência

Site estático e interativo para auxiliar na preparação pessoal ao Sacramento da Reconciliação.

## Recursos principais

- Dez Mandamentos, Sete Pecados Capitais e Cinco Mandamentos da Igreja;
- respostas **Sim / Não / Tenho dúvida**;
- inclusão independente de itens na Confissão;
- frequência aproximada e observações opcionais por item;
- revisão específica dos itens em dúvida;
- revisão final somente com os itens incluídos;
- exportação em TXT e impressão/salvamento em PDF;
- conteúdo catequético em acordeões e referências ao Catecismo;
- vídeos explicativos opcionais;
- player de música para reflexão com playlist externa em JSON;
- tema claro/escuro;
- proteção da tela por inatividade;
- botão **Limpar meus dados e sair**;
- armazenamento do exame apenas na sessão do navegador (`sessionStorage`);
- layout responsivo para celular, tablet e desktop.

## Privacidade

O projeto não envia as respostas do exame para um servidor. O estado do exame é mantido no navegador durante a sessão. A preferência de tema pode ser guardada localmente.

Após alguns minutos de inatividade, o conteúdo é ocultado para proteger a privacidade. Após um período maior, o usuário é avisado antes da limpeza automática da sessão.

## Música

A playlist é carregada de:

```text
data/musicas.json
```

Os arquivos de áudio continuam em:

```text
assets/audio/
```

Para adicionar uma música, inclua o MP3 na pasta de áudio e cadastre a faixa no JSON.

## Estrutura

```text
Confiteri/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── audio/
├── data/
│   └── musicas.json
├── README.md
├── LICENSE
└── .gitignore
```

## Execução local

Como a playlist é carregada com `fetch()`, prefira executar por um servidor local:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Finalidade

Este material é um auxílio catequético para a preparação ao Sacramento da Reconciliação e não substitui a orientação do sacerdote ou confessor. O site não classifica automaticamente a culpabilidade moral da pessoa nem determina automaticamente se um pecado é mortal ou venial.

## Fontes

- Sagrada Escritura;
- Catecismo da Igreja Católica (CIC);
- Compêndio do Catecismo da Igreja Católica;
- Código de Direito Canônico;
- documentos e normas eclesiais citados no próprio material.

## Créditos

**Elaboração e organização: Catequista Rickson Jordan**

As citações bíblicas, doutrinais, orações tradicionais e documentos pertencem às respectivas fontes e autores institucionais.
