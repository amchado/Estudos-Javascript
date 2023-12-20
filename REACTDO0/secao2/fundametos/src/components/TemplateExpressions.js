const TemplateExpressions = () => {
        const name = "Arthur"
        const data = {
            age: 31,
            job:"programer"
        }

    return(

        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
        </div>
    )
}

export default TemplateExpressions