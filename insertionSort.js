const livros = require("./listaLivros");

function insertionSort(lista) {
  for (let atual = 0; atual < lista.length; atual++) {
    let analise = atual;

    while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
      let livroAtual = lista[analise];
      let livroAnterior = lista[analise - 1];

      lista[analise] = livroAnterior;
      lista[analise - 1] = livroAtual;
      analise--;
    }
  }
  console.log(lista);
}

insertionSort(livros);
