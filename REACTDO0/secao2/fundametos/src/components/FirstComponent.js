// arquivos de estilos

import MyComponent from "./MyComponent";

const FirstComponent = () => {
// essa função faz isso
    return (
        
        <div>
            {/* algum comentario*/}

            <h1>Meu primeiro componente</h1>

            <p className ="teste">Meu texto</p>
            
            <MyComponent></MyComponent>
        </div>
    )
}

export default FirstComponent;