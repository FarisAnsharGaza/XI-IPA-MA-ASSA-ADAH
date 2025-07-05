const slogans = [
  "Where curiosity meets discovery.",
  "Think like a proton – always positive.",
  "Science: The poetry of reality.",
  "Fuel your mind. Question everything.",
  "Science is not a subject, it's a way of thinking.",
  "Exploring the unknown, one experiment at a time.",
  "Invent the future — with science.",
  "From atoms to galaxies, we connect the dots.",
  "Science: Powered by questions, proven by evidence.",
  "Because every great idea starts with a 'what if…?'"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const sloganElement = document.getElementById("slogan");

function typeWriter() {
  const currentSlogan = slogans[index];
  if (isDeleting) {
    sloganElement.textContent = currentSlogan.substring(0, charIndex--);
  } else {
    sloganElement.textContent = currentSlogan.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentSlogan.length + 1) {
    isDeleting = true;
    setTimeout(typeWriter, 2000); // jeda setelah selesai ngetik
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % slogans.length;
    setTimeout(typeWriter, 500); // jeda sebelum mulai slogan berikutnya
  } else {
    setTimeout(typeWriter, isDeleting ? 30 : 60); // kecepatan ketik & hapus
  }
}

typeWriter();
