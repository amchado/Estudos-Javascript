 function algoritimo(vetor){
     let menor
     let maior
     for(let i = 0; i < vetor.length; i++){
         if(maior == undefined && menor == undefined){
             maior = vetor[i]
             menor = vetor[i]
         }else{
             if(vetor[i] > maior){
                maior = vetor[i]
             }
             if(vetor[i] < menor){
                 menor = vetor[i]
             }
        }
    }
    return [maior,menor]
}

 vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

 console.log(algoritimo(vetor))

