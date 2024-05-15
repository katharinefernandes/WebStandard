var elemento = null;

let adicionarBorda = () => {
    elemento = document.getElementById("elemento");

    elemento.style.border = '2px solid black';
}

let removeBorda = () => {
    elemento.style.border = 'none';
}