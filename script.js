const slogans = [
    "Where curiosity meets discovery.",
    "Think like a proton — always positive.",
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
  const sloganElement = document.getElementById("slogan");

  function updateSlogan() {
    sloganElement.style.opacity = 0; // fade out
    setTimeout(() => {
      sloganElement.textContent = slogans[index];
      sloganElement.style.opacity = 1; // fade in
      index = (index + 1) % slogans.length;
    }, 500); // delay before changing text
  }

  // Mulai dan ubah tiap 3 detik
  updateSlogan();
  setInterval(updateSlogan, 3000);
