document.addEventListener('DOMContentLoaded', function () {
    const showMessageBtn = document.getElementById('showMessage');
    const messageDiv = document.getElementById('message');
    const countdownTimer = document.getElementById('countdown-timer');

    // Função para atualizar o contador regressivo
    function updateCountdown() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const birthdayThisYear = new Date(currentYear, 9, 18); // Mês é baseado em zero, então 9 é outubro

        if (now > birthdayThisYear) {
            birthdayThisYear.setFullYear(currentYear + 1);
        }

        const timeLeft = birthdayThisYear - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownTimer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Atualizar o contador a cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Chamar imediatamente para evitar atraso inicial

    const messages = [
        "Você é o amor da minha vida!",
        "Seu sorriso ilumina meu mundo",
        "Você me faz querer ser uma pessoa melhor",
        "Cada dia ao seu lado é uma bênção",
        "Nosso amor é eterno e verdadeiro"
    ];

    showMessageBtn.addEventListener('click', function () {
        createHeartExplosion();
    });

    function createHeartExplosion() {
        const fireworksContainer = document.getElementById('fireworks');
        fireworksContainer.innerHTML = ''; // Clear previous hearts

        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.top = Math.random() * window.innerHeight + 'px';
                heart.style.transform = `scale(${Math.random() * 0.5 + 0.5}) rotate(${Math.random() * 360}deg)`;
                fireworksContainer.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 1500);
            }, i * 50);
        }
    }

    // Remova ou comente as funções createFireworks() e getRandomColor() que não serão mais usadas

    // Função para criar pétalas de rosa
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * window.innerWidth + 'px';
        petal.style.animationDuration = Math.random() * 3 + 2 + 's'; // Entre 2 e 5 segundos
        petal.style.opacity = Math.random() * 0.5 + 0.5; // Entre 0.5 e 1
        petal.style.width = petal.style.height = Math.random() * 15 + 15 + 'px'; // Entre 15 e 30 pixels
        petal.style.transform = `rotate(${Math.random() * 360}deg)`; // Rotação aleatória

        document.getElementById('petals').appendChild(petal);

        // Remover a pétala após a animação
        setTimeout(() => {
            petal.remove();
        }, parseFloat(petal.style.animationDuration) * 1000);
    }

    // Criar pétalas a cada 300ms
    setInterval(createPetal, 300);

    // Inicializar Typed.js
    var typed = new Typed('#typed', {
        strings: messages,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        shuffle: true,
        cursorChar: '❤️',
        autoInsertCss: true,
        onStringTyped: function(arrayPos, self) {
            const typedElement = document.getElementById('typed');
            typedElement.style.color = getRandomColor();
        }
    });

    function getRandomColor() {
        const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Adicione isso ao final do arquivo script.js
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Adicione esta função no final do arquivo script.js
    function handleParallax() {
        const petals = document.querySelectorAll('.petal');
        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            petals.forEach(petal => {
                const speed = parseFloat(petal.getAttribute('data-speed') || 1);
                const x = (window.innerWidth - mouseX * 10) * speed;
                const y = (window.innerHeight - mouseY * 10) * speed;
                petal.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`;
            });
        });
    }

    // Chame a função handleParallax() após criar as pétalas
    handleParallax();

    // Adicione este código no final do arquivo script.js
    const playMusicBtn = document.getElementById('playMusic');
    const backgroundMusic = document.getElementById('backgroundMusic');

    playMusicBtn.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            playMusicBtn.innerHTML = '<i class="fas fa-pause"></i> Pausar Música';
        } else {
            backgroundMusic.pause();
            playMusicBtn.innerHTML = '<i class="fas fa-music"></i> Tocar Música';
        }
    });

    const volumeControl = document.getElementById('volumeControl');

    volumeControl.addEventListener('input', function() {
        backgroundMusic.volume = this.value;
    });

    // Definir o volume inicial
    backgroundMusic.volume = 0.5;

    // Criar estrelas
    function createStars() {
        const starsContainer = document.createElement('div');
        starsContainer.classList.add('stars');
        document.body.appendChild(starsContainer);

        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            starsContainer.appendChild(star);
        }
    }

    // Playlist de músicas
    const playlist = [
        {
            title: "Eu Sei Que Vou Te Amar - Tom Jobim",
            src: "music/Tom Jobim   Eu Sei Que Vou Te Amar.mp3"
        },
        // Adicione mais músicas aqui
    ];

    let currentSongIndex = 0;

    function updateMusicControls() {
        const playMusicBtn = document.getElementById('playMusic');
        const songTitle = document.createElement('div');
        songTitle.id = 'songTitle';
        songTitle.style.fontSize = '0.8rem';
        songTitle.style.marginTop = '5px';
        songTitle.textContent = playlist[currentSongIndex].title;
        
        if (!document.getElementById('songTitle')) {
            playMusicBtn.parentNode.appendChild(songTitle);
        } else {
            document.getElementById('songTitle').textContent = playlist[currentSongIndex].title;
        }
    }

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        backgroundMusic.src = playlist[currentSongIndex].src;
        if (!backgroundMusic.paused) {
            backgroundMusic.play();
        }
        updateMusicControls();
    }

    function playPreviousSong() {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        backgroundMusic.src = playlist[currentSongIndex].src;
        if (!backgroundMusic.paused) {
            backgroundMusic.play();
        }
        updateMusicControls();
    }

    // Adicionar botões de controle de playlist
    const musicControls = document.getElementById('music-controls');
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('music-buttons');

    const prevButton = document.createElement('button');
    prevButton.innerHTML = '<i class="fas fa-step-backward"></i>';
    prevButton.addEventListener('click', playPreviousSong);

    const nextButton = document.createElement('button');
    nextButton.innerHTML = '<i class="fas fa-step-forward"></i>';
    nextButton.addEventListener('click', playNextSong);

    buttonsContainer.appendChild(prevButton);
    buttonsContainer.appendChild(playMusicBtn);
    buttonsContainer.appendChild(nextButton);

    musicControls.appendChild(buttonsContainer);

    // Inicializar novas funcionalidades
    document.addEventListener('DOMContentLoaded', function() {
        createStars();
        updateMusicControls();
        
        // Atualizar música quando terminar
        backgroundMusic.addEventListener('ended', playNextSong);
    });
});