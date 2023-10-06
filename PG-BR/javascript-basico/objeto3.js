function criarAluno(nome,n1,n2){
    return{
        nome:nome, nota: n1, nota2: n2, media:function(){
            return(this.nota + this.nota2)/2
        
        }
    }
}



var turma = [criarAluno("igor", 9, 6),
             criarAluno("Vitoria", 10, 6),
             criarAluno("Leticia", 4, 6)]


 let aluno = turma[0]
 console.log(aluno)
 console.log(aluno.media())

 turma.forEach(function (elemento){
    console.log(elemento)
 })

 for (let aluno of turma){
    console.log(aluno.nome + "-" + aluno.media())
 }

// let aluno2 = turma[1]
// console.log(aluno2)
// console.log(aluno2.media())