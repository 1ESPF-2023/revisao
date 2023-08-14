let listaTarefasArray = [];


// Recuperando o botão com querySelector
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//Adiciona evento de click no botão para adicionar tarefa ao array e renderizar a view.
botaoAddTarefa.addEventListener("click",(event)=>{
    event.preventDefault();

    const inputTarefa = document.querySelector("#idTarefa");

    listaTarefasArray.push(inputTarefa.value);

    let li = document.createElement("li");

    // li.innerHTML= inputTarefa.value + " <button> x </button>";

    li.textContent = inputTarefa.value;

    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " X ";

    li.appendChild(botaoExcluir);

    const listaTarefaUl = document.querySelector("#lista-tarefas");

    listaTarefaUl.appendChild(li);

    botaoExcluir.addEventListener("click",(evt)=>{

        // console.log(evt.target.parentNode.textContent.split(" ")[0]);

        let conteudoLi = evt.target.parentNode.textContent;

        //Splitando o texto da li com espaço vazio e pegando a posição zero do array de retorno.
        // let textoTarefaRemovidaDoLi = conteudoLi.split(" ")[0];

        //Splitando o texto da li com espaço vazio e retornando o resultado em um array.
        let arrayComTextoDaLi = conteudoLi.split(" ");

        //Pegando a posição zero do array de texto da li que possui a Tarefa.
        let tarefaTextoLi = arrayComTextoDaLi[0];

        //Localizando o índice da tarefa na lista de tarefa array com indexOf.
        let indiceDaListaDeTarefas = listaTarefasArray.indexOf(tarefaTextoLi);

        //Removendo a tarefa da lista de tarefas array utilizando o índice passado pelo indexOf, com o método splice.
        listaTarefasArray.splice(indiceDaListaDeTarefas, 1);
        

        evt.target.parentNode.remove();
        
        console.log(evt.target.parentNode);
    });

    
    console.log(listaTarefasArray);
    inputTarefa.value = "";


});