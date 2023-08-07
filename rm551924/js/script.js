

// Criar uma lista de nomes de alunos em um array

let nomeAlunosArray = ["Pedro", "Luis", "Carlos", "Maria", "Joice", "Otávio", "Antônio", "Jefferson", "Rony"];
console.log(nomeAlunosArray);

//Acessar a primeira posição do array de nomes de alunos
console.log("Primeiro Aluno: " + nomeAlunosArray[0]);

//Acessando elementos da segunda até a quarta posiç.ões dos arrays
for (var i=1; i<=3; i++){
    console.log(`Segundo Aluno ${i}:  ${nomeAlunosArray[i]}`);
}

// Imprimindo todos os alunos com forEach
nomeAlunosArray.forEach((aluno) => {
    console.log(`${aluno}`);
});