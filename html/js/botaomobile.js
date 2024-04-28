// Selecionando o primeiro botão mobile
const btnMobile = document.querySelector(".btn-mobile");

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

// Adicionando evento de clique ao botão mobile
btnMobile.addEventListener("click", toggleMenu);
