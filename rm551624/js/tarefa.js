let listaTarefasArray = [];

//Recuperando o botão com querySelector
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//Adiciona evento de click no botão para adicionar tarefa ao array e renderizar a view.
botaoAddTarefa.addEventListener("click", (evento)=>{

    evento.preventDefault();
    //console.log(evento.target); //target mostra quem acionou o evento
    const inputTarefa = document.querySelector("#idTarefa");
    
    listaTarefasArray.push(inputTarefa.value);  //coloca os valores inseridos no input em um array
    
    let li = document.createElement("li");  //cria a tag li na memoria
    // li.innerHTML = inputTarefa.value + "<button> x </button>";

    li.textContent = inputTarefa.value;

    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = " Excluir ";
    
    li.appendChild(botaoExcluir);

    const listaTarefasUL = document.querySelector("#lista-tarefas");

    listaTarefasUL.appendChild(li);

    botaoExcluir.addEventListener("click", (evt)=>{

        //console.log(evt.target.parentNode.textContent.split(" ")[0]);

        let conteudoLi = evt.target.parentNode.textContent;

        //Splitando o texto da li com espaço vazio e retornando o resultado em um array.
        let arrayComTextoDaLi = conteudoLi.split(" ");

        //Pegando a posição zero do array de texto da li que possui a Tarefa.
        let tarefaTextoLi = arrayComTextoDaLi[0];

        //Localizando o índice do array da tarefa que será removida com indexOf.
        let indiceDaListaDeTarefas = listaTarefasArray.indexOf(tarefaTextoLi);

        //removendo a tearefa da lista de tarefas array utilizando o índice passado pelo indexOf, com o método splice.
        listaTarefasArray.splice(indiceDaListaDeTarefas,1)


        evt.target.parentNode.remove(); // parentNode retorna o elemento pai
        console.log(listaTarefasArray);
    })
    
    console.log(listaTarefasArray);
    inputTarefa.value = "" //limpa o campo do input

})

