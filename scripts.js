// scripts.js
function startCountdown() {
    var countdownDate = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 horas

    var countdownTimer = setInterval(function() {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("contador").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById("contador").innerHTML = "Oferta Expirada";
        }
    }, 1000);
}

window.onload = startCountdown;
