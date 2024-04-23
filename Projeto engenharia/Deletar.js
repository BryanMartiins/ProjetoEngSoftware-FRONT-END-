function Deletar() {
    const deleteItem = document.getElementById("deletar1").value;
    console.log(deleteItem);
    fetch(`http://localhost:8080/Aluno/Deletar/${deleteItem}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({})
    })
    .then((res) => res.json())
    .then((data) => {
        document.querySelector("#deletar1").innerHTML = data.deleteItem
        
    })
 
}
Deletar();