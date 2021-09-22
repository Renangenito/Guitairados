const pegaNome = document.querySelector("#cadastro-nome")

const pegaEmail = document.querySelector("#cadastro-email")

const pegaTelefone = document.querySelector("#cadastro-telefone")

const pegaMensagem = document.querySelector("#mensagem-sucesso")

function enviar(){
 
  const coletaDados = {
      nome: pegaNome.value,
      email: pegaEmail.value,
      telefone: pegaTelefone.value
  }
    console.log(coletaDados)
    mostraMensagem();
    limpaFormulario();
}


function mostraMensagem(){
    pegaMensagem.textContent = "Parabéns, Cadastro realizado com sucesso!! \n \nVocê receberá um email de confirmação!"
}

function limpaFormulario(){
    pegaNome.value = "";
    pegaEmail.value = "";
    pegaTelefone.value = "";
}
