const pegaNome = document.querySelector("#cadastro-nome")
const pegaEmail = document.querySelector("#cadastro-email")
const pegaTelefone = document.querySelector("#cadastro-telefone")
const pegaMensagem = document.querySelector("#mensagem-sucesso")
const botao = document.querySelector("#botao-enviar")
const clintes = []

botao.addEventListener("click", (event)=>{
    
    if(pegaNome.lenght > 0 && pegaEmail.lenght > 0 && pegaTelefone.lenght > 0){
        const coletaDados = {
            nome: pegaNome.value,
            email: pegaEmail.value,
            telefone: pegaTelefone.value
            
        }
          console.log(coletaDados)
         
          limpaFormulario();
    }else{
        console.log("Erro, algum campo faltando preencher!")
    }
 
})


function limpaFormulario(){
    pegaNome.value = "";
    pegaEmail.value = "";
    pegaTelefone.value = "";
}
