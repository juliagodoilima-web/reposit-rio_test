// Seleção dos elementos do DOM
const themeBtn = document.getElementById('themeToggle');
const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');

// 1. Alternar Tema Claro / Escuro
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// 2. Controle do Player de Áudio (Play / Pause)
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸';
    } else {
        audio.pause();
        playBtn.textContent = '▶';
    }
});