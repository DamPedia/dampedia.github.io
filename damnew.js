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