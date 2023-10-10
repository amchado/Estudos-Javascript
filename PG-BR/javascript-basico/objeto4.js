var a = {
    nome:'Arthur',
    idade: 21
}

console.log(a)

function obj(n,i){
    return { nome: n, idade: i}
}

let obj2 = obj('Vitoria',20)
console.log(obj2)

function nomes(n,i){

    this.nome = n
    this.idade = i
    
}

let B = new nomes("Davi", 15)
console.log(B)