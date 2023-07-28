const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();




const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



const tl = gsap.timeline();

tl.fromTo(".one", {opacity: 0}, {opacity: 1, duration: 0.7}, "0.9")
tl.fromTo(".two", {opacity: 0}, {opacity: 1, duration: 0.7}, "1")
tl.fromTo(".three", {opacity: 0}, {opacity: 1, duration: 0.7}, "1.4")
tl.fromTo(".menu", {opacity: 0}, {opacity: 1, duration: 0.7}, "2.2s");



