function make_table(data) {
    let data_table = document.getElementById('tabela-eventos');
    data_table.innerHTML = '';
    let html = "";
    data.forEach(obj => {   
        html += `
            <div class="quadrado">
                <img src="imagem3.jpg" width="200" height="150">
                <div class="informacoes">
                    <h3>${obj.nomeEvento}</h3>
                    <p>Data: ${obj.data}</p>
                    <p>Local: ${obj.local}</p>
                    <p>Descrição: ${obj.descriçao}</p>
                    <p>Vagas Disponíveis: ${obj.vagas}</p>
                    <p>Responsável: ${obj.responsavel}</p>
                    <button onclick="inscrever()">Inscrever-se</button>
                    <span id="check" style="display: none;">✔</span>
                </div>
            </div>`;
    });

    data_table.innerHTML = html;
}


// Função para fazer a requisição à API e chamar make_table() após a conclusão
function fetchEventData() {
    fetch('http://localhost:8080/Eventos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            make_table(data); // Chamando a função make_table() com os dados recebidos da API
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Chamar a função fetchEventData() para iniciar a requisição
fetchEventData();
