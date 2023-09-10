// Recuperando os botões com querySelector
const botaoAddTarefa = document.querySelector("#btnAddTarefa");
const botaoAddDuracao = document.querySelector("#btnAddDuracao");
const botaoAddValor = document.querySelector("#btnAddValor");
const botaoOrdenarPorImportancia = document.querySelector("#btnOrdenarPorImportancia");

let listaTarefasArray = [];
let listaDescricaoTarefasArray = [];
let listaTarefasImportanciaArray = [];

botaoAddDuracao.addEventListener("click", () => {
  const displayDuracao = document.querySelector("#divDuracao");
  if (displayDuracao.classList.contains("oculto")) {
    displayDuracao.classList.remove("oculto");
    displayDuracao.classList.add("visivel");
    botaoAddDuracao.textContent = "Remover Duração";
  } else {
    displayDuracao.classList.remove("visivel");
    displayDuracao.classList.add("oculto");
    botaoAddDuracao.textContent = "Adicionar Duração";
  }
});

botaoAddValor.addEventListener("click", () => {
  const displayValor = document.querySelector("#divValor");
  if (displayValor.classList.contains("oculto")) {
    displayValor.classList.remove("oculto");
    displayValor.classList.add("visivel");
    botaoAddValor.textContent = "Remover Valor";
  } else {
    displayValor.classList.remove("visivel");
    displayValor.classList.add("oculto");
    botaoAddValor.textContent = "Adicionar Valor";
  }
});

botaoAddTarefa.addEventListener("click", (evento) => {
  evento.preventDefault();

  const inputDescricao = document.querySelector("#idTarefa").value;
  const inputAutor = document.querySelector("#idAutor").value;
  const inputDepartamento = document.querySelector("#idDepartamento").value;
  const inputImportancia = document.querySelector("#idImportancia").value;
  const inputDuracao = document.querySelector("#idDuracao").value;
  const inputValor = document.querySelector("#idValor").value;

  // Verifique se já existe uma tarefa com a mesma descrição
  const tarefaExistente = listaTarefasArray.find((tarefa) => tarefa.descricao === inputDescricao);

  if (tarefaExistente) {
    alert("Uma tarefa com a mesma descrição já existe. Por favor, insira uma descrição diferente.");
    return; // Saia da função para evitar adicionar a tarefa duplicada
  }

  const tarefa = {
    descricao: inputDescricao,
    autor: inputAutor,
    departamento: inputDepartamento,
    importancia: parseInt(inputImportancia),
    duracao: inputDuracao || "Nenhum",
    valor: parseFloat(inputValor) || "Nenhum",
  };

  listaTarefasArray.push(tarefa);
  listaDescricaoTarefasArray = listaTarefasArray.map((tarefa) => tarefa.descricao);
  listaTarefasImportanciaArray = listaTarefasArray.map((tarefa) => tarefa.importancia);

  const tarefasOrdenadas = listaDescricaoTarefasArray.slice().sort((a, b) => {
    const indiceA = listaDescricaoTarefasArray.indexOf(a);
    const indiceB = listaDescricaoTarefasArray.indexOf(b);
    return listaTarefasImportanciaArray[indiceB] - listaTarefasImportanciaArray[indiceA];
  });

  console.log(tarefasOrdenadas);

  const novaLinha = document.createElement("tr");
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

  novaLinha.appendChild(tdDescricao);
  novaLinha.appendChild(tdAutor);
  novaLinha.appendChild(tdDepartamento);
  novaLinha.appendChild(tdImportancia);
  novaLinha.appendChild(tdDuracao);
  novaLinha.appendChild(tdValor);

  const listaTarefas = document.querySelector("#lista-tarefas");
  listaTarefas.appendChild(novaLinha);

  const botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "x";

  botaoExcluir.addEventListener("click", (evt) => {
    const linhaExcluir = evt.target.closest("tr");

    if (linhaExcluir) {
      linhaExcluir.remove();
      const tarefaTextoTd = tdDescricao.textContent;

      listaTarefasArray = listaTarefasArray.filter((tarefa) => tarefa.descricao !== tarefaTextoTd);
      listaTarefasImportanciaArray = listaTarefasArray.map((tarefa) => tarefa.importancia);

      listaDescricaoTarefasArray = listaDescricaoTarefasArray.filter((descricao) => descricao !== tarefaTextoTd);

      const listaImportancia = document.querySelector(".listaImportancia");
      const elementosLi = listaImportancia.querySelectorAll("li");

      elementosLi.forEach((elementoLi) => {
        if (elementoLi.textContent === tarefaTextoTd) {
          elementoLi.remove();
        }
      });
    }

    console.log(listaTarefasArray);
    console.log(listaTarefasImportanciaArray);
    console.log(listaDescricaoTarefasArray);
  });

  const tdExcluir = document.createElement("td");
  tdExcluir.appendChild(botaoExcluir);
  novaLinha.appendChild(tdExcluir);

  botaoOrdenarPorImportancia.addEventListener("click", () => {
    const listaImportancia = document.querySelector(".listaImportancia");
    listaImportancia.innerHTML = "";
    tarefasOrdenadas.forEach(function (elemento) {
      let itemLista = document.createElement("li");
      itemLista.textContent = elemento;
      listaImportancia.appendChild(itemLista);
    });
  });

  document.querySelector("#idTarefa").value = "";
  document.querySelector("#idAutor").value = "";
  document.querySelector("#idDepartamento").value = "";
  document.querySelector("#idImportancia").value = 5;
  document.querySelector("#idDuracao").value = "";
  document.querySelector("#idValor").value = "Nenhum";
});
