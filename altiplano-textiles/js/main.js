window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
  btnTop.style.display = window.scrollY > 250 ? "block" : "none";
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = form.querySelector("input[placeholder='Nombre']").value.trim();
  const email = form.querySelector("input[placeholder='Email']").value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const modal = new bootstrap.Modal(document.getElementById('thankYouModal'));
  modal.show();
  form.reset();
});
