let nomesAlunosArray = ["Pedro","Luis","Carlos","Maria","Joice","Otávio","Antônio","Jefferson","Rony"];

console.log(nomesAlunosArray);

console.log("\n");

//Acessar a primeira posição do array de nomes de alunos.
console.log("Aluno 0: " + nomesAlunosArray[0]);

console.log("\n");

for (var i=1; i<=3 ; i++) {
    console.log(`Aluno ${i}: ${nomesAlunosArray[i]}`);
};

console.log("\n");

nomesAlunosArray.forEach((aluno)=>{
    console.log(`${aluno}`);
});