//localStorage.setItem("nome", "Arthur")


//let n = localStorage.getItem("nome")
//console.log(n)

//localStorage.removeItem("nome")

onload = function(){
    let nome = localStorage.getItem("nome")
    let h1 = document.getElementById("nome")
    h1.innerHTML = nome

}

function atualizar(element){

    let valor = element.value
    console.log(valor)

    let h1 = document.getElementById("nome")
    h1.innerHTML = valor

    localStorage.setItem("nome", valor)
}