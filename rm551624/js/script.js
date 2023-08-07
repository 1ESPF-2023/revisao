// Criar uma lista de nomes de alunos em um array
let nomesAlunosArray = ["Pedro", "Luis", "Carlos", "Maria", "Joice", "Otávio", "Antônio", "Jefferson", "Rony"];
//Imprimindo o Array de nomes
console.log(nomesAlunosArray);

//Acessar a primeira posição do array de nomes de alunos.
console.log("Primeiro Aluno: " + nomesAlunosArray[0]);

//Acessando os elementos da segunda até a quarta posição dos arrays.
for (var i=1; i<=3; i++) {
    console.log(`${i+1}º Aluno: ${i}: ${nomesAlunosArray[i]}`);
};

//Quebrando linha
console.log("\n");

//Imprimindo todos os alunos com forEach
nomesAlunosArray.forEach((aluno) => {
    //Imprime cada elemento no console
    console.log(`${aluno}`);
})

//Reccuperando a div lista-nomes e criando alguns filhos nela.
const divListaNomes = document.querySelector("#lista-nome");


nomesAlunosArray.forEach((aluno) => {
    //Criar os elementos filhos da div que são 'p'
    //cria vários elementos no html 'p'
    let p = document.createElement("p");

    //Escreve no html os nomes da lista
    p.textContent = aluno;

    p.setAttribute("class", "nomes");
    divListaNomes.appendChild(p);
})


