//Criando uma lista de nomes de alunos em um array.
let nomesAlunosArray = ['Pedro', 'Luis', 'Carlos', 'Maria', 'Joice', 'Otavio', 'Antônio', 'Jefferson', 'Rony'];
//Imprimindo o array de nomes.
console.log(nomesAlunosArray);

//Quebrando linha.
console.log("\n");

//Acessando a primeira posição do array de nomes de alunos.
console.log("Primeiro aluno:" + nomesAlunosArray[0]);

//Quebrando linha.
console.log("\n");

//Acessando os elementos da segunda até a quarta posição dos arrays.
for (var i=1; i<=3; i++) {
    console.log(`Segundo Aluno: ${i}: ${nomesAlunosArray[i]}`)
};

//Quebrando linha.
console.log("\n");

//Imprimindo todos os alunos com ForEach.
nomesAlunosArray.forEach((aluno) => {
    //Imprime cada elemento no console.
    console.log(`${aluno}`);
});

//Recuperando a div lista-nomes e criando alguns filhos nela.
const divListaNomes = document.querySelector("#lista-nome");

nomesAlunosArray.forEach((aluno=>{
    //Criar os elementos filhos da div que são 'P'.
    let p = document.createElement("p");
    p.textContent = aluno;

    p.setAttribute("class", "nomes");

    divListaNomes.appendChild(p);
}));
