const marcas = [ 
    {id:1, nome:'a'},
    {id:2, nome:'d'},
    {id:3, nome:'k'}
]

const objeto = marcas.find(function(marca){
    return marca.nome === 'a'
})

console.log(objeto)