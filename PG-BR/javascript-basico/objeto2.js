function calcMedia(n1,n2){
    return (this.notas[0] + this.notas[1])/2
}



let aluno = {nome:"Samira",
                notas:[10,9.5],
            
    media: calcMedia
}

 let aluno2 = {nome:"Rayssa",
                 notas:[3,8],
            
     media: calcMedia
}
 

console.log(aluno.nome)
console.log(aluno.media())

 console.log(aluno2.nome)
 console.log(aluno2.media())