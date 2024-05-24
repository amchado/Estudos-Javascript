//removendo elementos de um Array

const array = [1,3,7,10,15]
// array.pop()
// array.shift()
// array.splice()


//tirar o numero final "POP"
 const final = array.pop()
 console.log(final)
 console.log(array)

 //remover o primeiro elemento "shift"
 const comeco = array.shift()
 console.log(comeco)
 console.log(array)

 //remover no meio "splice"
 const meio = array.splice(1,1)
 console.log(meio)
 console.log(array)

 array.push(15,1, 7)
 console.log(array)

 //como zerar um array corretamente
 array.length = 0
 console.log(array)




//juntando arrays
 const primeiro = [1,3,5]
const segundo = [2,4,6]

 const combinado = primeiro.concat(segundo)

 combinado.sort((a , b) => a - b)
 
 
 console.log(combinado)


 //dividindo arrays
 const cortado = combinado.slice(3)
 console.log(cortado)