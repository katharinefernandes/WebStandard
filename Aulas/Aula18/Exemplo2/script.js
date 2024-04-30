let mudarTema = () => {
  var container = document.getElementById("container");
  // verificar se o modo escuro está ativado
  var isDarkMode = container.classList.contains("dark-mode");
  // Se estiver no modo escuro altera para o claro e vice-versa
  if (isDarkMode) {
    container.classList.remove("dark-mode");
  } else {
    container.classList.add("dark-mode");
  }
};
