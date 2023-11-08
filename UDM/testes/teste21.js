function valores(idade){
    if(idade < 10){
        return 180
    }else if(idade <= 30){
        return 150
    }else if(idade <= 60){
        return 195
    }else{
        return 230
    }
}

console.log(valores(8));
console.log(valores(15));
console.log(valores(35));
console.log(valores(52));
console.log(valores(80));