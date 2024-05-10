

function exibirNumerosPrimos(limite){

    for(let numero = 2; numero <= limite; numero++){
        let EhPrimo = true

        for(let divisor = 2; divisor < numero ; divisor++){
            if(numero % divisor === 0 ){
                EhPrimo = false
                break
            }
        }
        
        if(EhPrimo){
            console.log(numero)
        }
    }

}

exibirNumerosPrimos(20)



























// function exibirNumerosPrimos(limite){
    
//     for(let numero = 2; numero <= limite; numero++){
//         let ehPrimo = true
        
//         for(let divisor = 2; divisor < numero; divisor++){
//             if(numero % divisor === 0){
//               ehPrimo = false
//               break
//             }
//         }
//         if(ehPrimo){
//             console.log(numero)
//         }
//     }
// }

// exibirNumerosPrimos(15)