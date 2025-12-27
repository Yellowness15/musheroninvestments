document.addEventListener("DOMContentLoaded", () => {
  /*REVEAL ON SCROLL */
  const revealElements = document.querySelectorAll(
    ".text, .vision, .products, .card, .impact .item, .gallery, .footer"
  );

  revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease";
  });

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* GALLERY CLICK ZOOM */
  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      img.classList.toggle("zoomed");
    });
  });
});
