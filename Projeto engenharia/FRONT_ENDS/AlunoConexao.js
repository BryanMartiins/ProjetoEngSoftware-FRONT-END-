const formulario = document.querySelector("form");
const RA = document.querySelector(".RA");
const Nome_Completo = document.querySelector(".nome_Completo");
const CPF = document.querySelector(".CPF");
const email = document.querySelector(".email");
const Alun_senha = document.querySelector(".Alun_senha");


function cadastra(){

    
    console.log(Nome_Completo.value,RA.value,CPF.value,email.value,Alun_senha.value)

    fetch("http://localhost:8080/Aluno",
         {
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "ra": RA.value,
                "nomeCompleto": Nome_Completo.value,
                "cpf": CPF.value,
                "email": email.value,
                "alun_senha": Alun_senha.value,
            })
            
        
        })
        .then(function (res) {console.log(res) })
        .catch(function (res) {console.log(res) })
    };

    
function limpar(cadastrar) {    
    RA.value = "";
    Nome_Completo.value = "";
    CPF.value = "";
    email.value = "";
    Alun_senha.value = "";
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastra();
    limpar();
});
