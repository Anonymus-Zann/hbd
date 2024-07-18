document.getElementById('btnReveal').addEventListener('click', function () {
    document.getElementById('surprise').classList.toggle('hidden');
    document.getElementById('btnReveal').classList.toggle('hidden');
    addConfetti();
    addBalloons();
    const audio = document.getElementById("myAudio");
    audio.volume = 0.1;
    audio.play();
});

function addConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = getRandomColor();
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

function addBalloons() {
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.animationDuration = `${Math.random() * 2 + 3}s`;
        document.body.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 6000);
    }
}

function getRandomColor() {
    const colors = ['#ff6347', '#ffecb3', '#81d4fa', '#e1bee7', '#dcedc8', '#ffcccb', '#ffa07a'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Slideshow functionality with buttons and fade effect
let slideIndex = 0;
const slides = document.querySelectorAll('#slideshow .slide');
showSlide(slideIndex);

document.getElementById('nextBtn').addEventListener('click', function () {
    showSlide(slideIndex += 1);
    addConfetti();
    addBalloons();
});

function showSlide(n) {
    if (n >= slides.length) {
        document.getElementById('surprise2').classList.toggle('hidden2');
        document.getElementById('surprise').classList.toggle('hidden');
        slideIndex = 0;
    } else if (n < 0) { slideIndex = slides.length - 1; }
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
    });
    slides[slideIndex].classList.add('active');
}