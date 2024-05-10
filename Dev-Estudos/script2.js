// condições de if

let today = new Date()

let hora = today.getHours()

if(hora >= 5 && hora <= 11){
    console.log("bom dia")
}else if(hora >= 12 && hora <= 18){
    console.log("boa tarde")
}else{ console.log("boa noite ")}