// Recuperando o botão com querySelector
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

const listaTarefasArray = [];
const listaDescricaoTarefasArray = [];
const listaTarefasImportanciaArray = [];

// Adiciona evento de clique no botão para adicionar tarefa ao array e renderizar a view.
botaoAddTarefa.addEventListener("click", (evento) => {
  evento.preventDefault();

  const inputDescricao = document.querySelector("#idTarefa").value;
  const inputAutor = document.querySelector("#idAutor").value;
  const inputDepartamento = document.querySelector("#idDepartamento").value;
  const inputImportancia = document.querySelector("#idImportancia").value;
  const inputDuracao = document.querySelector("#idDuracao").value;
  const inputValor = document.querySelector("#idValor").value;

  // Crie um objeto de tarefa
  const tarefa = {
    descricao: inputDescricao,
    autor: inputAutor,
    departamento: inputDepartamento,
    importancia: parseInt(inputImportancia),
    duracao: inputDuracao,
    valor: parseFloat(inputValor),
  };
  if (inputDuracao == null || inputDuracao == "") {
    tarefa.duracao = "Nenhum";
  }
  if (inputValor == null || inputValor == "") {
    tarefa.valor = "Nenhum";
  }

  // Adicione o objeto de tarefa ao array
  listaTarefasArray.push(tarefa);
  listaDescricaoTarefasArray.push(tarefa.descricao);
  listaTarefasImportanciaArray.push(parseInt(tarefa.importancia));

  // Combina as listas e ordena com base na lista de importância
  const tarefasOrdenadas = listaDescricaoTarefasArray.slice().sort((a, b) => {
    const indiceA = listaDescricaoTarefasArray.indexOf(a);
    const indiceB = listaDescricaoTarefasArray.indexOf(b);
    return listaTarefasImportanciaArray[indiceB] - listaTarefasImportanciaArray[indiceA];
  });

  // Imprime a lista de tarefas ordenada por importância
  console.log(tarefasOrdenadas);

  const novaLinha = document.createElement("tr");

  // Cria células <td> e define seu conteúdo
  const tdDescricao = document.createElement("td");
  tdDescricao.textContent = tarefa.descricao;

  const tdAutor = document.createElement("td");
  tdAutor.textContent = tarefa.autor;

  const tdDepartamento = document.createElement("td");
  tdDepartamento.textContent = tarefa.departamento;

  const tdImportancia = document.createElement("td");
  tdImportancia.textContent = tarefa.importancia;

  const tdDuracao = document.createElement("td");
  tdDuracao.textContent = tarefa.duracao;

  const tdValor = document.createElement("td");
  tdValor.textContent = tarefa.valor;

  // Adiciona as células à nova linha
  novaLinha.appendChild(tdDescricao);
  novaLinha.appendChild(tdAutor);
  novaLinha.appendChild(tdDepartamento);
  novaLinha.appendChild(tdImportancia);
  novaLinha.appendChild(tdDuracao);
  novaLinha.appendChild(tdValor);

  // Adiciona a nova linha ao corpo da tabela
  const listaTarefas = document.querySelector("#lista-tarefas");
  listaTarefas.appendChild(novaLinha);

  // Cria o botão de exclusão
  const botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "x";

  // Adiciona um evento de clique ao botão de exclusão
  botaoExcluir.addEventListener("click", (evt) => {
    // Obtém a linha pai do botão (tr)
    const linhaExcluir = evt.target.closest("tr");

    // Remove a linha da tabela
    if (linhaExcluir) {
      linhaExcluir.remove();

      // Remova a correspondente entrada na lista de tarefas
      const tarefaTextoLi = tdDescricao.textContent;
      const indiceDaListaDeTarefas = listaTarefasArray.findIndex((item) => item.descricao === tarefaTextoLi);

      if (indiceDaListaDeTarefas !== -1) {
        listaTarefasArray.splice(indiceDaListaDeTarefas, 1);
        listaTarefasImportanciaArray.splice(indiceDaListaDeTarefas, 1);

        // Remova o item correspondente na lista tarefasOrdenadas
        const indiceDaListaDeDescricao = listaDescricaoTarefasArray.findIndex((item) => item === tarefaTextoLi);
        if (indiceDaListaDeDescricao !== -1) {
          listaDescricaoTarefasArray.splice(indiceDaListaDeDescricao, 1);
        }
      }

      // Remova o elemento <li> correspondente na lista de importância
      const listaImportancia = document.querySelector(".listaImportancia");
      const elementosLi = listaImportancia.querySelectorAll("li");

      elementosLi.forEach((elementoLi) => {
        if (elementoLi.textContent === tarefaTextoLi) {
          elementoLi.remove();
        }
      });
    }
    console.log(listaTarefasArray);
    console.log(listaTarefasImportanciaArray);
  });

  // Cria uma célula <td> para o botão de exclusão e adiciona-o à nova linha
  const tdExcluir = document.createElement("td");
  tdExcluir.appendChild(botaoExcluir);
  novaLinha.appendChild(tdExcluir);

  // Recupere o botão "Ordenar por Importância" com querySelector
  const botaoOrdenarPorImportancia = document.querySelector("#btnOrdenarPorImportancia");

  // Adicione um evento de clique ao botão para ordenar as linhas da tabela por importância
  botaoOrdenarPorImportancia.addEventListener("click", () => {
    const listaImportancia = document.querySelector(".listaImportancia");
    listaImportancia.innerHTML = "";
    tarefasOrdenadas.forEach(function (elemento) {
      let itemLista = document.createElement("li");
      itemLista.textContent = elemento;
      listaImportancia.appendChild(itemLista);
    });
    botaoOrdenarPorImportancia.textContent = "Atualizar lista de importância";
  });

  // Limpa os campos de entrada
  document.querySelector("#idTarefa").value = "";
  document.querySelector("#idAutor").value = "";
  document.querySelector("#idDepartamento").value = "";
  document.querySelector("#idImportancia").value = 5; // Define o valor padrão
  document.querySelector("#idDuracao").value = "";
  document.querySelector("#idValor").value = "Nenhum";
});
