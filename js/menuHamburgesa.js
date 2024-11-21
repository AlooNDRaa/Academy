document.getElementById("menuPhone").innerHTML = `
  <button id="boton-hamburguesa">
    <span>&#9776;</span> 
  </button>
  <nav id="menu-hamburguesa">
    <ul>
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#acerca">Acerca de</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
`;

// Asegúrate de que el menú esté oculto inicialmente
const botonHamburguesa = document.getElementById('boton-hamburguesa');
const menuHamburguesa = document.getElementById('menu-hamburguesa');

// Al hacer clic en el botón, agregamos o quitamos la clase 'activo' para mostrar/ocultar el menú
botonHamburguesa.addEventListener("click", function() {
    menuHamburguesa.classList.toggle("activo");
});
