// Criar uma lista de nomes em um array
let nomesAlunosArray = ['Luiz','Marcelo','Osvaldo','Mariele','Izaquias','Josoé','Simone','Roni','Sonia','Sophia'];
//Imprimindo o Array
console.log(nomesAlunosArray);
//Acessando a primeira posição do array de nomes
// console.log("1° Aluno: " + nomesAlunosArray[0]);

//Acesso aos elementos da segunda à quarta posição
for (var i=0; i<=9; i++) {
    console.log(`${i+1}° Aluno: ${nomesAlunosArray[i]}` );
};
//Quebrando a lina
console.log("\n");

//Imprimindo os nomes com forEach
nomesAlunosArray.forEach((aluno)=> {
    //Imprimndo cada elemento no console
    console.log(`${aluno}`);
});

//recuperando a div lista-nomes e criando childs nela
const divListaNome = document.querySelector("#lista-nome");

nomesAlunosArray.forEach((aluno)=>{
    //criar os elementos child da div que são "p";
    let p = document.createElement("p");
    p.innerText = aluno;

    p.setAttribute("class","nomes");

    divListaNome.appendChild(p);
});

