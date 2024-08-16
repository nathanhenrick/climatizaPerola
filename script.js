//* HEADER SCROLL
const header = document.getElementById("header");

function checkScroll() {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", checkScroll);

//* TOPBUTTON
const toTopButton = document.querySelector(".Btn");

toTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    toTopButton.style.display = "flex";
  } else {
    toTopButton.style.display = "none";
  }
});