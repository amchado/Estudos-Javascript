function criarProduto(nome, valor){
    return{
        nome,
        valor,
        desconto: 0.1
    }
    
}

console.log(criarProduto('Console', 5000))
console.log(criarProduto('Pc gamer', 3.400))
