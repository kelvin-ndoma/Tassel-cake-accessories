// Function to initialize Swiper without autoplay
function initializeSwiper(selector, slidesPerView) {
  return new Swiper(selector, {
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: false,  // Disable autoplay
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          768: {
              slidesPerView: slidesPerView,
          },
          1024: {
              slidesPerView: slidesPerView,
          },
      },
  });
}

// Initialize Swiper for product-row
var productSwiper = initializeSwiper(".product-row", 3);

// Initialize Swiper for blogs-row
var blogsSwiper = initializeSwiper(".blogs-row", 1);

// Initialize Swiper for review-row
var reviewSwiper = initializeSwiper(".review-row", 3);

// Your existing code for navbar toggle
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick = () => {
  navbar.classList.toggle('active');
};

// Your existing code for search toggle
let search = document.querySelector('.search');
document.querySelector('#search').onclick = () => {
  search.classList.toggle('active');
};
