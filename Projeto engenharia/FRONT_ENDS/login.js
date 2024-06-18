radios = document.querySelectorAll('input[name="radio"]');
const usuarioLabel = document.querySelector('label[for="usuario"]');
const botao = document.getElementById("submitButton");

const pass = document.getElementById('senha');
const user = document.getElementById('usuario');

let results;

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
          results.forEach(element => {
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
