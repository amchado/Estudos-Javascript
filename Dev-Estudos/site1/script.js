function resultado() {
    nomeDoConvidado = document.getElementById('convidado').value
    
    convidados = ['Arthur','Davi', 'Vitoria', 'Levy']

    if(convidados.includes(nomeDoConvidado)){
        document.getElementById('permissaoDeEntrada').innerText ='Você está convidado, uma boa festa'
    }else{
        document.getElementById('permissaoDeEntrada').innerText = 'Você não foi convidado, então não poderá entrar'
    }



}










// const convidados = ['Arthur','Davi', 'Vitoria', 'Levy']

// const anfitrioes = ['Lipe', 'Aloan']

// const convidado = true

// const anfitriao = true


// function lista (convidados) {
//     if(convidado == convidados){
//        return convidados = true 
//     }else{
//         return convidados = false
//     }
// }

// function lista2 (anfitrioes){
//     if(anfitriao === anfitrioes){
//         return anfitrioes === true
//     }else{
//        return anfitrioes === false
//     }


// }

// function resultado(anfitrioes, convidados){

    
//     if(anfitrioes || convidados == true){
//         document.getElementById('permissaoDeEntrada').innerText = 'Você está convidado, uma boa festa'
//     }else{
//         document.getElementById('permissaoDeEntrada').innerText = 'Você não foi convidado, então não poderá entrar'
//     }
// }

// console.log(anfitriao)