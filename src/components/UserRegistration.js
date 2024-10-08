import './UserRegistration.css'

function UserRegistration()  {

  return (
    <div className="container">
      <div id="form">
        <form>
          <h2>Cadastro de Usuários</h2>

          <label form="name">Nome</label><br />
          <input type="text" id="name" name="name" />
          <br />

          <label form="document">CPF / CNPJ</label><br />
          <input type="text" id="document" name="document" />
          <br />

          <label form="email">Email</label><br />
          <input type="email" id="email" name="email" />
          <br />

          <label form="password">Senha</label><br />
          <input type="password" id="password" name="password" />
          <br />

          <input type="button" value="Cadastrar" />

        </form>
      </div>
    </div>
  )

}

export default UserRegistration;
//exporta pra poder usar em outras pags