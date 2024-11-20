document.getElementById("header").innerHTML = `
  <header class="head">
    <h2 class="title">Mystique<span class="span-title">Shop</span></h2>
    <input type="search" placeholder="Busca productos, marcas y más" id="Buscador" />
    <nav class="navbar-home">
        <ul class="ul-nav">
            <li><a href="./index.html">Inicio</a></li>
            <li><a href="./html/helpcenter.html">Soporte</a></li>
            <li class="nav-item dropdown">
                <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Artículos
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="./html/Cards.html">Moda</a></li>
                    <li><a class="dropdown-item" href="#">Joyas</a></li>
                    <li><a class="dropdown-item" href="#">Accesorios y bolsos</a></li>
                    <li><a class="dropdown-item" href="#">Belleza</a></li>
                </ul>
            </li>
            <li>
                <a href="./html/shoopCart.html">
                    <span class="material-symbols-outlined">shopping_cart</span>
                </a>
            </li>
            <li>
                <button class="login-button">
                    <a class="a-login" href="./html/login.html">Login</a>
                </button>
            </li>
        </ul>
    </nav>
</header>

`


document.getElementById("footer").innerHTML = `
<footer class="footer">
    <div class="footer-content-wrapper">
      <div class="logo"><img src="./imgs/blackandwhite/1.png" alt="Logo"></div>
      <div class="footer-content">
        <div class="footer-social">
          <p>Social Media</p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-links">
      <a href="./html/aboutUs.html">SOBRE NOSOTROS</a>
      <a href="./html/contact.html">CONTACTANOS</a>
      <a href="./html/helpcenter.html">AYUDA</a>
      <a href="./html/helpcenter.html">POLITICAS DE PRIVACIDAD</a>
    </div>
    <div class="footer-copyright">
      <p>Copyright © 2024 NTTDATA ACADEMY Alondra</p>
    </div>
  </footer>
  `

