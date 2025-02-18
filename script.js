// Confetti Animation
const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();
  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);

// Card Text Change with Caption Font Style
function ubah_kartu() {
  const kartu = document.getElementById('kartu');
  kartu.innerHTML = `
    <h1 class="semi-bold text-wrap animate__animated animate__zoomIn" style="font-family: 'Pacifico', cursive; font-size: 1.5rem; color: #ff69b4;">
      Selamat Ulang Tahun🎂,
      <span style="font-family: 'Lobster', cursive; font-size: 2rem; color: #ff4500;">Kak Tristan Hana</span>! 
      Semoga yang disemogakan cepat-cepat tersemogakan. 
      Mohon kerja samanya untuk besok ya kak! hehe
    </h1>`;
}
