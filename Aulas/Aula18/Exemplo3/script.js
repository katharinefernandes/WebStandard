document.addEventListener("DOMContentLoaded", function () {
  var splashScreen = document.getElementById("splashScren");
  // Define o tempo de 3 segundos
  var splashScreenDuration = 3000;

  // Esconde a página index
  setTimeout(function () {
    splashScreen.style.display = "none";
    // redireciona para a página principal
    window.location.href = "principal.html";
  }, splashScreenDuration);
});
