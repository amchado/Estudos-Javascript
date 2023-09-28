var idade = 65

var menor10 = idade <= 10
var maior65 = idade >= 65

var gratuidade = menor10 || maior65

console.log('idade', idade)
console.log("maior que 65 anos?", maior65)
console.log("menor que 10 anos de idade?", menor10)
console.log("tem direito a gratuidade ?", gratuidade)
