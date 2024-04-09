document.getElementById('myVideo').addEventListener('click', function () {
    // Pas direct de animatie toe zonder de setTimeout vertraging
    var animatedDiv = document.getElementById('myVideo');
    animatedDiv.style.animation = 'rotate 10s 8s forwards';
});

document.addEventListener('DOMContentLoaded', function () {
    const descriptionBox = document.getElementById('descriptionBox');
    const descriptions = [
        { start: 0, end: 5, text: "Vrolijke muziek begint." },
        { start: 6, end: 16, text: "De hamster begint te rennen in zijn rad." }
        // Voeg hier meer beschrijvingen toe
    ];

    const videoPlayer = document.getElementById('myVideo');
    videoPlayer.addEventListener('timeupdate', function () {
        const currentTime = videoPlayer.currentTime;
        const currentDescription = descriptions.find(d => currentTime >= d.start && currentTime <= d.end);
        if (currentDescription) {
            descriptionBox.innerText = currentDescription.text;
        } else {
            descriptionBox.innerText = "";
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const videoPlayer = document.getElementById('myVideo');
    const speedometer = document.getElementById('speedometer');
    let timer = null;

    videoPlayer.addEventListener('click', function () {
        // Zorg ervoor dat de snelheidsmeter reset en alleen start als deze nog niet loopt
        if (timer === null) {
            let speed = 0;
            speedometer.innerText = speed;

            // Versnellen tot 50 binnen 10 seconden
            timer = setInterval(function () {
                if (speed < 50) {
                    speed++;
                    speedometer.innerText = speed;
                } else {
                    clearInterval(timer); // Stop de initiële interval
                    timer = setInterval(function () {
                        // Variëren tussen 50 en 70
                        speed = Math.floor(Math.random() * (70 - 50 + 1)) + 50;
                        speedometer.innerText = speed;
                    }, 1000); // Update elke seconde binnen de variatieperiode
                }
            }, 1000 * 10 / 50); // Duurt 10 seconden om 50 te bereiken, dus update elke 200ms

            // Stop de variatie na 60 seconden vanaf het starten
            setTimeout(() => {
                clearInterval(timer);
                timer = null; // Reset timer zodat de snelheidsmeter opnieuw kan worden gestart
            }, 60000 + 10000); // 60 seconden plus de initiële 10 seconden
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tiks = document.querySelectorAll('.tik');

    function showRandomTik() {
        const idx = Math.floor(Math.random() * tiks.length); // Kies een willekeurig 'tik' element
        const tik = tiks[idx];

        // Maak het gekozen 'tik' element zichtbaar
        tik.style.opacity = 1;

        // Maak het element na korte tijd weer onzichtbaar
        setTimeout(() => {
            tik.style.opacity = 0;
        }, 500); // Houd de tekst zichtbaar voor 500ms
    }

    // Toon een willekeurige 'tik' elke seconde
    setInterval(showRandomTik, 1000);
});

