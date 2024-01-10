let currentCard = 1;
showCard(currentCard);

function showCard(cardNumber) {
    const cards = document.querySelectorAll('.card');
    if (cardNumber > cards.length) {
        currentCard = 1;
    }
    if (cardNumber < 1) {
        currentCard = cards.length;
    }
    cards.forEach(card => card.style.display = 'none');
    cards[currentCard - 1].style.display = 'block';
}

function prevCard() {
    showCard(currentCard -= 1);
}

function nextCard() {
    showCard(currentCard += 1);
}

document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 800,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });
});

// Your existing code for navbar toggle
let navbar = document.querySelector('.navbar');
let menuBarIcon = document.getElementById('menu-bar');

menuBarIcon.onclick = () => {
  navbar.classList.toggle('active');
  // Toggle Font Awesome icon between bars and X
  menuBarIcon.classList.toggle('fa-bars');
  menuBarIcon.classList.toggle('fa-times');
};

// Your existing code for search toggle
let search = document.querySelector('.search');
let searchIcon = document.querySelector('#search');

searchIcon.onclick = () => {
  search.classList.toggle('active');
};

// Close navbar when a menu item is clicked
let menuItems = document.querySelectorAll('.navbar a');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    navbar.classList.remove('active');
    // Reset Font Awesome icon to bars when a menu item is clicked
    menuBarIcon.classList.remove('fa-times');
    menuBarIcon.classList.add('fa-bars');
  });
});


