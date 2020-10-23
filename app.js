var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n
    showSlides();
}

function currentSlides(n){
    slideIndex = n;
    showSlides();
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var square = document.getElementsByClassName("square")

    if(slideIndex > slides.length) {
        slideIndex = 1;
    }
    if(slideIndex < 1) {
        slideIndex = slides.length;
    }
    
    for( i=0;i<slides.length; i++){
        slides[i].style.display = "none";  
    }

    for( i=0;i<slides.length; i++){
        square[i].className = square[i].className.replace(" active","");
    }

    slides[slideIndex-1].style.display = "block";
    square[slideIndex-1].className += " active";
}