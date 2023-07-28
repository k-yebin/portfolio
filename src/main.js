/* HTML불러오기 */
 $(function () {
     $("#scroll").load("./html/scroll.html");
     $("<div>").load("./html/wave.html", function () {
         $(this).addClass("wave-footer"); // 클래스 추가
         $(this).appendTo("#home");
         $(this).clone().appendTo(".contact_footer");
     });
 });
// 새로고침하면 맨 위로
//  window.onload = function() {
//     setTimeout (function () {
//     scrollTo(0,0);
//     }, 100);
// }
/* 스크롤 시 skills 내 컨텐트 없어짐 */
const skills = document.querySelector('#skills');
const skillHeight = skills.offsetHeight;

document.addEventListener('scroll', () => {
    skills.style.opacity = 2.9 - window.scrollY / skillHeight;
});

/* 스크롤 시 배경색 변경 */
gsap.utils.toArray(".colorChange").forEach((item) => {
    let color = item.getAttribute("data-bgcolor");

    ScrollTrigger.create({
        trigger: item,
        start: "top 20%",
        end: "bottom 5%",

        onEnter: () => {
            gsap.to("body", {
                backgroundColor: color,
                duration: 1.4
            });
        },
        onEnterBack: () => {
            gsap.to("body", {
                backgroundColor: color,
                duration: 1.4
            });
        },
        onLeaveBack: () => {
            gsap.to("body", {
                backgroundColor: "rgba(0,0,0,0)",
                duration: 1.4
            });
        }
    });
});

/* 스크롤 시 헤더 색 변경 */
$(window).scroll(function () {
    let sec3Top = $("#about").offset().top;
    let sec3Bottom = sec3Top + $("#about").height();
    let sec4Top = $("#skills").offset().top;
    let sec4Bottom = sec4Top + $("#skills").height();

    if ($(this).scrollTop() > sec3Top && $(this).scrollTop() < sec4Bottom) {
        $('header').addClass("active", 300); // 변경할 클래스 이름에 맞게 설정
    } else {
        $('header').removeClass("active", 300); // 변경할 클래스 이름에 맞게 설정
    }
});

/* about,skills 섹션 내 커서 색 변경 */
$(document).ready(function () {
    let circle = $("#circle");
    let polyline = $("#polyline");

    $("#about, #skills, #footer").mouseenter(function () {
        circle.css("fill", "#000");
        polyline.css("stroke", "#000");
    });

    $("#about, #skills, #footer").mouseleave(function () {
        circle.css("fill", ""); // Revert to default color
        polyline.css("stroke", ""); // Revert to default color
    });
});



/* SKILLSLOGO SCROLL */
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("skillsLogo");
    image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
}

/* 스크롤 시 나타나기 효과 */
const hide = (item) => {
    gsap.set(item, {
        autoAlpha: 0
    });
}

const animate = (item) => {
    let x = 0;
    let y = 0;
    let delay = item.dataset.delay;

    if (item.classList.contains("reveal_LTR")) {
        x = -100,
            y = 0
    } else if (item.classList.contains("reveal_BTT")) {
        x = 0,
            y = 100
    } else if (item.classList.contains("reveal_TTB")) {
        x = 0,
            y = -200
    } else {
        x = 100,
            y = 0;
    }

    gsap.fromTo(item, {
        autoAlpha: 0,
        x: x,
        y: y
    }, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        delay: delay,
        duration: 2,
        overwrite: "auto",
        ease: "expo"
    });
};

gsap.utils.toArray(".reveal").forEach(item => {
    hide(item);

    ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        markers: false,
        onEnter: () => {
            animate(item)
        }
    });
});



/* PROJECTS_BG */
let projectsSection = document.getElementById("projects");
let contactSection = document.getElementById("contact");

function main() {
    let np = Math.floor(document.documentElement.clientWidth / 100);
    // 밑에거 렉걸려서 위에걸로 바꿈 
    // let np = document.documentElement.clientWidth / 29;
    projectsSection.innerHTML = "";
    let particles = document.createElement("div");
    particles.id = "particles";
    particles.classList.add("backdrop"); // 추가: 새로운 클래스 'backdrop' 추가
    for (let i = 0; i < np; i++) {
        let w = document.documentElement.clientWidth;
        let h = document.documentElement.clientHeight;
        let rndw = Math.floor(Math.random() * w) + 1;
        let rndh = Math.floor(Math.random() * h) + 1;
        let widthpt = Math.floor(Math.random() * 5) + 1;
        let opty = Math.floor(Math.random() * 5) + 2;
        let anima = Math.floor(Math.random() * 12) + 8;

        let div = document.createElement("div");
        div.classList.add("particle");
        div.style.marginLeft = rndw + "px";
        div.style.marginTop = rndh + "px";
        div.style.width = widthpt + "px";
        div.style.height = widthpt + "px";
        div.style.background = "white";
        div.style.opacity = opty;
        div.style.animation = "move " + anima + "s ease-in infinite ";
        particles.appendChild(div);
    }
    projectsSection.appendChild(particles);


}

window.addEventListener("resize", main);
window.addEventListener("load", main);



window.addEventListener('scroll', function () {
    let contactSection = document.getElementById('contact');
    let contentDiv = document.getElementById('contactContent');

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollThreshold = contactSection.offsetTop + (contactSection.offsetHeight / 2);

    if (scrollTop > scrollThreshold) {
        contentDiv.style.opacity = 0.1;
        contentDiv.style.transition = 'opacity 0.6s';
    } else {
        contentDiv.style.opacity = 1;
        contentDiv.style.transition = 'opacity 0.6s';
    }
});


// useEffect(() => {
//     document.body.style= `overflow: hidden`;
//     return () => document.body.style = `overflow: auto`
//   }, [])