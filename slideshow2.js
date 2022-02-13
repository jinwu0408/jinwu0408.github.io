var slideIndex = 0;
autoShowSlides();
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
  autoShowSlides();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  autoShowSlides();
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot_active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " dot_active";
}

function autoShowSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot_active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " dot_active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
