function scroller() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    multiplier: 0.9,
    lerp: 0.1,
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

// code to animate navbar
function navAnime() {
  gsap.from("nav", {
    y: "-30",
    opacity: 0,
    duration: 1.2,
    ease: "Power2.out",
    stagger: 0.4,
    delay: 0.4,
  });
}

navAnime();

function heroAnimation() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#proj-hero-sec .row1",
      scroller: "#main",
      // markers: true,
      start: "top 27%",
      end: "top 0",
      scrub: 5,
    },
  });

  tl.to(
    "#proj-hero-sec .row1",
    {
      x: "-80",
      ease: "Power2.out",
    },
    "hero-anime"
  );

  tl.to(
    "#proj-hero-sec .row2",
    {
      x: "80",
      ease: "Power2.out",
    },
    "hero-anime"
  );


  // code for animation
  gsap.from('#proj-hero-sec p',{
    opacity: 0,
    y: 20,
    ease: 'Power2.out',
    duration: 1.5,
    delay: 1
  });

  gsap.from('#proj-hero-sec .row1',{
    opacity: 0,
    x: 100,
    ease: 'Power2.out',
    duration: 1,
    delay: 1,
  });

  gsap.from('#proj-hero-sec .row2',{
    opacity: 0,
    x: -100,
    ease: 'Power2.out',
    duration: 1,
    delay: 1,
  });

}

heroAnimation();

// code for projects
function projectCards() {
  let projectsInfor = [
    {
      sNo: "01",
      title: "Hope Language Center",
      discp: `Discover my exciting language project by clicking
        <a href="your-projects-page-url">here</a>. Dive into a world of
        language and see what I've been working on!`,
      img: "assets/hope-lang.png",
      category: "Website",
      link: " https://umernadim.github.io/hopeEngLangCenter/"
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

//code for mini-projects
function miniProjects() {
  let miniProj = [
    {
      sNo: "01",
      name: "Weather-app",
      category: "Web-app",
      link: " https://umernadim.github.io/weather-app/"
    },
    {
      sNo: "02",
      name: "Calculator",
      category: "Web-app",
      link: "https://umernadim.github.io/modern-Calculator/"
    },
    {
      sNo: "03",
      name: "Tic-tac-toe",
      category: "Web-game",
      link: " https://umernadim.github.io/tic_tac_toe_game/"
    },
    {
      sNo: "04",
      name: "To-do-list",
      category: "Web-app",
      link: " https://umernadim.github.io/To-do-list/"
    },
    {
      sNo: "05",
      name: "Leap year checker",
      category: "Web-app",
      link: " https://umernadim.github.io/leap-year-checker/"
    },
  ];

  let projContainer = document.querySelector("#mini-proj-sec #proj-div");
  miniProj.forEach(function(proj){
    projContainer.innerHTML += ` 
            <div class="proj">
                <h4 class="stroke-cl">${proj.sNo}</h4>
                  <div class="proj-info">
                      <h4>${proj.name}</h4>
                      <h4 class="stroke-cl">${proj.category}</h4>
                </div>
                 <a href="${proj.link}"><i class="fa-solid fa-arrow-right"></i></a>
            </div> `;
  });

  // code for animation
  gsap.from('#mini-proj-sec h2,#mini-proj-sec p,#mini-proj-sec .proj',{
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "Power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#mini-proj-sec h2",
      scroller: "#main",
      start: "top 75%",
      end: "top 30%"
    }
  })
}

miniProjects();

//code for social-section
function socialSec(){
  gsap.from('#social-sec .social-div,#social-sec h2,#social-sec p',{
    y: 100,
    opacity: 0,
    duration: 1.1,
    stagger: 0.2,
    ease: "Power3.out",
    scrollTrigger: {
      trigger: "#social-sec",
      scroller: "#main",
      start: "top 75%",
      end: "top 30%"
    }
  })
  
  gsap.from('footer p, footer a',{
    opacity: 0,
    y: 20,
    duration: 1.2,
    delay: 1.15,
    ease: "Power3.out",
    scrollTrigger: {
      trigger: "#social-sec p",
      scroller: "#main",
      start: "top 75%",
      end: "top 30%"
    }
  })

}

socialSec();