const formulario = document.querySelector("form");
const inscricao = document.querySelector(".inscricao");
const nomeCompleto = document.querySelector(".nomeCompleto");
const CPF = document.querySelector(".cpf");
const email = document.querySelector(".email");
const endereço = document.querySelector(".endereço");
const senha = document.querySelector(".senha");

function cadastra(){

    

    fetch("http://localhost:8080/Professor",
         {
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "inscricao": chave_Autorizacao.value,
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
