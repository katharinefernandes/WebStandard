let trocar = () => {
    let texto = document.getElementById("para1");
    if (texto !== null) {
        document.getElementById("para2").innerHTML = "O texto do 1° parágrafo é: " + texto.innerHTML;
    } else {
        console.error("O elemento id não foi encontrado");
    }
}

let apagar = () => {
    document.getElementById("para2").innerHTML = "";
}