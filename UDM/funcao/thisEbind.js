const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)}
    }

pessoa.falar()

const pessoa2 = {
    saudacao: 'Boa tarde!',
    falar(){
        console.log(this.saudacao)
    }

}

pessoa2.falar()

const falar = pessoa.falar
falar() // conflito entra paradigmas: funcional e do

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()