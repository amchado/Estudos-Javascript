/* innerHTML pode adicionar tags html/ ja innerText, e text.content apenas textos */

let p = document.getElementById("p1")

p.innerHTML = "<h2> titulo dentro do p <h2>"

/* 

Outra maneira de mudar o conteudo no HTML

p.innerText = "outro conteudo"

p.textContent = "mais novo ainda"

*/
