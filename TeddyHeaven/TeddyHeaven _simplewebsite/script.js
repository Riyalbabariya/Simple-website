
//toggle navbar//

const bar = document.getElementById('bar');
const close= document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){

    bar.addEventListener('click' ,()=>{
        nav.classList.add('active');
    })
}


if (close){

    close.addEventListener('click' ,()=>{
        nav.classList.remove('active');
    })
}

// SignUp //

function validatesignup() {
    var email = document.getElementById("signup-email").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

   
    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

  
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Thank you for signing up!");
    return true;
}

//Contact Form//

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

   
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }


    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

  
    if (subject === "") {
        alert("Please enter a subject.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }


    alert("Thank you for your message! We will get back to you soon.");
    return true;
}

// Review Slider//

document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const slider = document.querySelector(".review-slider");
    const slides = document.querySelectorAll(".review-item");

  
    if (!prevButton || !nextButton || !slider || slides.length === 0) {
        return;
    }

    let currentIndex = 0;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 340}px)`;
    }

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSliderPosition();
        }
    });
});
