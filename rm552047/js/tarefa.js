// let frase = "Eu, sou, lindo!";
// let fraseArray = frase.split(",");
// console.log("FRASE NORMAL : " + frase);
// console.log(fraseArray)
// ----------------------------------------


let listaTarefasArray = [];

// Recuperando o botão com querySelector
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

// Adicionar evento de click no botão para adicionar tarefa ao array e renderizar a view.
botaoAddTarefa.addEventListener("click", (evento)=>{
    
    evento.preventDefault();
    
    const inputTarefa = document.querySelector("#idTarefa");

    listaTarefasArray.push(inputTarefa.value);


    let li = document.createElement("li"); 

    // li.innerHTML = inputTarefa.value + "<button> x </button>";

    li.textContent = inputTarefa.value;

    let botaoExcluir = document.createElement("button")
    
    botaoExcluir.textContent = " x ";
    
    li.appendChild(botaoExcluir);
    
    const listaTarefasUl = document.querySelector("#lista-tarefas")

    listaTarefasUl.appendChild(li);
    
    botaoExcluir.addEventListener("click", (evt)=>{
        // console.log(evt.target.parentNode.textContent.split(" ")[0]);

        let conteudoLi = evt.target.parentNode.textContent;

        // Splitando o texto da li com espaço vazio e pegando a posição zero do array de 
        // retorno.
        let arrayComTrxtodaLi = conteudoLi.split(" ");

        // Pegando a posição zero do array de texto do li que possui a Tarefa.
        let tarefaTextoLi = arrayComTrxtodaLi[0];
        
        // Localizando o índice da tarefa na lista da tarefa array com indexOf.
        let indiceDaListaDeTarefas = listaTarefasArray.indexOf(tarefaTextoLi);

        // Removendo a tarefa da lista de tarefas array utilizando o índice passado peço indexOf, com o método splice.
        listaTarefasArray.splice(indiceDaListaDeTarefas,1);


        evt.target.parentNode.remove();
        // console.log(evt.target.parentNode);
        console.log(listaTarefasArray)

    })

    console.log(listaTarefasArray);
    inputTarefa.value = "";

    // console.log(evento.target);
})


