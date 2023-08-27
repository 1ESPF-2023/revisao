let salarios = [2678, 3200, 1535, 3125, 1867, 3789, 2310, 2925, 1238, 4214]
console.log("Salários:", salarios)

function aumento (e) {
    if (e <= 2000){
        return e * 0.15 + e
    }
    
    else  {
        return e * 0.10 + e
    }
}
let salariosAumento = salarios.map(aumento)
console.log("Salários com Aumento:", salariosAumento)

let acimaDeDoisEQuinhnetos = salariosAumento.filter(e => e > 2500)
console.log("Salários acima de 2500:", acimaDeDoisEQuinhnetos) 