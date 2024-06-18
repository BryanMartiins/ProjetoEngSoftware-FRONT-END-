const formulario = document.querySelector("form");
const RA = document.querySelector(".RA");
const Nome_Completo = document.querySelector(".nome_Completo");
const CPF = document.querySelector(".CPF");
const email = document.querySelector(".email");
const Senha = document.querySelector(".Senha");


function cadastra(){


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
                "senha": Senha.value,
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
    Senha.value = "";
    window.location(window.location.href = 'login.html')
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastra();
    limpar();
});
