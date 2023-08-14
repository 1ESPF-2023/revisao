
//let frase = "Meu, Professor"
//let fraseArray = frase.split(",")

//console.log("FRASE NORMAL : "+ frase)
//console.log(fraseArray)
let listaTarefaArray=[];

//Recuperando o botão com queryselector
const botaoAddTarefa = document.querySelector("#btnAddTarefa")

//Adciona o evento de click no botão para adicionar tarefa ao array
botaoAddTarefa.addEventListener("click", (evento)=>{
    evento.preventDefault();

    const inputTarefa=document.querySelector("#idTarefa")

    listaTarefaArray.push(inputTarefa.value)

    let li=document.createElement("li");

    //li.innerHTML = inputTarefa.value + "<buton> x </buton>";
    li.textContent=inputTarefa.value;
    
    let botaoExcluir=document.createElement("button")
    
    botaoExcluir.textContent=" x "
    
    li.appendChild(botaoExcluir);
    
    const listaTarefaUL=document.querySelector("#lista-tarefas");

    listaTarefaUL.appendChild(li);

    botaoExcluir.addEventListener("click", (evt)=>{
        //console.log(evt.target.parentNode.textContent.split(" ")[0]);
        let conteudoli=evt.target.parentNode.textContent;
        let arrayComTextoLi = conteudoli.split(" ")
        let tarefaTextoli = arrayComTextoLi[0]
        let indiceDaListaDeTarefas=listaTarefaArray.indexOf(tarefaTextoli)
        listaTarefaArray.splice(indiceDaListaDeTarefas,1)


        evt.target.parentNode.remove()
        console.log(listaTarefaArray);
    })

    console.log(listaTarefaArray);
    inputTarefa.value="";
})