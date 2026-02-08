const sliderTrack = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
let interval;
const slideCount = slides.length;

/* ===========================
   CLONAR PRIMER SLIDE
=========================== */
const firstClone = slides[0].cloneNode(true);
sliderTrack.appendChild(firstClone);

/* ===========================
   FUNCIONES
=========================== */
function updateSlider(animate = true) {
  sliderTrack.style.transition = animate ? 'transform 0.6s ease-in-out' : 'none';
  sliderTrack.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index++;
  updateSlider(true);

  if (index === slideCount) {
    // cuando llega al clon
    setTimeout(() => {
      index = 0;
      updateSlider(false); // vuelve sin animación
    }, 600); // igual al transition
  }
}

function prevSlide() {
  if (index === 0) {
    index = slideCount;
    updateSlider(false);
  }

  setTimeout(() => {
    index--;
    updateSlider(true);
  }, 20);
}

/* ===========================
   BOTONES
=========================== */
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

/* ===========================
   AUTO SLIDE CONTINUO
=========================== */
function startAutoSlide() {
  interval = setInterval(nextSlide, 6000);
}

function resetAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

document.addEventListener('DOMContentLoaded', () => {

  /* ===============================
     BOTÓN WHATSAPP FLOTANTE
  ================================ */
  const floatBtn = document.querySelector('.whatsapp-float');

  if (floatBtn) {
    const phoneNumber = '573107651542';
    const message =
      'Hola, estoy interesado en sus servicios de mantenimiento.';

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    floatBtn.addEventListener('click', e => {
      e.preventDefault();
      window.open(url, '_blank', 'noopener');
    });
  }

  // /* ===============================
  //    BOTONES WHATSAPP DE PRODUCTO
  //    (NO se toca el href)
  // ================================ */
  // const productBtns = document.querySelectorAll('.btn-whatsapp');

  // productBtns.forEach(btn => {
  //   // Solo por si luego quieres tracking o animación
  //   btn.addEventListener('click', () => {
  //     // 🔹 aquí NO hay preventDefault
  //     // 🔹 el href hace su trabajo
  //     console.log('Click en WhatsApp producto');
  //   });
  // });

  

});



startAutoSlide();
