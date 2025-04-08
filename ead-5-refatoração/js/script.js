var usuariosArray = []; 

function adicionarusuario(){
    var nome = document.getElementById("nomeUsuario").value;
    var email = document.getElementById("emailUsuario").value;
    var msgErro = document.getElementById("mensagemErro");

    msgErro.style.display = "none";

    if (nome === "" || email === "") {
        msgErro.textContent = "Preencha todos os campos!";
        msgErro.style.display = "block";
        return;
    } else if (!email.includes("@") && !email.includes(".")) {
        msgErro.textContent = "Encontrada ausência de '@' ou '.' favor inserir um email válido!";
        msgErro.style.display = "block";
        return;
    } 
    
    var usuario = { nome: nome, email: email };
    usuariosArray.push(usuario);

    console.log(usuariosArray);

    var li = document.createElement("li");
    li.innerHTML = nome + " - " + email + " <button onclick='removeuser(\"" + email + "\")'>Remover</button>";
    document.getElementById("listausers").appendChild(li);

    document.getElementById("nomeUsuario").value = "";
    document.getElementById("emailUsuario").value = "";
      
}

function removeuser(email) {
    for (var i = 0; i < usuariosArray.length; i++) {
        if (usuariosArray[i].email === email) {
            usuariosArray.splice(i, 1);

            console.log("Hehehe, chablau, foi pro espeto!");
            break;
        }
    }

    document.getElementById("listausers").innerHTML = "";
    for (var i = 0; i < usuariosArray.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = usuariosArray[i].nome + " - " + usuariosArray[i].email + " <button onclick='removeuser(\"" + usuariosArray[i].email + "\")'>Remover</button>";
        document.getElementById("listausers").appendChild(li);
    }
}