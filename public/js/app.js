// Dados dos projetos
const dados = [
  {
    id: 1,
    titulo: "Projeto Reflorestamento",
    descricao: "Ações de plantio de árvores em áreas degradadas.",
    conteudo: "Nosso projeto busca restaurar áreas de mata nativa com o plantio de mudas de espécies regionais, promovendo equilíbrio ambiental.",
    categoria: "Meio Ambiente",
    autor: "Equipe Verde Futuro",
    data: "2025-09-20",
    imagem: "https://picsum.photos/200/300"
  },
  {
    id: 2,
    titulo: "Horta Comunitária",
    descricao: "Produção de alimentos orgânicos para famílias.",
    conteudo: "As hortas comunitárias garantem alimentos frescos, geram renda e fortalecem o espírito coletivo entre os moradores.",
    categoria: "Alimentação",
    autor: "Equipe Verde Futuro",
    data: "2025-09-22",
    imagem: "https://picsum.photos/seed/picsum/200/300"
  },
  {
    id: 3,
    titulo: "Educação Ambiental",
    descricao: "Palestras e oficinas para conscientização.",
    conteudo: "Promovemos atividades educativas em escolas e comunidades para difundir práticas sustentáveis.",
    categoria: "Educação",
    autor: "Equipe Verde Futuro",
    data: "2025-09-25",
    imagem: "https://picsum.photos/id/16/900/400"
  }
];

// Função para criar os cards dinamicamente
function carregarProjetos() {
  const lista = document.getElementById("lista-projetos");

  dados.forEach(item => {
    const card = document.createElement("article");
    card.classList.add("caixa-post", "col-md-6");

    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.titulo}" class="img-fluid rounded">
      <h3 class="titulo-post">
        <a href="detalhes.html?id=${item.id}">${item.titulo}</a>
      </h3>
      <h4 class="subtitulo">
        <span>${item.data}</span> <br>
        <span>${item.categoria}</span> <br>
        <p class="texto">${item.descricao}</p>
      </h4>
    `;

    lista.appendChild(card);
  });
}

// Chama a função quando a página carregar
window.addEventListener("DOMContentLoaded", carregarProjetos);
