const notas = [6.7, 9.4, 1.5, 8.5, 4.3]
for( i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenone: 'Almeida',
    idade: 15,
    peso:80
}

for( let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}