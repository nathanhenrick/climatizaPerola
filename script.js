//header SCROLL
// Seleciona o header
const header = document.getElementById("header");

function checkScroll() {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// Adiciona um listener de scroll na janela
window.addEventListener("scroll", checkScroll);

//topButton
const backToTopBtn = document.querySelector(".Btn");

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});
