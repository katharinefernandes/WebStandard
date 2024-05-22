let verificaSenha = () => {

    var elementSenha1 = document.getElementById("senha1");
    var elementSenha2 = document.getElementById("senha2");

    
    let senha1 = elementSenha1.value;
    let senha2 = elementSenha2.value;

    if (senha1 && senha2) {
        // limpa classes
        if(elementSenha1.classList.contains("senha-invalida")) {
            elementSenha1.classList.remove("senha-invalida");
        }
        if(elementSenha2.classList.contains("senha-invalida")) {
            elementSenha2.classList.remove("senha-invalida");
        }
    
        if(elementSenha1.classList.contains("senha-valida")) {
            elementSenha1.classList.remove("senha-valida");
        }
        if(elementSenha2.classList.contains("senha-valida")) {
            elementSenha2.classList.remove("senha-valida");
        }
    
        if (senha1 == senha2) {
            elementSenha1.classList.add("senha-valida");
            elementSenha2.classList.add("senha-valida");
        } else {
            elementSenha1.classList.add("senha-invalida");
            elementSenha2.classList.add("senha-invalida");
        }

    }


}