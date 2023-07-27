// const lenis = new Lenis({
//   duration: 1.2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
// });

// function raf(time) {
//   lenis.raf(time);
//   ScrollTrigger.update();
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// const section_1 = document.getElementById("vertical");
// const col_left = document.querySelector(".col_left");
// const timeln = gsap.timeline({ paused: true });

// timeln.fromTo(col_left, {y: 0}, {y: '90vh', duration: 1, ease: 'out'}, 0);

// const scroll_1 = ScrollTrigger.create({
//     animation: timeln,
//     trigger: section_1,
//     start: 'top top',
//     end: 'bottom center',
//     scrub: true
// });
// const section_2 = document.getElementById("horizontal");
// let box_items = gsap.utils.toArray(".horizontal__item");

// gsap.to(box_items, {
//   xPercent: -100 * (box_items.length - 1),
//   ease: "sine.out",
//   scrollTrigger: {
//     trigger: section_2,
//     pin: true,
//     scrub: 3,
//     snap: 1 / (box_items.length - 1),
//     end: "+=" + section_2.offsetWidth
//   }
// });
const noise = () => {
    let canvas, ctx;

    let wWidth, wHeight;

    let noiseData = [];
    let frame = 0;

    let loopTimeout;


    // Create Noise
    const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.5) {
                buffer32[i] = 0xff000000;
            }
        }

        noiseData.push(idata);
    };


    // Play Noise
    const paintNoise = () => {
        if (frame === 9) {
            frame = 0;
        } else {
            frame++;
        }

        ctx.putImageData(noiseData[frame], 0, 0);
    };


    // Loop
    const loop = () => {
        paintNoise(frame);

        loopTimeout = window.setTimeout(() => {
            window.requestAnimationFrame(loop);
        }, (1000 / 25));
    };


    // Setup
    const setup = () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;

        canvas.width = wWidth;
        canvas.height = wHeight;

        for (let i = 0; i < 10; i++) {
            createNoise();
        }

        loop();
    };


    // Reset
    let resizeThrottle;
    const reset = () => {
        window.addEventListener('resize', () => {
            window.clearTimeout(resizeThrottle);

            resizeThrottle = window.setTimeout(() => {
                window.clearTimeout(loopTimeout);
                setup();
            }, 200);
        }, false);
    };


    // Init
    const init = (() => {
        canvas = document.getElementById('noise');
        ctx = canvas.getContext('2d');

        setup();
    })();
};

noise();



// Span the header
const header = document.querySelector('h1');
const headerSpanned = [];
header.textContent.split('').forEach((letter) => {
  headerSpanned.push(`<h3>${letter}</h3>`);
});
header.innerHTML = headerSpanned.join('');

// Get the spans in NodeList
const spans = document.querySelectorAll('h3');

let drawCount = 0;

function draw() { 
  if (drawCount%9  === 0 || drawCount%9 === 1){
    spans.forEach((span) => {
      span.style.color = 'white';
      span.style.transform = `scale(1) translate(0,0)`;
    })
  } else {
     spans.forEach((span) => {
       // Generate random numbers
      const randomBoolean = Math.random() >= 0.7;
      const randomScale = Math.random() * 5 + 0.4;
      const randomTranslate = Math.random() * 200 - 100 + 1;
       
      // Apply random transforms and transparency
      span.style.transform = `scale(${randomScale}) translate(${randomTranslate*1.4}%, ${randomTranslate/6}%)`;
      if(randomBoolean){
        span.style.color = 'rgba(0,0,0,0)';
      } else {
        span.style.color = 'white';
      }
    }); 
  }
  drawCount++;
}

// Animate
window.setInterval(draw, 1052);

