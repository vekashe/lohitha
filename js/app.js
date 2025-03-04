const follower = document.querySelector('.follower');
const hoverTargets = document.querySelectorAll('button, a, h1'); 

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;
const speed = 0.3; // Adjust for smoothness (lower = slower)

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function smoothFollow() {
    followerX += (mouseX - followerX) * speed;
    followerY += (mouseY - followerY) * speed;

    follower.style.transform = `translate(${followerX}px, ${followerY}px)`;

    requestAnimationFrame(smoothFollow);
}

smoothFollow(); // Start the animation loop

hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => follower.classList.add('active'));
    target.addEventListener('mouseleave', () => follower.classList.remove('active'));
});


const lenis = new Lenis({
    duration: 1.5, // Duration for smooth scroll
    smoothWheel: true, // Enable smooth wheel scrolling
    smoothTouch: true, // Enable smooth touch scrolling (for mobile)
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".home-slider").forEach(slider => {
    // Pin each slider section
    ScrollTrigger.create({
        trigger: slider,
        start: "top top",
        end: "+=100%",
        pinSpacing: false,
        pin: true
    });

    // Scale the image inside the slider on scroll
    gsap.to(slider.querySelector("img"), {
        scale: 1.1, // Set the target scale value here
        scrollTrigger: {
            trigger: slider,
            start: "top top",
            end: "bottom top",
            scrub: true // Smoothly scrubs between the start and end values
        }
    });
});

gsap.to('.footer-section .curve-edge', {
    scrollTrigger: {
      trigger: ".footer-section", // This should be your actual trigger element
      start: "top bottom",
      end: "bottom top",
      scrub: true, // Smoothly scrubs between the start and end values
    },
    y: -400,
});

gsap.to('.footer-scroll-list1', {
    scrollTrigger: {
      trigger: ".footer-section", // This should be your actual trigger element
      start: "top bottom",
      end: "bottom top",
      scrub: 1.8, // Smoothly scrubs between the start and end values
    },
    x: "-20%",
});

gsap.to('.footer-scroll-list2', {
    scrollTrigger: {
      trigger: ".footer-section", // This should be your actual trigger element
      start: "top bottom",
      end: "bottom top",
      scrub: 1.8, // Smoothly scrubs between the start and end values
    },
    x: "20%",
});

gsap.to('.home-about-sec1 p:nth-child(1)', {
    scrollTrigger: {
      trigger: ".home-about", // This should be your actual trigger element
      start: "top bottom",
      end: "bottom top",
      scrub: true, // Smoothly scrubs between the start and end values
    },
    x: "40%",
});

gsap.to('.home-about-sec1 p:nth-child(2)', {
    scrollTrigger: {
      trigger: ".home-about", // This should be your actual trigger element
      start: "top bottom",
      end: "bottom top",
      scrub: true, // Smoothly scrubs between the start and end values
    },
    x: "-30%",
});

gsap.to('.home-about-sec2 div:nth-child(1) p:nth-child(1)', {
    scrollTrigger: {
      trigger: ".home-about", // This should be your actual trigger element
      start: "top bottom",
      end: "bottom top",
      scrub: true, // Smoothly scrubs between the start and end values
    },
    x: "50%",
});

gsap.to('.home-about-sec2 p:nth-child(3)', {
    scrollTrigger: {
      trigger: ".home-about", // This should be your actual trigger element
      start: "top bottom",
      end: "bottom top",
      scrub: true, // Smoothly scrubs between the start and end values
    },
    x: "-40%",
});

gsap.to('.home-about-border > div', {
    scrollTrigger: {
      trigger: ".home-about", // This should be your actual trigger element
      start: "top bottom",
      end: "bottom top",
      scrub: true, // Smoothly scrubs between the start and end values
    },
    x: "-20%",
});

gsap.to('.home-about .curve-edge', {
    scrollTrigger: {
      trigger: ".home-about", // This should be your actual trigger element
      start: "top bottom",
      end: "bottom top",
      scrub: true, // Smoothly scrubs between the start and end values
    },
    y: "-30%",
});


gsap.to('.home-banner-text1', {
  scrollTrigger: {
    trigger: ".home-banner-two", // This should be your actual trigger element
    start: "top bottom",
    end: "center top",
    scrub: 1.8, // Smoothly scrubs between the start and end values
  },
  x: "-30%",
});

gsap.to('.home-banner-text2', {
  scrollTrigger: {
    trigger: ".home-banner-two", // This should be your actual trigger element
    start: "top bottom",
    end: "center top",
    scrub: 1.8, // Smoothly scrubs between the start and end values
  },
  x: "30%",
});

gsap.to('.home-banner-text3', {
  scrollTrigger: {
    trigger: ".home-banner-two", // This should be your actual trigger element
    start: "top bottom",
    end: "center top",
    scrub: 1.8, // Smoothly scrubs between the start and end values
  },
  x: "-30%",
});

gsap.to('.home-banner-text4', {
  scrollTrigger: {
    trigger: ".home-banner-two", // This should be your actual trigger element
    start: "top bottom",
    end: "center top",
    scrub: 1.8, // Smoothly scrubs between the start and end values
  },
  x: "20%",
});

gsap.to('.exp-line', {
  scrollTrigger: {
    trigger: ".home-banner-two", // This should be your actual trigger element
    start: "top bottom",
    end: "center top",
    scrub: 1.8, // Smoothly scrubs between the start and end values
  },
  height: "50%",
});