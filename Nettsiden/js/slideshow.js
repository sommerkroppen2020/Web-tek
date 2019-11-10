var slideIndex = 0;
showSlides();


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


//automatic slideshow
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

//Code inspires by https://www.w3schools.com/howto/howto_js_slideshow.asp
