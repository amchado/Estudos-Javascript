function aumento(plano, salarioAtual){
    switch(plano){
        case 'A': return salarioAtual * 1.1
        case 'B': return salarioAtual * 1.15
        case 'C': return salarioAtual * 1.20
        default: return "Plano invalido"
    }
}

console.log(aumento('A',1000))
console.log(aumento('B',1000))
console.log(aumento('C',1000))
console.log(aumento('D',1000))