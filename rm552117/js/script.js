

//Criar uma lista de nomes de alunos em um array
let nomesAlunosArray = ["Pedro","Luis","Carlos","Maria","Joice","Otávio","Antônio","Jefferson","Rony"];
//Imprimindo o Array de nomes
console.log(nomesAlunosArray);

//Quebrando linha
console.log("\n");

//Acessar a primeira posição do array de nomes de alunos.
console.log("Primeiro Aluno: " + nomesAlunosArray[0]);

//Quebrando linha
console.log("\n");

//Acessando os elementos da segunda até a quarta posições dos arrays
for (var i=1; i<=3 ; i++) {
    console.log(`Segundo Aluno ${i}: ${nomesAlunosArray[i]}`);
};

//Quebrando linha
console.log("\n");

//Imprimindo todos os alunos com forEach
nomesAlunosArray.forEach((aluno) =>  {
    //Imprime cada elemento no console
    console.log(`${aluno} ` );  
});

