const valores = [7.7, 8.3, 6.7, 9.2]

console.log(valores[1], valores[0])
console.log(valores[3], valores[2])

valores[4]= 11
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)
console.log(valores.length)

delete valores[0]
console.log(valores)

console.log(typeof valores)