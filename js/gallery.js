const artImages = document.querySelectorAll(".art-images img");
const artImageSlide = document.querySelector(".image-slider");

let activeImageSlide = 0;

artImages.forEach((item, i) => {
    item.addEventListener('click',() => {
      artImages[activeImageSlide].classList.remove('active');
      item.classList.add('active');
      artImageSlide.style.backgroundImage = `url('${item.src}')`;
      activeImageSlide = i;
    })
})