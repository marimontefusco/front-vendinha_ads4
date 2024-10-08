// import {useState} from 'react';
// import "./CadastroUser.css"

// function CadastroUser() {

//   // [variavel, metodo] e o q vai muar o valor do state a funçao
//   const [email, SetEmail] = useState('');
//   console.log(email);


//   async function salvar() {
//     let api = await fetch("viacep.com.br/ws/"+email+"/json/");
//     //let apiCep = await fetch("viacep.com.br/ws/01001000/json/"); //tá chamando a api do viaCep
//     let resposta = await api.json();

//     if(api.ok) {
//       console.log(resposta);
//       return 
//       //vazio pq para o fluxo da execuçao -> depois do return ele não executa o q tiver abaixo
//     }
//     console.log(resposta);

//   //   //alert("salvando o usuário");


//   return (
//     <div className="container">
//       <div id="formulario">
//         <h2>Cadastro</h2>

//         <form >
//           <label form="name">Nome</label>
//           <input type="text" id="name" name="name" /><br />

//           <label form="email">Email</label><br />
//           <input type="email" id="email" name="email" 
//           value={email} onChange={(e) => SetEmail(e.target.value)}/><br />

//           <label form="document">CPF / CNPJ</label><br />
//           <input type="text" id="document" name="document" /><br />

//           <label form="password">Senha</label><br />
//           <input form="password" id="password" name="password" /><br />

//           <input onClick={salvar} type="button" value="Cadastrar" />

//         </form>

//       </div>
      
//     </div>
//   )

// }

// export default CadastroUser;
// //exporta pra poder usar em outras pags