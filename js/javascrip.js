// Mensaje de bienvenida en consola
console.log("Bienvenido al portafolio de Jose Lema");

// Cambiar color del título al cargar la página (ejemplo de manipulación DOM)
window.addEventListener('load', () => {
  const h1 = document.querySelector('header h1');
  if (h1) {
    h1.style.transition = "color 0.4s ease";
    h1.style.color = "#2c6fdb";
  }
});
