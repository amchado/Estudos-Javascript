let nome = 'Caneta'
let quantidade = 10
let valor = 7.50
let imposto = 1.50
let precoFinal = valor + imposto
let total = precoFinal * quantidade

console.log(nome)
console.log(quantidade)
console.log(valor)
console.log(imposto)
console.log(precoFinal)
console.log(total)

console.log(`Arthur comprou ${quantidade} ${nome + "s"}. E cada uma custava ${valor} mais o imposto de ${imposto} cada`)
console.log(`Resultando no valor de ${precoFinal} cada uma. como precisava de ${quantidade}, acabou resultando no total de ${total}$ `)