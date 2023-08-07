

//Criar uma lista de nomes de alunos em um array
let nomesAlunosArray = ["Pedro", "Luis","Caros", "Maria","Joice","Otávio","Antônio","Jefferson","Rony"]; 
//Imprimindo o Array de nomes
console.log(nomesAlunosArray);

//Acessar a primeira posição do array de nomes de alunos.

console.log("Primeiro Aluno: " + nomesAlunosArray[0]);

//Acessando os elementos da segunda até a quarta posições dos arrays
for (var i=0; i<=3 ; i++) {
    console.log(`Aluno ${i}: ${nomesAlunosArray[i]}`);
};

//Quebrando linha
console.log("\n");

//Imprimindo todos os alunos com forEach
nomesAlunosArray.forEach((aluno) =>  {
    //Imprime cada elemento no console
    console.log(`${aluno} ` );  
});

//Recuperando a div lista-nomes e criando alguns filhos nela.
const divListaNomes = document.querySelector("#lista-nome");

//Criar os elementos da div que são 'p'


nomesAlunosArray.forEach((aluno)=>{
    let p = document.createElement("p");
    p.innerText = aluno;

    p.setAttribute("class", "nomes")

    divListaNomes.appendChild(p);
});










