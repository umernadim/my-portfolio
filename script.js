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
    delay: 2,
    duration: 1.2,
    ease: "Power2.out",
    stagger: 0.4,
    delay: 0.4,
  });
}

navAnime();

function landingPgAnime() {

  gsap.from("#about img", {
    //y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.3,
    delay: 1.9
  });

  gsap.from("#about p, #about a", {
    y: -30,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.3,
    delay: 1.3
  });

  gsap.from(["#row1 h1", "#row2 h1"], {
    x: (i) => (i % 2 === 0 ? -100 : 100),
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.3,
    delay: 0.9
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#landing-pg img",
        scroller: "#main",
        start: "top 30%",
        end: "top 0",
        scrub: 5,
      },
    })
    .to(
      "#head1, #head2",
      {
        x: "-100",
        ease: "Power2.out",
      },
      "hero-anime"
    )

    .to(
      "#head3, #head4",
      {
        x: "100",
        ease: "Power2.out",
      },
      "hero-anime"
    )
    .to(
      "#landing-pg img",
      {
        y: "-80",

        ease: "Power2.out",
      },
      "hero-anime"
    );
}

landingPgAnime();

// code for project section
function projectCards() {
  let projectsInfor = [
    {
      sNo: "01",
      title: "Hope Language Center",
      discp: `Discover my exciting language project by clicking
        <a href="your-projects-page-url">here</a>. Dive into a world of
        languages and see what I've been working on!`,
      img: "assets/hope-lang.png",
      category: "Website",
      link: "https://github.com/umernadim/hopeEngLangCenter.git"
    },
    {
      sNo: "02",
      title: "SunDown",
      discp: `Explore our innovative creative space and discover our captivating projects <a href="https://umernadim.github.io/sundown-web/">here</a>.`,
      img: "assets/sundown.png",
      category: "Website",
      link: "https://umernadim.github.io/sundown-web/"
    },
    {
      sNo: "03",
      title: "FanoFan",
      discp: `Experience the ultimate fan connection with FanoFan Web by clicking
            <a href="https://umernadim.github.io/FanoFan-web/">here</a>. Dive into
            exclusive content and engage with your favorite fandoms!`,
      img: "assets/fanofan.png",
      category: "Website",
      link: "https://umernadim.github.io/FanoFan-web/"
    },
    {
      sNo: "04",
      title: "Drawing web app",
      discp: ` Unleash your creativity with my Drawing App! Click
        <a href=" https://umernadim.github.io/Drawing-app/">here</a> to
        explore and create amazing digital artworks.`,
      img: "assets/drawing-app.png",
      category: "Web-App",
      link: "https://umernadim.github.io/Drawing-app/"
    },
    
  ];

  let projLeft = document.querySelector("#project-sec #left-part");
  let projRight = document.querySelector("#project-sec #right-part");

  projectsInfor.forEach((project, i) => {
    let projectHTML = `
      <div class="project">
          <img src="${project.img}" alt="">
          <div class="proj-info">
             
              <div class="proj-name">
                  <h3>${project.title}</h3>
                  <h4>${project.category}</h4>
              </div>
              <a href="${project.link}"><i class="fa-solid fa-arrow-right"></i></a>
          </div>
      </div>`;

    if (i % 2 === 0) {
      projLeft.insertAdjacentHTML("beforeend", projectHTML);
    } else {
      projRight.insertAdjacentHTML("beforeend", projectHTML);
    }
  });
}

projectCards();

function projAnime() {
  gsap.from("#proj-head #right-part h2, #proj-head h3", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "Power3.out",
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#proj-head",
      scroller: "#main",
      start: "top 75%",
      end: "top 30%",
      scrub: 2,
    },
  });

  gsap.utils.toArray("#project-sec img").forEach((img, index) => {
    let projInfo = document.querySelectorAll("#project-sec .proj-info")[index];

    gsap.from([img, projInfo], {
      y: 100,
      // opacity: 0,
      duration: 1.5,
      ease: "Power3.out",
      scrollTrigger: {
        trigger: img,
        scroller: "#main",
        start: "top 75%",
        end: "top 30%",
        scrub: 2,
      },
    });
  });
}

projAnime();

// code to animate contact section
function contactAnime() {
  // Animate Contact Headings 
  gsap.from("#contact-sec h3,#contact-sec img", {
    y: 100, 
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.3, 
    scrollTrigger: {
      trigger: "#contact-sec",
      scroller: "#main",
      start: "top 80%",
      end: "top 50%"
    }
  });

  // Animate "Get in Touch" Button
  gsap.from("#mail-div", {
    y: 100,
    opacity: 0,
    duration: 2.4,
    delay: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#contact-sec",
      scroller: "#main",
      start: "top 85%",
      end: "top 60%"    
    }
  });

  gsap.from("#contact-sec p", {
    y: 100,
    opacity: 0,
    duration: 2.4,
    ease: "power3.out",
    delay: 1, 
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#contact-sec",
      scroller: "#main",
      start: "top 90%",
      end: "top 70%"
    }
  });
}

contactAnime();


