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

//Recuperando a div lista-nomes e criando alguns filhos nela.
const divListaNomes = document.querySelector("#lista-nomes");

//Criar os elementos filhos da div que são "p".

//Adicionar texto ao novo elemento p.
nomesAlunosArray.forEach((aluno)=>{
    let p = document.createElement("p");
    p.innerText = aluno; //ou "p.textContent = aluno;".
    p.setAttribute("class","nomes");
    divListaNomes.appendChild(p);
});