// Criar uma lista de nomes em um array
let nomesAlunosArray = ['Luiz','Marcelo','Osvaldo','Mariele','Izaquias','Josoé','Simone','Roni','Sonia','Sophia'];
//Quebrando a lina
console.log("\n");

//Imprimindo o Array
console.log(nomesAlunosArray);
//Quebrando a lina
console.log("\n");

//Acessando a primeira posição do array de nomes
console.log("Primeiro Aluno: " + nomesAlunosArray[0]);
//Quebrando a lina
console.log("\n");

//Acesso aos elementos da segunda à quarta posição
for (var i=1; i<=3; i++) {
    console.log(`Segundo Aluno ${i}: ${nomesAlunosArray[i]}` );
};
//Quebrando a lina
console.log("\n");

//Imprimindo os nomes com forEach
nomesAlunosArray.forEach((aluno)=> {
    //Imprimndo cada elemento no console
    console.log(`${aluno}`);
});
