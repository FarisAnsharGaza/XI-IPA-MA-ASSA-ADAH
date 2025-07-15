const slogans = [
  "Berita terkini, langsung ke layar Anda.",
  "Fakta dan informasi tanpa basa-basi.",
  "Dunia berubah, kami laporkan untukmu.",
  "Tetap terhubung dengan kabar terbaru.",
  "Bukan sekadar kabar, ini kenyataan.",
  "Informasi akurat, setiap waktu.",
  "Update cepat, tanpa drama.",
  "Kabar hari ini, dampak untuk besok.",
  "Buka mata, dengar dunia.",
  "Semua berita penting, dalam genggamanmu.",
];

let index = 0;
const sloganElement = document.getElementById("slogansi");

function typeSlogan(text, i = 0) {
  if (i === 0) sloganElement.textContent = "";
  if (i < text.length) {
    sloganElement.textContent += text.charAt(i);
    setTimeout(() => typeSlogan(text, i + 1), 50);
  } else {
    setTimeout(() => {
      index = (index + 1) % slogans.length;
      typeSlogan(slogans[index]);
    }, 2500);
  }
}

typeSlogan(slogans[index]);
