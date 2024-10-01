import "./CadastroUser.css"

function CadastroUser() {
 
  return (
  <div id="formulario">
    <h2>Cadastro</h2>

    <form action="">  
      <label form="name">Nome</label><br/>
      <input type="text" id="name" name="name"/>
      <br />

        <label form="email">Email</label><br />
        <input type="email" id="email" name="email" /><br />

        <label form="document">CPF / CNPJ</label><br />
        <input type="text" id="document" name="document" /><br />

        <label form="password">Senha</label><br />
        <input form="password" id="password" name="password" /><br />

      <input type="button" value="Cadastrar"/>

    </form>

  </div>
 )

}

export default CadastroUser;
//exporta pra poder usar em outras pags