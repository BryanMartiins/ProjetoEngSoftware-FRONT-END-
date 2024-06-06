const formulario = document.querySelector("form");
const nomeEvento = document.querySelector(".nomeEvento");
const data = document.querySelector(".data");
const hora = document.querySelector(".hora");
const local = document.querySelector(".local");
const responsavel = document.querySelector(".responsavel");
const descricao = document.querySelector(".descricao");

function cadastra(){

    console.log(nomeEvento.value,data.value,hora.value,local.value,responsavel.value,descricao.value
        
    )

    fetch("http://localhost:8080/Eventos",
         {
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "nomeEvento": nomeEvento.value,
                "data": data.value,
                "hora": hora.value,
                "local": local.value,
                "responsavel" : responsavel.value,
                "descriçao": descricao.value,
            })
            
        
        })
        .then(function (res) {console.log(res) })
        .catch(function (res) {console.log(res) })
    };

    
function limpar(cadastrar) {    
    nomeEvento.value = "";
    data.value = "";
    hora.value = "";
    local.value = "";
    responsavel.value="";
    descricao.value = "";
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastra();
    limpar();
});
