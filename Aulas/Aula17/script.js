let abrirJanela = () => {
  let opcoes = "width= 600px, height=500px";
  window.open("http://www.google.com", "_blank", opcoes);
};

let mudaConteudo = () => {
  document.getElementById("exemplo").innerHTML = "Olá mundo!";
};

let voltarTexto = () => {
  document.getElementById("exemplo").innerHTML =
    "Aprendendo capturar elementos";
};

let mudaClasse = () => {
  let txt = document.getElementsByClassName("ex");
  for (let x = 0; x < txt.length; x++) {
    if (x == 0) {
      txt[0].innerHTML = "Olá";
    } else {
      txt[1].innerHTML = "Olá JavaScript";
    }
  }
};

let pegarNome = () => {
  let nome = document.getElementById("nome");
  let sobrenome = document.getElementById("sobrenome");
  //   form.addEventListener("click", pegarNome);

  document.getElementById(
    "resultado"
  ).innerHTML = `Seu nome é${nome} e seu sobrenome é ${sobrenome}`;
};
