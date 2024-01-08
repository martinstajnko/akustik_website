var images = [
    "static/images/gallery_concerts/photo1.jpg",
    "static/images/gallery_concerts/photo3.jpg",
    "static/images/gallery_concerts/photo4.jpg",
    "static/images/gallery_concerts/photo6.jpg",
    "static/images/gallery_concerts/photo11.jpg",
    "static/images/gallery_concerts/photo12.jpg",
    "static/images/gallery_concerts/photo13.jpg",
    "static/images/gallery_concerts/photo15.jpg"
    // add more image paths as needed
  ];

var carouselInner = document.querySelector('.carousel-inner.second-gallery');

images.forEach(function(image, index) {
  var carouselItem = document.createElement('div');
  carouselItem.className = 'carousel-item carousel-image bg-img-' + index;
  if (index === 0) {
    carouselItem.classList.add('active');
  }
  carouselItem.setAttribute('data-bs-interval', '3000');

  var img = document.createElement('img');
  img.src = image;
  img.className = 'img-fluid';
  img.alt = 'group';

  carouselItem.appendChild(img);
  carouselInner.appendChild(carouselItem);
});