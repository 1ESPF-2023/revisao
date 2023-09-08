
// let frase = "Meu, Professor, é, muito, lindo, eu, amo, muito, ele, de, paixão!";
// let fraseArray = frase.split(",");

// console.log("FRASE NORMAL : " + frase);
// console.log(fraseArray);
//---------------------------------------------------------------


let listaTarefasArray = [];

let listaTarefasImportanciaArray = [];

const botaoAddDuracao = document.querySelector("#btnAddDuracao");
botaoAddDuracao.addEventListener("click", ()=>{
    
    const displayDuracao = document.querySelector("#divDuracao");
    if (displayDuracao.classList.contains("oculto")){
        displayDuracao.classList.remove("oculto");
        displayDuracao.classList.add("visivel");
        botaoAddDuracao.textContent = "Remover Duração"
        }
    else {
        displayDuracao.classList.remove("visivel");
        displayDuracao.classList.add("oculto");
        botaoAddDuracao.textContent = "Adicionar Duração"
        }
})

const botaoAddValor = document.querySelector("#btnAddValor");
botaoAddValor.addEventListener("click", ()=>{
    const displayValor = document.querySelector("#divValor");
    if (displayValor.classList.contains("oculto")){
        displayValor.classList.remove("oculto");
        displayValor.classList.add("visivel");
        botaoAddValor.textContent = "Remover Valor"
        }
    else {
        displayValor.classList.remove("visivel");
        displayValor.classList.add("oculto");
        botaoAddValor.textContent = "Adicionar Valor"
        }
})

//Recuperando o botão com querySelector
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//Adiciona evento de click no botão para adicionar tarefa ao array e renderizar a view.
botaoAddTarefa.addEventListener("click", (evento)=>{
    
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
        valor: parseInt(inputValor)
    };
    if (inputDuracao == null || inputDuracao == "") {
        tarefa.duracao = "Nenhum"
    }
    if (inputValor == null || inputValor == "") {
        tarefa.valor = "Nenhum"
    }


    // Adicione o objeto de tarefa ao array
    listaTarefasArray.push(tarefa);
    listaTarefasImportanciaArray.push(parseInt(inputImportancia));

// Combina as listas e ordena com base na lista de importância
const tarefasOrdenadas = listaTarefasArray.slice().sort((a, b) => {
    const indiceA = listaTarefasArray.indexOf(a);
    const indiceB = listaTarefasArray.indexOf(b);
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
             const indiceDaListaDeTarefas = listaTarefasArray.indexOf(tarefaTextoLi);
             if (indiceDaListaDeTarefas !== -1) {
                 listaTarefasArray.splice(indiceDaListaDeTarefas, 1);
                 listaTarefasImportanciaArray.splice(indiceDaListaDeTarefas, 1);
             }
         }
         console.log(listaTarefasArray)
         console.log(listaTarefasImportanciaArray)
     });
 
     // Cria uma célula <td> para o botão de exclusão e adiciona-o à nova linha
     const tdExcluir = document.createElement("td");
     tdExcluir.appendChild(botaoExcluir);
     novaLinha.appendChild(tdExcluir);


    // Recupere o botão "Ordenar por Importância" com querySelector
const botaoOrdenarPorImportancia = document.querySelector("#btnOrdenarPorImportancia");

// Adicione um evento de clique ao botão para ordenar as linhas da tabela por importância
botaoOrdenarPorImportancia.addEventListener("click", () => {
    // Recupere o corpo da tabela (tbody)
    const tbody = document.querySelector("#lista-tarefas");

    // Crie uma lista de objetos que representam as linhas da tabela
    const linhas = Array.from(tbody.querySelectorAll("tr"));

    // Ordene as linhas com base na coluna "Importância"
    linhas.sort((a, b) => {
        const importanciaA = parseInt(a.querySelector("td:nth-child(4)").textContent);
        const importanciaB = parseInt(b.querySelector("td:nth-child(4)").textContent);
        return importanciaB - importanciaA;
    });

    // Remova todas as linhas da tabela
    linhas.forEach((linha) => {
        tbody.removeChild(linha);
    });

    // Adicione as linhas ordenadas de volta à tabela
    linhas.forEach((linha) => {
        tbody.appendChild(linha);
    });
    console.log(`Linha: ${linhas.value}`)
});

    console.log(listaTarefasArray);
    console.log(listaTarefasImportanciaArray);
// Limpa os campos de entrada
document.querySelector("#idTarefa").value = "";
document.querySelector("#idAutor").value = "";
document.querySelector("#idDepartamento").value = "";
document.querySelector("#idImportancia").value = 5; // Define o valor padrão
document.querySelector("#idDuracao").value = "";
document.querySelector("#idValor").value = 0;
})



