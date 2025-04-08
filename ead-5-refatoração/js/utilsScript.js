function enviaProBack() {
   console.log("Enviado para o back, o resto os dev fazem!");
}

const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    console.log("Nome: " + name);
    console.log("Email: " + email);

    alert("Formulário interceptado! Não quero enviar pro back.");
});