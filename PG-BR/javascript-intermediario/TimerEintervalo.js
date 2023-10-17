function mudarCor(){
    let h = document.getElementsByTagName("h1")[0]

    h.style.color = "blue"
    h.style.textDecoration = "underline"
}


function mudarTexto(){
    
    let h = document.getElementsByTagName("h1")[0]
    
    h.innerHTML = "Novo titulo"

    setTimeout(mudarCor,1000)

}