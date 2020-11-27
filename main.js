$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  navText: [
    "<div class='nav-btn prev-slide'></div>",
    "<div class='nav-btn next-slide'></div>",
  ],
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

function toggle() {
  var header = document.querySelector("#header")
  header.classList.toggle('active1')
}
var preloder = document.getElementById('loading');

function myloading() {
    preloder.style.display = 'none'
}