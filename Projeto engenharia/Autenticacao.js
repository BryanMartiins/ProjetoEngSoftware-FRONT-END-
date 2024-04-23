

function cadastrar() {
    const pega = document.getElementById("busca1").value;
    fetch(`http://localhost:8080/Aluno/Consulta/${pega}`,{
        method: 'GET',
        headers:{  
            "Content-Type":"application/json",
            'Accept':'application/json',
        },  
    })
    .then((res) => res.json())
    .then((data) =>{
        document.querySelector("#busca1").innerHTML = data.pega
        console.log(data)
        var tabela= document.getElementById("data-table")
        tabela.innerHTML = ""; 
        data.forEach(item => {
            tabela.innerHTML += `
                <tr id='${item.id}'>
                    <td>${item.nome_Completo}</td>
                    <td>${item.cpf}</td>
                    <td>${item.ra}</td>
                    <td>${item.email}</td>
                </tr>
            `
        });
    
    })
}
cadastrar();

