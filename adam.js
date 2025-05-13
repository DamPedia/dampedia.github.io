document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  // <- INI BAGIAN YANG KURANG (listener untuk klik tombolnya)
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Scroll to top button
  window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Tambahkan event listener ke tombol
  const scrollTopButton = document.getElementById("scrollTopBtn");
  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", scrollToTop);
  }
});
