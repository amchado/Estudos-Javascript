const filme = {
    Titulo: 'Aranhaverso',
    Ano: 2024,
    Diretor: 'David pitrevel',
    Personagens: 'Miles Morales, Gwen, Peter Parker'
}

function  informação(obj){
    for(prop in obj){
        if(typeof obj[prop]=== 'string'){
            console.log(prop, obj[prop])
        }
    }
}


informação(filme)