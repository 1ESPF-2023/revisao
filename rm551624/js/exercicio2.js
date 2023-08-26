// Jeito 1 de usar o map criando uma função fora do map

let salarios = [2678, 3200, 1535, 3125, 1867, 3789, 2310, 2925, 1238, 4214]
console.log("Salário:", salarios)

function aumento (e) {
    if (e <= 2000){
        return e * 0.15 + e
    }

    else  {
        return e * 0.10 + e
    }
}
let salariosAumento = salarios.map(aumento)

console.log("Salário com aumento:", salariosAumento)

// Jeito 2 de usar o map criando a função dentro do map

let salariosPadrão = [2678, 3200, 1535, 3125, 1867, 3789, 2310, 2925, 1238, 4214]
console.log("Salário:", salariosPadrão)

let salariosComAumento = salarios.map(function(e) {if (e <= 2000){return e * 0.15 + e}else{return e * 0.10 + e}})

console.log("Salário com aumento:", salariosComAumento)