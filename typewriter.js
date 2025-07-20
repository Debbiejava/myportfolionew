document.addEventListener("DOMContentLoaded", () => {
  const text = "Oluwaseun Deborah Adebayo";
  const target = document.getElementById("typewriter-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      target.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 120);
    }
  }

    type();
    const swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

});