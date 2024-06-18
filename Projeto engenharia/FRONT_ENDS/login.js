radios = document.querySelectorAll('input[name="radio"]');
const usuarioLabel = document.querySelector('label[for="usuario"]');
const botao = document.getElementById("submitButton");

const pass = document.getElementById('senha');
const user = document.getElementById('usuario');
let results;
let type;

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.checked) {
      usuarioLabel.textContent = radio.dataset.usuario;
      console.log(usuarioLabel.textContent);
      getAllType(usuarioLabel.textContent);
    }
  });
});

function getAllType(valor) {
  console.log(valor)
  type = valor
  fetch(`http://localhost:8080/${valor}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "GET"
  })
  .then(function (res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Erro ao realizar a requisição.');
    }
  })
  .then(function (data) {
    console.log(data);
    results = data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

function verificaLogin(){
    botao.addEventListener("click", (event) => {
        
        event.preventDefault()

        if (user.value && pass.value) { // Check for empty values (optional)
          console.log()
          results.forEach(element => {
            
            console.log(element.senha)
            console.log(element.email)
            if (element.email === user.value && element.senha === pass.value) {
              

              if(type == "Aluno"){
                window.location.href = 'tela-aluno.html';
              }
              if(type == "Coordenador"){
                window.location.href = 'tela-coordenador.html';
              }
              if(type == "Administrador"){
                window.location.href = 'tela-adm.html';
              }
              if(type == "Professor"){
                window.location.href = 'tela-professor.html';
              }
              
              
            }
              
                
            if (element.email === user.value && element.senha === pass.value) {
              window.location.href = 'tela-aluno.html';
            }
          });
        } 
        else if(user.value && pass.value){
            results.forEach(element => {
              if (element.registro === user.value && element.senha === pass.value) {
                window.location.href = 'tela-adm.html';
              }
            });
          } else{
          // Handle empty username/password (optional)
        }
      });
}

verificaLogin()
