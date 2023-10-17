let pessoas = [ "Arthur","vitoria","Davi", "felipe","Fernando","Alisson","Dandara"]




function sortear(){
    
    let np = pessoas.length
    let ns = Math.floor(Math.random() *np)

    document.getElementById("resultado").innerHTML = pessoas[ns]
}