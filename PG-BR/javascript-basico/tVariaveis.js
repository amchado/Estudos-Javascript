/* Uma constante nao pode ser reatribuida, mas pode ser alterada dependendo da situaçao */

var numero1 = 4
let numero2 = 5
const numero3 = [3]
numero3.push = 7

//outro exemplo
const numero4 = {}
numero4.nome = "Arthur"


console.log(numero1)
console.log(numero2)
console.log(numero3)
console.log(numero4)

