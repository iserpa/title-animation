let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.home',
    start: '0%',
    end: '80%',
    scrub: 1
  }
})
/*
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.home',
    start: '0%',
    end: '80%',
    scrub: 1
  }
})
*/
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.home',
    start: '0%',
    end: '200%',
    scrub: 1,
    pin: true,
    pinSpacing: false
  }
})

tl.fromTo('.sliding-text', {y: 0}, {y: -400})
//tl.to('.logo', {opacity: 0}, '<')
tl.fromTo('.logo', {scale: 6}, {
  scale: 2.2,
  top: '2rem',
  left: '3rem',
  x: '50%',
  y: '160%'
}, '<')
tl.fromTo('.square', {left: '50%'}, {left: '100%', opacity: 0, rotation: 90}, '<')
