function scroller() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    multiplier: 0.7,
    lerp: 0.08,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

scroller();

function navAnime() {
  gsap.from("nav", {
    y: "-30",
    opacity: 0,
    duration: 1.2,
    ease: "Power2.out",
    stagger: 0.4,
    delay: 1,
  });
}

navAnime();

// code to animate about home page
function homeAnime() {
  gsap
  .timeline({
      scrollTrigger: {
        trigger: "#abt-home #abt-intro p",
        scroller: "#main",
        start: "top 28%",
        end: "top 0",
        scrub: 5,
      },
    })
    .to(
      "#row1 h1",
      {
        x: "-100",
        ease: "Power2.out",
      },
      "hero-anime"
    )

    .to(
      "#row2 h1",
      {
        x: "100",
        ease: "Power2.out",
      },
      "hero-anime"
    )
    .to(
      "#abt-home #abt-intro img",
      {
        y: "-110",

        ease: "Power2.out",
      },
      "hero-anime"
    );
}

homeAnime();

function heroHomeAnimation() {

  let tl = gsap.timeline();

  tl.from('#abt-intro p, #abt-intro #date, #abt-intro img',{
    opacity: 0,
    y: 20,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.5,
    delay: 0.5,
    stagger: 0.3
  })

  tl.from('#row1, #row2',{
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.5,
    delay: -0.8
  })

  
  gsap.from('#abt-pg2 p, #abt-pg2 h4',{
  opacity: 0,
  y: 20,
  duration: 0.8,
  ease: 'power2.out',
  stagger: 0.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: '#abt-pg2 p',
    scroller: '#main',
    start: 'top 75%',
    end: 'top 30%'
  }
})
}

heroHomeAnimation();

// code to animate about page 2
function abtPg2() {

  gsap.utils.toArray("#abt-pg2 .row").forEach((row, index) => {
    gsap.to(row, {
      x: 150, 
      opacity: 1, 
      ease: "Power2.out",
      delay: 2.5,
      duration: 2.5,
      scrollTrigger: {
        trigger: row,
        scroller: "#main",
        start: "top 75%", 
        end: "top 50%", 
        scrub: 3, 
      },
    });
  });


}

abtPg2();

// code to animate about page 3
function abtPg3Anime() {
  gsap.from('#abt-pg3 h4, #abt-pg3 p',{
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: '#abt-pg3 p',
      scroller: '#main',
      start: 'top 75%',
      end: 'top 30%'
    }
  })
}

abtPg3Anime();

// code to anime footer secion
function footerAnime() {
  gsap.from('footer p, footer a',{
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1.3,
    ease: "Power3.out",
    scrollTrigger: {
      trigger: "#abt-pg3 p",
      scroller: "#main",
      start: "top 75%",
      end: "top 30%"
    }
  })
}

footerAnime();


