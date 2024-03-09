const movingNav = document.querySelector(".nav-container");

// sticky nav
window.addEventListener("scroll", enableMovingNav => {
    if(window.scrollY > 420){
        movingNav.style.animation = "fade-in-nav 3s ease-in-out";
        setTimeout(pause => {
            movingNav.style.opacity = "1";
        }, 500)
    }
    else{
        movingNav.style.animation = "fade-out-nav 3s ease-in-out";
        setTimeout(pause => {
            movingNav.style.opacity = "0";
        }, 500)
    }
});

// counter
const counter = document.getElementById('counter');
let count = 0
let interval = 10;
let go = false;

window.addEventListener("scroll", startCount => {
    if(window.scrollY > 800 && go != true){
        counter.style.animation = "fade-in-counter 3s"
        go = true;
        setInterval(countUp => {
            if(count < 330){
                count += interval;
                counter.innerHTML = count;
            }
        }, 60);
    }
});

// slider

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const nxtBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    let slideIndex = 0;

    nxtBtn.addEventListener("click", () => {
        if (slideIndex == 0) {
            slideIndex++;
            const translateXValue = -slideIndex * 300; 
            slides.forEach((slide, index) => {
                slide.style.transform = `translateX(${translateXValue}%)`;
            });
        }
        else if (slideIndex == 1) {
            slideIndex--;
            const translateXValue = slideIndex * 300; 
            slides.forEach((slide, index) => {
                slide.style.transform = `translateX(${translateXValue}%)`;
            });
        }
    });

    prevBtn.addEventListener("click", () => {
        if (slideIndex == 1) {
            slideIndex--;
            const translateXValue = -slideIndex * 300; 
            slides.forEach((slide, index) => {
                slide.style.transform = `translateX(${translateXValue}%)`;
            });
        }
        else if (slideIndex == 0) {
            slideIndex++;
            const translateXValue = -slideIndex * 300;
            slides.forEach((slide, index) => {
                slide.style.transform = `translateX(${translateXValue}%)`;
            });
        }
    });
});