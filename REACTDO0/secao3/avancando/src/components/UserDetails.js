

const UserDetails = ({nome,idade,profissao}) => {
  return (
    <div>
        <h2>Detalhes do Usuario</h2>
        <ul>
            <li><h3>Nome: {nome}</h3></li>
            <li>idade: {idade}</li>
            <li>Profissão: {profissao}</li>
        </ul>
        {idade >= 18 ? (<p>Ja pode tirar a carteira de habilitação</p>) : (<p>Ainda não pode tirar a carteira de habilitação</p>)}
    </div>
  )
}

export default UserDetails