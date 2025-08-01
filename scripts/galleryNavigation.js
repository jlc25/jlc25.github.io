var slideIndex = 0;
var numSlides = document.getElementsByClassName("slide-thumbnail").length;

document.addEventListener("keydown", (e) => {
  console.log(`pressed ${e.key}`);
  if (e.key === "ArrowLeft" && slideIndex > 0) {
    showSlide(slideIndex - 1);
  }

  if (e.key === "ArrowRight" && slideIndex < numSlides - 1) {
    showSlide(slideIndex + 1);
  }
});

function showSlide(n) {
  console.log(`slide ${n}`);
  slideIndex = n;
  var slides = document.getElementsByClassName("slide");
  var thumbnails = document.getElementsByClassName("slide-thumbnail");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    thumbnails[i].style.opacity = 0.75;
  }

  slides[n].style.display = "block";
  thumbnails[n].style.opacity = 1;
}
