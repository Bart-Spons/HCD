document.getElementById('myVideo').addEventListener('click', function () {
    // Pas direct de animatie toe zonder de setTimeout vertraging
    // var animatedDiv = document.getElementById('myVideo');
    // animatedDiv.style.animation = 'rotate 10s 8s forwards';
});

document.addEventListener('DOMContentLoaded', function () {
    const descriptionBox = document.getElementById('descriptionBox');
    const descriptions = [
        { start: 0, end: 5, text: "📺 Geruis van de tv" },
        { start: 6, end: 10, text: "Het geruis wordt" },
        { start: 14.5, end: 18, text: "📺 De tv gaat vanzelf aan" },
        { start: 23, end: 25, text: "Telefoon gaat af" },
        { start: 28, end: 30, text: "Pick up the phone Noah" },
        { start: 30, end: 32, text: "Come on... pick up" },
        { start: 35, end: 75, text: "☎️ Telefoon blijft afgaan" },


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

    document.body.style.backgroundColor = "lightblack";



});



// document.getElementById('myVideo').style.animation = "rotate 1s 15s linear";

// document.addEventListener('DOMContentLoaded', function () {
//     const tiks = document.querySelectorAll('.tik');

//     function showRandomTik() {
//         const idx = Math.floor(Math.random() * tiks.length); // Kies een willekeurig 'tik' element
//         const tik = tiks[idx];

//         // Maak het gekozen 'tik' element zichtbaar
//         tik.style.opacity = 1;

//         // Maak het element na korte tijd weer onzichtbaar
//         setTimeout(() => {
//             tik.style.opacity = 0;
//         }, 500); // Houd de tekst zichtbaar voor 500ms
//     }

//     // Toon een willekeurige 'tik' elke seconde
//     setInterval(showRandomTik, 1000);
// });

document.getElementById('myVideo').addEventListener('click', function () {
    setTimeout(function () {
        document.body.style.backgroundColor = "white";
        document.getElementById('myVideo').style.animation = "rotate 0.5s linear";

    }, 15000); // 15

    setTimeout(function () {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById('myVideo').style.animation = "none";
    }, 15250);

    setTimeout(function () {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        // document.getElementById('"descriptionBox"').style.color = "black";
    }, 15500);

    setTimeout(function () {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById('myVideo').style.animation = "none";
    }, 16000);

    setTimeout(function () {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        // document.getElementById('descriptionBox').style.color = "black";
    }, 25000); // 25

    // After 9 seconds (4s for white + 5s for black), change it back to white
    setTimeout(function () {
        document.body.style.backgroundColor = "grey";
        document.getElementById('myVideo').style.animation = "none";
    }, 34000);

    setTimeout(function () {
        document.body.style.backgroundColor = "white";
        // document.getElementById('descriptionBox').style.color = "black";
        document.body.style.color = "black";
    }, 75000);

    setTimeout(function () {
        document.body.style.transition = "background-color 2s";
        document.body.style.backgroundColor = "grey";
        // document.getElementById('myVideo').style.animation = "draai 1s linear";

    }, 86000);

    setTimeout(function () {
        document.getElementById('myVideo').style.animation = "rotate 1s linear";
    }, 90000);

    setTimeout(function () {

        document.body.style.transition = "background-color 2s";
        document.body.style.backgroundColor = "black";
        document.getElementById('myVideo').style.animation = "none";
        // document.getElementById('myVideo').style.animation = "rotate 1s";
        // document.getElementById('myVideo').style.animation = "rotate 0.5s linear";
    }, 92000);

    setTimeout(function () {
        document.body.style.scale = "1.2";
    }, 95000);



    // 115 seconden

});


// if the descriptionBox has a backgroundcolor white, the color becomes black
// if the descriptionBox has a backgroundcolor black or grey, the color becomes white

// document.addEventListener('DOMContentLoaded', function () {
//     const descriptionBox = document.getElementById('descriptionBox');
//     const descriptionBoxColor = window.getComputedStyle(descriptionBox).backgroundColor;

//     if (descriptionBoxColor === 'rgb(255, 255, 255)') {
//         descriptionBox.style.color = 'black';
//     } else if (descriptionBoxColor === 'rgb(0, 0, 0)' || descriptionBoxColor === 'rgb(128, 128, 128)') {
//         descriptionBox.style.color = 'white';
//     }
// });

