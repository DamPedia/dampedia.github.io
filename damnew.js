AOS.init({
  duration: 800,
  once: false, // ini penting: false = animasi muncul setiap scroll
  mirror: true // ini penting: animasi juga muncul saat scroll ke atas
});

function openModal(title, desc, link) {
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-desc').innerText = desc;
  document.getElementById('popup-link').href = link;
  document.getElementById('popup').style.display = 'flex';
}

function closeModal() {
  document.getElementById('popup').style.display = 'none';
}

// Loading Spinner
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");

  // Tahan minimal 2 detik sebelum menghilang
  setTimeout(() => {
    loader.style.opacity = "0"; // animasi fade out
    setTimeout(() => {
      loader.style.display = "none"; // beneran hilang setelah fade
    }, 500); // 0.5 detik untuk animasi hilang
  }, 2000); // tahan minimal 2 detik tampil
});
