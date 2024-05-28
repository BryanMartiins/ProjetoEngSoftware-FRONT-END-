const formulario = document.querySelector("form");
const registro = document.querySelector(".registro");
const nome = document.querySelector(".nome");
const cpf = document.querySelector(".cpf");
const email = document.querySelector(".email");
const endereco = document.querySelector(".endereco");
const senha = document.querySelector(".senha");


function cadastra(){
    fetch("http://localhost:8080/Administrador",
         {
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                num_Registro: registro.value,
                nome_Completo: nome.value,
                cpf: cpf.value,
                email: email.value,
                endereço: endereco.value,
                senha: senha.value,
            })
        
        })
        .then(function (res) {console.log(res) })
        .catch(function (res) {console.log(res) })
    };

    
function limpar(cadastrar) {    
    registro.value = "";
    nome.value = "";
    cpf.value = "";
    email.value = "";
    endereco.value = "";
    senha.value = "";
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastra();
    limpar();
});
