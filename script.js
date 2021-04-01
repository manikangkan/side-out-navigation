let card = document.querySelector(".activator");

let tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

let toggle = false;

tl.to(".activator", {
  background: "#805ad5",
  borderRadius: "1rem 0 0 1rem",
});

tl.pause();

tl.to(
  "nav",
  {
    clipPath: "ellipse(100% 100% at 50% 50%)",
  },
  "-=.4"
);

tl.to(
  "nav svg",
  { opacity: 1, transform: "translateX(0)", stagger: 0.1 },
  "-=.2"
);

card.addEventListener("click", () => {
  if (!toggle) {
    tl.play();
    toggle = true;
  } else {
    tl.reverse();
    toggle = false;
  }
});
