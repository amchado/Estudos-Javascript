// function h1click(){
//     console.log('executando função')
    
// }

function changeH1(){
    let input = document.getElementById("texto")
    let h1 = document.getElementsByTagName("h1")[0]
    h1.innerHTML = input.Value;
}