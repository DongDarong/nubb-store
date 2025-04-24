
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const loveVideo = document.getElementById('loveVideo');
const container = document.querySelector('.container');

yesBtn.addEventListener('click', () => {
  message.style.display = 'block';
  loveVideo.style.display = 'block';
  loveVideo.play();
  
  // Create falling hearts
  createFallingElements('❤️', 15, 2.5);
  
  // Create confetti
  createConfetti(30);
  
  // Add pulsing animation to container
  container.style.animation = 'pulse 1.5s infinite';
});

noBtn.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;
  
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
  
  // Create a small heart when trying to click No
  createFallingElements('💔', 1, 1);
});

noBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createFallingElements('😢', 3, 1);
});

function createFallingElements(emoji, count, duration) {
  for (let i = 0; i < count; i++) {
    const element = document.createElement('span');
    element.textContent = emoji;
    element.classList.add('falling-emoji');
    element.style.left = `${Math.random() * 100}vw`;
    element.style.animationDuration = `${duration + Math.random() * 2}s`;
    document.body.appendChild(element);
    
    setTimeout(() => {
      element.remove();
    }, (duration + 2) * 1000);
  }
}

function createConfetti(count) {
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.width = `${5 + Math.random() * 10}px`;
    confetti.style.height = `${5 + Math.random() * 10}px`;
    confetti.style.animationDuration = `${3 + Math.random() * 4}s`;
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 7000);
  }
}

function getRandomColor() {
  const colors = ['#ff6f61', '#ff85a2', '#ffb347', '#ffcc5c', '#88d8b0', '#96ceb4'];
  return colors[Math.floor(Math.random() * colors.length)];
}
