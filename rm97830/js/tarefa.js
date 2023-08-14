let listaTarefasArray = [];

//Recuperando o botão com querySelector.
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//Adicione um evento de click no botão para adicionar tarefa ao array e renderizar a view.
botaoAddTarefa.addEventListener("click", (evento)=>{
    evento.preventDefault();

    const inputTarefa = document.querySelector("#idTarefa");

    listaTarefasArray.push(inputTarefa.value);

    let li = document.createElement("li");

    li.textContent = inputTarefa.value;

    let botaoExcluir = document.createElement("button");
    
    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    const listaTarefasUL = document.querySelector("#lista-tarefas");

    listaTarefasUL.appendChild(li);

    //Adicionando Listener para o botão de excluir.
    botaoExcluir.addEventListener("click", (evt)=>{
        evt.target.parentNode.textContent.split(" ")[0];

        evt.target.parentNode.remove();

        console.log(listaTarefasArray);
    });

    inputTarefa.value = "";
});
