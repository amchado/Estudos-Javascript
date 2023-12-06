//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções construtoras
function produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto('Geladeira', 430.0, 0.35)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joão', 3000, 4)
const f2 = criarFuncionario('Maria', 4500, 6)

console.log(f1.getSalario(),f2.getSalario())

//Object.create 
const filha = Object.create(null)
filha.nome = 'Maria'
console.log(filha)

//uma função famosa que retorna Objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)