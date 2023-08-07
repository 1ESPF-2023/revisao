//Criar uma lista de nomes de alunos com um array;

let nomesAlunosArray = ["Pedro","Luis","Carlos","Maria","Joice","Otávio","Antônio","Jefferson","Rony"];

//Imprimindo o Array de nomes;
console.log(nomesAlunosArray);

//Acessar a primeira posição do array de nomes de alunos;
console.log("Primeiro aluno: " + nomesAlunosArray[0]);

//Acessando os elementos da segunda até a quarta posições dos arrays;
for(var i=1; i=3; i++){
    console.log(`Segundo Aluno ${i}: ${nomesAlunosArray[i]}`);
};

//Quebrando linha;
console.log("\n");

//Imprimindo todos os alunos com forEach;
nomesAlunosArray.forEach((aluno) => {
    // Imprime cada elemento no console;
    console.log(`${aluno} ` );
})

//Recuperando a div lista-nomes e criando alguns nela.
const divListaNomes = documento.querySelector("#lista-nome");

//Criar os elementos filhos da div que são 'p';

nomesAlunosArray.forEach((aluno)=>{
    let p = document.createElement("p");
    p.innerText = aluno;

    p.setAttribute("class","nomes");

    divListaNomes.appenChild(p);
})

