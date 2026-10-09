// ===============================
// MENU MOBILE
// ===============================
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===============================
// ANNÉE AUTOMATIQUE DU FOOTER
// ===============================
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// ===============================
// APPARITION DES ÉLÉMENTS AU SCROLL
// ===============================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".skill-card, .project-card, .timeline-item, .education-item").forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(18px)";
  element.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(element);
});
