 // waypoint 
 var waypoint = new Waypoint({
  element: document.getElementById('playground'),
  handler: function(direction) {
    if (direction === 'down') {
      document.querySelector('#nav').classList.remove('navbar-control-up')
      document.querySelector('#nav').classList.add('navbar-control-down')
      document.querySelector('#nav').classList.add('animate__fadeInDown')
      document.querySelector('#nav').classList.add('shadow')
      console.log("down");
    } else {
      
      document.querySelector('#nav').classList.remove('navbar-control-down')
      document.querySelector('#nav').classList.remove('animate__fadeInDown')
      document.querySelector('#nav').classList.remove('shadow')
      console.log("up");
    }
  },
  offset: '5%'
})


var waypoint = new Waypoint({
  element: document.getElementById('otherservices'),
  handler: function(direction) {
    if (direction === 'down') {
      document.querySelector('.footer-fixed').classList.add('show')
      document.querySelector('.footer-fixed').classList.add('animate__fadeInUp')
      
    } else {
      document.querySelector('.footer-fixed').classList.remove('show')
      document.querySelector('.footer-fixed').classList.remove('animate__fadeInUp')
    }
  },
  offset: '5%'
})


// scroll reveal 
ScrollReveal().reveal('.top', { 
  origin: 'top' ,
  distance: '100px',
});
ScrollReveal().reveal('.duration15', { 
  duration: 1500,
});
ScrollReveal().reveal('.duration20', { 
  duration: 2000,
});
ScrollReveal().reveal('.duration25', { 
  duration: 2500,
});
ScrollReveal().reveal('.duration30', { 
  duration: 3000,
});
ScrollReveal().reveal('.duration35', { 
  duration: 3500,
});
ScrollReveal().reveal('.right', { 
  origin: 'right' ,
  distance: '100px',
});
ScrollReveal().reveal('.left', { 
  origin: 'left' ,
  distance: '100px',
});
ScrollReveal().reveal('.scaleUp', { 
  scale: 0.5, 
  duration: 2000,
});
ScrollReveal().reveal('.headline', {
  duration: 2000,
});
ScrollReveal().reveal('.down', { 
  origin: 'top',
  distance: '100px',
  duration: 2000,
});
ScrollReveal().reveal('.up', { 
  origin: 'bottom',
  distance: '100px',
  duration: 2000,
});

ScrollReveal().reveal('.smooth', { 
  easing: 'ease-in' 
});
ScrollReveal().reveal('.reset', { 
  reset: true 
});
// swiper slider 

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//nav tabs
const triggerEl = document.querySelector('#myTab button[data-bs-target="#blog"]')
bootstrap.Tab.getInstance(triggerEl).show()

// Select tab by name

const triggerFirstTabEl = document.querySelector('#myTab li:first-child button')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab


