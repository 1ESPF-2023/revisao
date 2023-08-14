let nomesAlunosArray = ["Pedro", "Carlos", "Otavio", "Joice"];

console.log(nomesAlunosArray);

console.log("/n");

console.log("Primeiro Aluno: " + nomesAlunosArray[0]);

for (var i = 1; 1<=3 ; i++) {
    console.log(`Segundo aluno ${i}: ${nomesAlunosArray[i]}`)
};

console.log("/n");

nomesAlunosArray.forEach((aluno) => {
    console.log(`${aluno}`)
});
