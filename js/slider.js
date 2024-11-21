document.getElementById("slider").innerHTML = `
<section class="slider">
    <input type="radio" name="slider" id="slide1" checked>
    <input type="radio" name="slider" id="slide2">

    <div class="slides">
        <div class="slide" style="background-image: url('./imgs/ofertasnew.png')">
            <button class="vermas-off">
                <a href="" class="off-a">¡COMPRA AHORA!</a>
            </button>
        </div>
        <div class="slide" style="background-image: url('./imgs/newbanner.png')">
            <div class="name">
                <div class="new">
                    <h3 class="h3-off">¡Descubre los nuevos ingresos!</h3>
                    <h2 class="off">En tu primera compra te llevas un 20% de descuento</h2>
                    <button class="vermas-new">
                        <a href="" class="off-anew">¡COMPRA AHORA!</a>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="navigation">
        <label for="slide1" class="nav-btn"></label>
        <label for="slide2" class="nav-btn"></label>
    </div>

    <!-- Botones para navegación manual -->
    <button class="prev-slide" aria-label="Anterior">◀</button>
    <button class="next-slide" aria-label="Siguiente">▶</button>
</section>
`;

let currentSlide = 1; 
const totalSlides = 2; 

function prevSlide() {
    currentSlide--;
    if (currentSlide < 1) {
        currentSlide = totalSlides;
    }
    document.getElementById(`slide${currentSlide}`).checked = true;
}

function nextSlide() {
    currentSlide++;
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }
    document.getElementById(`slide${currentSlide}`).checked = true; 
}

document.querySelector(".prev-slide").addEventListener("click", prevSlide);
document.querySelector(".next-slide").addEventListener("click", nextSlide);
