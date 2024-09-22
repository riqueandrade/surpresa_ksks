document.addEventListener('DOMContentLoaded', function() {
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
    ];

    showMessageBtn.addEventListener('click', function() {
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
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        startDelay: 1000,
        loop: true
    });

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
});