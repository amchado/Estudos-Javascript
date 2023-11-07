function calcularAnoBixento(ano){
    if(ano <= 0){
        return false
    }else if(ano %400 == 0 ){
        return true
    }else if(ano %100 == 0 ){
        return true
    }else if(ano %4 == 0 ){
        return true
    }else{
        return false
    }
}

console.log(calcularAnoBixento(0))
console.log(calcularAnoBixento(4))
console.log(calcularAnoBixento(100))
console.log(calcularAnoBixento(400))
console.log(calcularAnoBixento(800))
console.log(calcularAnoBixento(2020))
console.log(calcularAnoBixento(2021))
console.log(calcularAnoBixento(2022))
console.log(calcularAnoBixento(2023))
console.log(calcularAnoBixento(2024))