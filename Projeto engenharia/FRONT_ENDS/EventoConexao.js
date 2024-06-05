const formulario = document.querySelector("form");
const nomeEvento = document.querySelector(".nomeEvento");
const data = document.querySelector(".data");
const hora = document.querySelector(".hora");
const local = document.querySelector(".local");
const responsavel = document.querySelector(".responsavel");
const descricao = document.querySelector(".descricao");

function cadastra(){

    

    fetch("http://localhost:8080/Eventos",
         {
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "nomeEvento": chave_Autorizacao.value,
                "data": nomeCompleto.value,
                "hora": CPF.value,
                "local": email.value,
                "responsavel" : endereço.value,
                "descricao": senha.value,
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
