gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const vh = window.innerHeight / 100;
document.documentElement.style.setProperty('--vh', `${vh}px`);

var OPEN = document.querySelector("#button-menu-open");
var CLOSE = document.querySelector("#button-menu-close");

var tl = gsap.timeline({ paused: true })
tl.set('.nav-side', { display: 'block', duration: 0 }, 0)
.from('.nav-side', { x: '-100vw', duration: 1 }, 0);

OPEN.onclick = function() {
  tl.restart();
}

var t2 = gsap.timeline({ paused: true })
t2.to('.nav-side', { x: '-100vw', duration: 1 }, 0)
.set('.nav-side', { display: 'none', duration: 0 }, 1);

CLOSE.onclick = function() {
  t2.restart();
}

var t3 = gsap.timeline();

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 2.05,
    effects: true
  });
  t3.to('#header-web__block-content__h2', { opacity: 1, duration: 0.7 }, 0);
  t3.to('.delimiter__i', { opacity: 1, rotation: 7200, duration: 0.6 }, 0.7);
  t3.fromTo('.delimiter__line-left', { opacity: 0, duration: 0.6, width: '0%' }, { opacity: 1, width: '50%' }, 1);
  t3.fromTo('.delimiter__line-right', { opacity: 0, duration: 0.6, width: '0%' }, { opacity: 1, width: '50%' }, 1);
  t3.to('#header-web__block-content__h6', { opacity: 1, duration: 1 }, 1.5);
}
else {
  t3.to('#header-web__block-content__h2', { opacity: 1, duration: 1 }, 0);
  t3.to('.delimiter__i', { opacity: 1, duration: 1 }, 0);
  t3.to('.delimiter__line-left', { opacity: 1, duration: 1 }, 0);
  t3.to('.delimiter__line-right', { opacity: 1, duration: 1 }, 0);
  t3.to('#header-web__block-content__h6', { opacity: 1, duration: 1 }, 0);
}

gsap.fromTo('.header-web__block-content', 
  { opacity: 1 }, 
  { opacity: 0, scrollTrigger: { trigger: '.header-web__block-content', start: "center center", end: "240% center", scrub: true }}
);
gsap.fromTo('.delimiter__line-left', 
  { width: '50%' }, 
  { width: '0%', scrollTrigger: { trigger: '.header-web__block-content', start: "center center", end: "240% center", scrub: true }}
);
gsap.fromTo('.delimiter__line-right', 
  { width: '50%' }, 
  { width: '0%', scrollTrigger: { trigger: '.header-web__block-content', start: "center center", end: "240% center", scrub: true }}
);
gsap.fromTo('#section-2__header__block-content', 
  { opacity: 0 }, 
  { opacity: 1, scrollTrigger: { trigger: '#section-2__header__blocks', start: "-30% center", end: "center center", scrub: true }}
);
gsap.fromTo('#section-2__header__block-content', 
  { opacity: 1 }, 
  { opacity: 0, scrollTrigger: { trigger: '#section-2__header__blocks', start: "70% center", end: "120% center", scrub: true }}
);
gsap.fromTo('#section-3__header__block-content', 
  { opacity: 0 }, 
  { opacity: 1, scrollTrigger: { trigger: '#section-3__header__blocks', start: "-30% center", end: "center center", scrub: true }}
);
gsap.fromTo('#section-3__header__block-content', 
  { opacity: 1 }, 
  { opacity: 0, scrollTrigger: { trigger: '#section-3__header__blocks', start: "70% center", end: "120% center", scrub: true }}
);
