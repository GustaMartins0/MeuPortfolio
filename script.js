// Exemplo: botão para mudar tema
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.textContent = "Alternar Tema";
  btn.style.position = "fixed";
  btn.style.bottom = "10px";
  btn.style.right = "10px";
  
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  document.body.appendChild(btn);
});
