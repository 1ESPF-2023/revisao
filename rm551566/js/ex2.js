const salarios = [1500, 2200, 1800, 2500, 1900, 3000, 1700, 2100, 2400, 2800];

const salariosAjustados = salarios.map(salario => {
    if (salario <= 2000) {
        return salario * 1.15; // Aumento de 15%
    } else {
        return salario * 1.10; // Aumento de 10%
    }
});

console.log(salariosAjustados);


const salariosSuperiores2500 = salariosAjustados.filter(salario => salario > 2500)
console.log(salariosSuperiores2500);