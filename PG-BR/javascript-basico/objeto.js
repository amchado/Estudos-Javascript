
let aluno = {nome:"matheus", notas:[7.5, 6.0]}

console.log(aluno["notas"][0]) 

let novaProp = "sobrenome"
aluno[novaProp] = "Ciqueira"

aluno.matricula = 23123;
console.log(aluno)

let funcionario = new Object
funcionario.nome = "Jose"
funcionario.salario = [1200,250]
console.log(funcionario)