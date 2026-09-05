# Exame de Consciência

Site estático e interativo para auxiliar na preparação pessoal ao Sacramento da Reconciliação.

## Sobre o projeto

O conteúdo está organizado em três blocos principais:

- Dez Mandamentos;
- Sete Pecados Capitais;
- Cinco Mandamentos da Igreja.

O usuário pode selecionar quais blocos deseja percorrer, marcar os itens que reconhece em seu exame de consciência, indicar uma frequência aproximada quando desejar e gerar ao final uma lista pessoal de apoio para a Confissão.

O projeto também possui:

- navegação por etapas;
- barra de progresso;
- geração de frases em primeira pessoa;
- relatório final;
- campo para anotações;
- impressão e salvamento em PDF;
- exportação em TXT;
- vídeos recomendados sobre Confissão;
- funcionamento responsivo em celular e computador.

## Finalidade

Este material é um auxílio catequético para a preparação ao Sacramento da Reconciliação e não substitui a orientação do sacerdote ou confessor.

O exame não determina automaticamente a culpabilidade moral de uma pessoa nem classifica os itens marcados como pecado mortal. Questões de gravidade, conhecimento, consentimento e imputabilidade devem ser discernidas conforme o ensinamento da Igreja e, quando necessário, com auxílio do sacerdote.

## Fontes

O conteúdo foi organizado e revisado a partir de fontes da Igreja Católica, especialmente:

- Sagrada Escritura;
- Catecismo da Igreja Católica (CIC);
- Compêndio do Catecismo da Igreja Católica;
- Código de Direito Canônico;
- documentos e normas eclesiais citados no próprio material.

## Créditos

**Elaboração e organização: Catequista Rickson Jordan**

As citações bíblicas, doutrinais, orações tradicionais e demais documentos pertencem às respectivas fontes e autores institucionais. O crédito acima refere-se à elaboração, seleção, adaptação e organização catequética deste projeto.

## Privacidade

O site é estático e foi desenvolvido para funcionar diretamente no navegador. As respostas do exame não são enviadas a um servidor pelo código do projeto.

Arquivos TXT e PDF somente são gerados quando o próprio usuário solicita a exportação.

## Como executar localmente

Basta abrir o arquivo `index.html` em um navegador moderno.

Também é possível iniciar um servidor local simples. Por exemplo, com Python:

```bash
python -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000
```

## Publicação no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `exame-de-consciencia`.
2. Envie os arquivos deste projeto para a branch `main`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/root`.
6. Salve.

O endereço ficará semelhante a:

```text
https://SEU-USUARIO.github.io/exame-de-consciencia/
```

## Estrutura

```text
exame-de-consciencia/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── README.md
├── LICENSE
└── .gitignore
```

## Observação

Por lidar com conteúdo espiritual e potencialmente sensível, recomenda-se evitar adicionar banco de dados, analytics das respostas, armazenamento remoto ou envio automático das marcações sem uma revisão específica de privacidade e consentimento.


## Organização do código

- `index.html`: estrutura e conteúdo da página.
- `assets/css/style.css`: estilos visuais e responsividade.
- `assets/js/app.js`: dados do exame, navegação, frequências, relatório, impressão e TXT.
