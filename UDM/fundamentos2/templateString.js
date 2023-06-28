const nome = 'Vitoria'
const contatenacao = 'ola ' + nome
const template = `
    Ola
    ${nome}!`

console.log(contatenacao, template)

//expressoes

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('Cuidado')}`)