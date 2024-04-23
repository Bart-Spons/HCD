document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('myVideo').addEventListener('click', function () {
        // First appearance
        setTimeout(function () {
            var textElement = document.getElementById("timed-text");
            textElement.style.display = 'block';
            textElement.style.opacity = 1;

            // Hide after 4 seconds
            setTimeout(function () {
                textElement.style.opacity = 0;
                setTimeout(function () {
                    textElement.style.display = 'none';
                }, 1000);
            }, 2000); // This needs to be adjusted to the previous hide time
        }, 1000); // Delay before showing text

        // Second appearance at 15 seconds
        setTimeout(function () {
            var textElement = document.getElementById("timed-text2");
            textElement.style.display = 'block';
            textElement.style.opacity = 1;

            // Hide again after 7 seconds (22nd second)
            setTimeout(function () {
                textElement.style.opacity = 0;
                setTimeout(function () {
                    textElement.style.display = 'none';
                }, 1000);
            }, 1000); // Display for 7 seconds
        }, 15000); // Delay before showing text again

        // Third appearance at 21 seconds
        setTimeout(function () {
            var textElement = document.getElementById("timed-text");
            textElement.style.display = 'block';
            textElement.style.opacity = 1;

            // Hide again after 7 seconds (32nd second)
            setTimeout(function () {
                textElement.style.opacity = 0;
                setTimeout(function () {
                    textElement.style.display = 'none';
                }, 1000);
            }, 2000); // Display for 7 seconds
        }, 21000); // Delay before showing text again

        // Fourth appearance at 24 seconds for 2 seconds
        setTimeout(function () {
            var textElement = document.getElementById("timed-text3");
            textElement.style.display = 'block';
            textElement.style.opacity = 1;

            // Hide again after 2 seconds (26th second)
            setTimeout(function () {
                textElement.style.opacity = 0;
                setTimeout(function () {
                    textElement.style.display = 'none';
                }, 1000);
            }, 2000); // Display for 2 seconds
        }, 24000); // Delay before showing text again

        // Fifth after 35 seconds show timed-text
        setTimeout(function () {
            var textElement = document.getElementById("timed-text");
            textElement.style.display = 'block';
            textElement.style.opacity = 1;

            // Hide again after 7 seconds (42nd second)
            setTimeout(function () {
                textElement.style.opacity = 0;
                setTimeout(function () {
                    textElement.style.display = 'none';
                }, 1000);
            }, 7000); // Display for 7 seconds
        }, 35000); // Delay before showing text again

        // the opacity of the video changes from 1 to 0.5 every second. Only from 95 seconds till 120 seconds
        setTimeout(function () {
            var videoElement = document.getElementById("myVideo");
            var opacity = 0.5;
            var intervalId = setInterval(function () {
                if (opacity === 0.5) {
                    opacity = 1;
                } else {
                    opacity = 0.5;
                }
                videoElement.style.opacity = opacity;
            }, 1000);
        }, 95000); // Start at 95 seconds

        setTimeout(function () {
            clearInterval(intervalId); // Stop changing opacity
            videoElement.style.opacity = 1; // Set opacity back to 1
        }, 115000); // End at 115 seconds

        // timed-text4 appears at 132 seconds for 3 seconds
        setTimeout(function () {
            var textElement = document.getElementById("timed-text4");
            textElement.style.display = 'block';
            textElement.style.opacity = 1;

            // Hide again after 3 seconds (135th second)
            setTimeout(function () {
                textElement.style.opacity = 0;
                setTimeout(function () {
                    textElement.style.display = 'none';
                }, 1000);
            }, 3000); // Display for 3 seconds
        }, 132000); // Delay before showing text again

        // timed-text5 appears at 50 seconds for 3 seconds
        setTimeout(function () {
            var textElement = document.getElementById("timed-text5");
            textElement.style.display = 'block';
            textElement.style.opacity = 1;

            // Hide again after 3 seconds (53rd second)
            setTimeout(function () {
                textElement.style.opacity = 0;
                setTimeout(function () {
                    textElement.style.display = 'none';
                }, 1000);
            }, 3000); // Display for 3 seconds
        }, 50000); // Delay before showing text again

        // timed-text6 appears at 61 seconds for 1 seconds
        setTimeout(function () {
            var textElement = document.getElementById("timed-text6");
            textElement.style.display = 'block';
            textElement.style.opacity = 1;

            // Hide again after 1 seconds (62nd second)
            setTimeout(function () {
                textElement.style.opacity = 0;
                setTimeout(function () {
                    textElement.style.display = 'none';
                }, 1000);
            }, 1000); // Display for 1 seconds
        }, 58000);

        // timed-text6 appears at 63 seconds for 1 seconds
        setTimeout(function () {
            var textElement = document.getElementById("timed-text7");
            textElement.style.display = 'block';
            textElement.style.opacity = 1;

            // Hide again after 1 seconds (64th second)
            setTimeout(function () {
                textElement.style.opacity = 0;
                setTimeout(function () {
                    textElement.style.display = 'none';
                }, 1000);
            }, 1000); // Display for 1 seconds
        }, 59500);


    });
});

document.addEventListener('DOMContentLoaded', function () {
    const descriptionBox = document.getElementById('descriptionBox');
    const descriptions = [
        { start: 0, end: 2, text: "📺 The tv makes a murmur noice" },
        { start: 6, end: 8, text: "The noice of the tv gets louder " },
        // { start: 14.5, end: 18, text: "📺 The TV turns on by itself" },
        // { start: 23, end: 25, text: "The phone starts to ring" },
        { start: 27, end: 28, text: "Pick up the phone Noah" },
        { start: 30, end: 32, text: "Come on... pick up" },
        // { start: 35, end: 74, text: "☎️ The phone keeps ringing" },
        { start: 75, end: 77, text: "*Beeping tires*" },
        { start: 80, end: 82, text: "Come on Noah... Pick up the god damn phone!" },
        { start: 82, end: 83, text: "*Beeping tires*" },
        { start: 131, end: 132, text: "Aaaaah" }



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

    let intervalId; // Houd de ID bij van de interval timer

    const videoPlayer = document.getElementById('myVideo');
    videoPlayer.addEventListener('timeupdate', function () {
        const currentTime = videoPlayer.currentTime;

        // Check of we binnen de tijdslimieten zitten
        if (currentTime >= 35 && currentTime <= 74) {
            if (!intervalId) { // Start de interval alleen als deze nog niet loopt
                intervalId = setInterval(showRandomTik, 1000);
            }
        } else if (currentTime >= 88 && currentTime <= 135) {
            if (!intervalId) { // Start de interval alleen als deze nog niet loopt
                intervalId = setInterval(showRandomTik, 1000);
            }
        }

        else {
            if (intervalId) {
                clearInterval(intervalId); // Stop de interval als we buiten de limieten zijn
                intervalId = null; // Reset de intervalId
            }
        }
        // if (currentTime >= 88 && currentTime <= 135) {
        //     if (!intervalId) { // Start de interval alleen als deze nog niet loopt
        //         intervalId = setInterval(showRandomTik, 1000);
        //     }
        // } else {
        //     if (intervalId) {
        //         clearInterval(intervalId); // Stop de interval als we buiten de limieten zijn
        //         intervalId = null; // Reset de intervalId
        //     }
        // }
    });
});


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

