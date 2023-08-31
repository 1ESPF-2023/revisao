
// let frase = "Meu, Professor, é, muito, lindo, eu, amo, muito, ele, de, paixão!";
// let fraseArray = frase.split(",");

// console.log("FRASE NORMAL : " + frase);
// console.log(fraseArray);
//---------------------------------------------------------------


let listaTarefasArray = [];

let listaTarefasImportanciaArray = [];


//Recuperando o botão com querySelector
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//Adiciona evento de click no botão para adicionar tarefa ao array e renderizar a view.
botaoAddTarefa.addEventListener("click", (evento)=>{
    
    evento.preventDefault();

    const inputDescricao = document.querySelector("#idTarefa");
    const inputAutor = document.querySelector("#idAutor");
    const inputDepartamento = document.querySelector("#idDepartamento");
    const inputImportancia = document.querySelector("#idImportancia");

    listaTarefasArray.push(inputDescricao.value);
    listaTarefasImportanciaArray.push(parseInt(inputImportancia.value));

// Combina as listas e ordena com base na lista de importância
const tarefasOrdenadas = listaTarefasArray.slice().sort((a, b) => {
    const indiceA = listaTarefasArray.indexOf(a);
    const indiceB = listaTarefasArray.indexOf(b);
    return listaTarefasImportanciaArray[indiceB] - listaTarefasImportanciaArray[indiceA];
  });
  
  // Imprime a lista de tarefas ordenada por importância
  console.log(tarefasOrdenadas);
    
    let li = document.createElement("li");

    // li.innerHTML = inputTarefa.value + "<button> x </button>";
    li.textContent = (`${inputDescricao.value} - ${inputAutor.value} - ${inputDepartamento.value} - ${inputImportancia.value}`) ;
    
    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    const listaTarefasUL = document.querySelector("#lista-tarefas");

    listaTarefasUL.appendChild(li);

    botaoExcluir.addEventListener("click",(evt)=>{
        // console.log(evt.target.parentNode.textContent.split(" ")[0]);

        let conteudoLi = evt.target.parentNode.textContent;

        //Splitando o texto da li com espaço vazio e retornando o resultado em um array.
        let arrayComTextoDaLi = conteudoLi.split(" ");

        //Pegando a posição zero do array de texto da li que possui a Tarefa.
        let tarefaTextoLi = arrayComTextoDaLi[0];

        //Localizando o índice da tarefa na lista de tarefa array com indexOf.
        let indiceDaListaDeTarefas = listaTarefasArray.indexOf(tarefaTextoLi);

        //Removendo a tarefa da lista de tarefas array utilizando o índice passado pelo indexOf, com o método splice.
        listaTarefasArray.splice(indiceDaListaDeTarefas,1);
        
        evt.target.parentNode.remove();
        console.log(listaTarefasArray);
    });

    console.log(listaTarefasArray);
    console.log(listaTarefasImportanciaArray);
    inputDescricao.value = "";
    inputAutor.value = "";
    inputDepartamento.value = "";
    inputImportancia.value = 5;
})



// FAZER LISTA IMPORTÂNCIA RECEBER INT