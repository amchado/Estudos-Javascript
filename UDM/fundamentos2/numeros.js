const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliaçao1 = 3.123
const avaliaçao2 = 5.812

const total = peso1 * avaliaçao1 + peso2 * avaliaçao2
const media = total / (peso1 + peso2)
console.log(total)
console.log(media)

console.log(media.toFixed(4))