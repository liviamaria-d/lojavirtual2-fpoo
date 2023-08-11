const produtos = [];

function cadastrarProduto() {
  const nome = document.getElementById('nome').value;
  const preco = document.getElementById('preco').value;

  if (nome && preco) {
    const produto = { nome, preco };
    produtos.push(produto);

    updateCards();
    clearInputs();
  }
}

function updateCards() {
  const cardsContainer = document.getElementById('cards');
  cardsContainer.innerHTML = '';

  produtos.forEach((produto, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h2>${produto.nome}</h2>
      <p>Preço: R$ ${produto.preco}</p>
    `;
    cardsContainer.appendChild(card);
  });
}

function clearInputs() {
  document.getElementById('nome').value = '';
  document.getElementById('preco').value = '';
}

function buscarProduto() {
  const termoBusca = document.getElementById('busca').value.toLowerCase();

  const produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(termoBusca));

  const cardsContainer = document.getElementById('cards');
  cardsContainer.innerHTML = '';

  produtosFiltrados.forEach(produto => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h2>${produto.nome}</h2>
      <p>Preço: R$ ${produto.preco}</p>
    `;
    cardsContainer.appendChild(card);
  });
}

updateCards(); // Para inicializar os cards com os produtos já cadastrados
