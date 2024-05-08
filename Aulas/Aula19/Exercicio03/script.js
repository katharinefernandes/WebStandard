// oculta ao carregar a página
window.onload = function () {
  document.getElementById("esconder").style.display = "none";
};

// Caso o primeiro seja utilizado não deve ser implementado a segunda função
document.addEventListener("DOMContentLoaded", function () {
  var tempo = 3000;
  setTimeout(function () {
    document.getElementById("esconder").style.display = "none";
  }, tempo);
});
