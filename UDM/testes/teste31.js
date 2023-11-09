function numerosNegativos(vetor){
   let qtdNumerosNegativos = 0
   for(let i = 0; i < vetor.length; i++){
    if(vetor[i] < 0){
        qtdNumerosNegativos++
    }
   }
   return qtdNumerosNegativos
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))