
localStorage.setItem("numero", 5)

let n = localStorage.getItem("numero")
console.log(n)

let a = {
    nome:"Arthur",nota: 9.5
}

localStorage.setItem("aluno", JSON.stringify(a))
console.log(a.nota)