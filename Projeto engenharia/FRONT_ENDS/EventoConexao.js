const formulario = document.querySelector("form");
const nomeEvento = document.querySelector(".nomeEvento");
const data = document.querySelector(".data");
const hora = document.querySelector(".hora");
const local = document.querySelector(".local");
const vagas = document.querySelector(".vagas")
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
                "nomeEvento": nomeEvento.value, 
                "local": local.value,
                "responsavel" : responsavel.value,
                "descriçao": descricao.value,
                "hora": hora.value,
                "vagas": vagas.value,
                "data": data.value
            })
            
        
        })
        .then((response) => {
            if (response.ok) {
                window.location.href = 'tela-aluno.html';
            } else {
                throw new Error('Erro ao obter os eventos'); // Lança um erro para cair no bloco catch
            }
        })
    };

    
function limpar(cadastrar) {    
    nomeEvento.value = "";
    local.value = "";
    responsavel.value="";
    descricao.value = "";
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastra();
    limpar();
});
