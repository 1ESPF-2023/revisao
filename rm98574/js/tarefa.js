// let fraseArray = frase.split(",");

// console.log("FRASE NORMAL : " + frase);
// console.log(fraseArray);
//---------------------------------------------------------------


let listaTarefasArray = [];

//Recuperando o botão com querySelector
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//Adiciona evento de click no botão para adicionar tarefa ao array e renderizar a view.
botaoAddTarefa.addEventListener("click", (evento)=>{
    
    evento.preventDefault();

    const inputTarefa = document.querySelector("#idTarefa");
    
    listaTarefasArray.push(inputTarefa.value);
    
    let li = document.createElement("li");

    // li.innerHTML = inputTarefa.value + "<button> x </button>";
    li.textContent = inputTarefa.value;
    
    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    const listaTarefasUL = document.querySelector("#lista-tarefas");

    listaTarefasUL.appendChild(li);

    botaoExcluir.addEventListener("click",(evt)=>{

        console.log(evt.target.parentNode.textContent)

        evt.target.parentNode.remove();
        console.log(listaTarefasArray);
    });

    console.log(listaTarefasArray);
    inputTarefa.value = "";

})
