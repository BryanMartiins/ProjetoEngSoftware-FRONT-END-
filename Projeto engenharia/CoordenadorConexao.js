const formulario = document.querySelector("form");
const chave_Autorizacao = document.querySelector(".Chave_Autorizacao");
const nomeCompleto = document.querySelector("nomeCompleto");
const CPF = document.querySelector(".CPF");
const email = document.querySelector(".email");
const endereço = document.querySelector(".endereço");
const senha = document.querySelector(".Senha");

function cadastra(){

    console.log(chave_Autorizacao)
    

    fetch("http://localhost:8080/Coordenador",
         {
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "chave_Autorizacao": chave_Autorizacao.value,
                "nomeCompleto": nomeCompleto.value,
                "cpf": CPF.value,
                "email": email.value,
                "endereço" : endereço.value,
                "senha": senha.value,
            })
            
        
        })
        .then(function (res) {console.log(res) })
        .catch(function (res) {console.log(res) })
    };

    
function limpar(cadastrar) {    
    chave_Autorizacao.value = "";
    nomeCompleto.value = "";
    CPF.value = "";
    email.value = "";
    endereço.value="";
    senha.value = "";
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastra();
    limpar();
});
