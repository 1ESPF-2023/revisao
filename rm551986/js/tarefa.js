let listaTarefasArray = []

// usar hashtag pois eh como se estivesse em um css
const botaoAddTarefa = document.querySelector("#btnAddTarefa") 

//adicionar evento de click no botao 
botaoAddTarefa.addEventListener("click", (evento)=>{

    evento.preventDefault();



    const inputTarefa = document.querySelector("#idTarefa")
        
    console.log(inputTarefa.value);

    listaTarefasArray.push(inputTarefa.value);

    let li = document.createElement("li")

    // li.innerHTML = inputTarefa.value + "<button> x </button>"
    li.textContent = inputTarefa.value;

  
    
    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    const listaTarefasUL = document.querySelector("#lista-tarefas");

    listaTarefasUL.appendChild(li);

    botaoExcluir.addEventListener("click", (evt)=>{

        // console.log(evt.target.parentNode.textContent.split(" ")(0))

        let conteudoLi = evt.target.parentNode.textContent

        //splitando o texto da li com espaço vazio e pegando a posição 0 di array de retorno
        let arrayComTextoDaLi = conteudoli.split(" ");

        //Pegando a posição zero do array de texto da li que possui a Tarefa
        let tearefaTextoLi = arrayComTextoDaLi(0);

        //Localizando o indice da tarefa na lista de tarefas array com indexOf
        let indiceDaListaDeTarefas = listaTarefasArray.indexOf(tearefaTextoLi)

        //removendo a tarefa da lista de tarefas array utilizando o indice passadp éçp indexof com o metodo splice
        listaTarefasArray.splice(indiceDaListaDeTarefas,1 );

        evt.target.parentNode.remove()
        console.log(listaTarefasArray); 

    })

    console.log(listaTarefasArray);
    inputTarefa.value = "";



})



