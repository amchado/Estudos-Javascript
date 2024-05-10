
function fizzbuzz(entrada){
    if(typeof entrada !== 'number'){
        return 'Isto não é um número'
    }else if(entrada % 3 === 0 && entrada % 5 === 0){
        return 'FizzBuzz'
    }else if(entrada % 3 === 0 ){
        return 'Fizz'
    }else if(entrada % 5 === 0 ){
        return 'Buzz'
    }else{
        return 'Esté número não é divisivel por 3 e 5'
    }
}

const resultado = fizzbuzz(30)
console.log(resultado)