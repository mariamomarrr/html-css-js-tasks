let countDownDate = new Date().getTime() + (24 * 60 * 60 * 1000);


let timerInterval = setInterval(function () {


    let now = new Date().getTime();


    let distance = countDownDate - now;


    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);



    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');


    if (distance < 0) {
        clearInterval(timerInterval);
        document.querySelector(".d-flex.gap-1").innerHTML = "EXPIRED";
    }
}, 1000);








document.addEventListener('DOMContentLoaded', () => {
    const mainImg = document.getElementById('mainProductImg');
    const thumbnails = document.querySelectorAll('.color-img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function () {
            // Change Main Image
            mainImg.src = this.getAttribute('data-src');

            // Toggle Active Class
            thumbnails.forEach(t => t.classList.remove('border-dark', 'active'));
            this.classList.add('border-dark', 'active');
        });
    });
});














const subscribeForm = document.getElementById('subscribeForm');
const emailInput = document.getElementById('emailInput');


subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailValue = emailInput.value.trim();

    alert("Thank you for subscribing: " + emailValue);

    emailInput.value = "";
});













