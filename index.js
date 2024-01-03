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
document.querySelector('#menu-bar').onclick = () => {
  navbar.classList.toggle('active');
};

// Your existing code for search toggle
let search = document.querySelector('.search');
document.querySelector('#search').onclick = () => {
  search.classList.toggle('active');
};
