//Responsive Side Menu
function responsiveSideMenu() {
  let menuBtn = document.getElementById("navMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Typing on Screen Effect
let writingEffect = new Typed(".textWriting", {
  strings: ["Front-End Developer", "Support Analyst", "B.el Information Systems", "IT Technician"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
})

//Swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 118000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

//ScrollReveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})
sr.reveal('.home-text-card', {})
sr.reveal('.top-header', {})
sr.reveal('.home-name', { delay: 100 })
sr.reveal('.home-text-info', { delay: 200 })
sr.reveal('.home-text-btn', { delay: 200 })
sr.reveal('.social-icons', { delay: 200 })
sr.reveal('.home-image', { delay: 300 })
sr.reveal('.project-box', { interval: 200 })

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})
srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})
srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })

//Scroll Active
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)