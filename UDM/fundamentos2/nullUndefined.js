let valor // não inicializado
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor toString()) == ERRO!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 4.30
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco) 
console.log(produto)