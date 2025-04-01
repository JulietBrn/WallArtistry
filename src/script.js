document.addEventListener("DOMContentLoaded", function () {
  /* animation */
  const animItems = document.querySelectorAll(".section");
  const classAnimation = "fade-grayscale"; //set class animation
  if (animItems.length) {
    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classAnimation);
          observer.unobserve(entry.target);
        }
      });
    }
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
    animItems.forEach((animation) => {
      observer.observe(animation);
    });
  }
  /* FAQ */
  const faqItems = document.querySelectorAll(".faq-item");
  if (faqItems.length) {
    faqItems.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  }
  /* burger */
  const burger = document.querySelector(".burger");

  if (burger) {
    const navLinks = document.querySelectorAll(
      ".header__nav-menu .nav-menu__link, .logo-img"
    );
    const nav = document.querySelector(".header__nav-menu");
    const body = document.querySelector("body");

    burger.addEventListener("click", () => {
      toggleMenu();
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    function toggleMenu() {
      burger.classList.toggle("burger-rotate");
      nav.classList.toggle("nav-hidden");
      body.classList.toggle("hidden");
    }

    function closeMenu() {
      burger.classList.remove("burger-rotate");
      nav.classList.remove("nav-hidden");
      body.classList.remove("hidden");
    }
  }
});
