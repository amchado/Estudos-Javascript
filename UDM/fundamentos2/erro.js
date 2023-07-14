function tratarErooELancar(erro){
    throw new Error('...')
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e)  {
        tratarErooELancar(e)
        } finally {
            console.log('final')
        }
    }
    

const obj = {name: 'Arthur'}
imprimirNomeGritado(obj)