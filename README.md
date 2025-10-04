# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome:Davi Quintanilha Fideles 
- Matricula:898775
- Proposta de projeto escolhida: 3. Organizações e Equipes	
- Breve descrição sobre seu projeto: Criei uma ong chamada Verde futuro e aqui esta ua descrição de como eu imaginei o projeto dela: 
A Ong Verde Futuro tem como missão apoiar pessoas em situação de vulnerabilidade, oferecendo não apenas ajuda, mas também alimentação saudável e de qualidade para quem enfrenta a fome. Além disso, desenvolve projetos voltados à sustentabilidade, educação e saúde, sempre valorizando seus membros e voluntários. Escolhi esse tema porque considero muito relevante a realidade de pessoas vulneráveis, e acredito que dar visibilidade a essa causa é uma forma de reforçar a importância da solidariedade e da dignidade humana.

## Print da Home-Page

<<  ![alt text](image.png) >>

## Print da página de detalhes do item

<<  ![alt text](image-1.png) >>

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const dados = [
  {
    "id": 1,
    "titulo": "Prefeitura Lança Plano de Mobilidade Urbana",
    "descricao": "Novo plano do transporte público.",
    "conteudo": "A Prefeitura apresentou nesta segunda-feira um novo plano de mobilidade urbana.",
    "categoria": "Cidades",
    "autor": "Joana Ribeiro",
    "data": "2025-03-30",
    "imagem": "img/mobilidade.jpg"
  }
]
```