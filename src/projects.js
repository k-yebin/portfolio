//////////////
window.addEventListener("scroll", function () {
    let scrollValue = window.pageYOffset;
    let projects = document.getElementsByClassName("project");
    let projectHeaders = document.getElementsByClassName("project_header");
    let projectContainer = document.getElementsByClassName("projects_container");
    let mokups = document.getElementsByClassName("mokup");
    let projectTexts = document.getElementsByClassName("project_text");
    let scrollMark = document.getElementById("scroll");
    let contactTitle = document.getElementsByClassName("contact_title");

    // project1
    if (scrollValue >= 3185 && scrollValue < 3985) {
        projects[0].style.opacity = 1;
        projects[0].style.color = "white";
        projectContainer[0].style.zIndex = 2;
    } else {
        projects[0].style.opacity = 0;
        projectContainer[0].style.zIndex = 1;

    }

    // project2
    if (scrollValue >= 3980 && scrollValue < 4980) {
        projectHeaders[0].style.opacity = 1;
        projectHeaders[0].style.transform = "translateY(0)";
        mokups[0].style.opacity = 1;
        mokups[0].style.transform = "translateX(0)";
        projectTexts[0].style.opacity = 1;
        projectTexts[0].style.transform = "translateX(0)";
        projectContainer[1].style.zIndex = 2;

    } else {
        projectHeaders[0].style.opacity = 0;
        projectHeaders[0].style.transform = "translateY(100%)";
        mokups[0].style.opacity = 0;
        mokups[0].style.transform = "translateX(-100%)";
        projectTexts[0].style.opacity = 0;
        projectTexts[0].style.transform = "translateX(100%)";
        projectContainer[1].style.zIndex = 1;
    }

    // project3
    if (scrollValue >= 5200 && scrollValue < 6200) {
        projectHeaders[1].style.opacity = 1;
        projectHeaders[1].style.transform = "translateY(0)";
        mokups[1].style.opacity = 1;
        mokups[1].style.transform = "translateX(0)";
        projectTexts[1].style.opacity = 1;
        projectTexts[1].style.transform = "translateX(0)";
        projectContainer[2].style.zIndex = 2;

    } else {
        projectHeaders[1].style.opacity = 0;
        projectHeaders[1].style.transform = "translateY(100%)";
        mokups[1].style.opacity = 0;
        mokups[1].style.transform = "translateX(-100%)";
        projectTexts[1].style.opacity = 0;
        projectTexts[1].style.transform = "translateX(100%)";
        projectContainer[2].style.zIndex = 1;

    }

    // project4
    if (scrollValue >= 6420 && scrollValue < 7420) {
        projectHeaders[2].style.opacity = 1;
        projectHeaders[2].style.transform = "translateY(0)";
        mokups[2].style.opacity = 1;
        mokups[2].style.transform = "translateX(0)";
        projectTexts[2].style.opacity = 1;
        projectTexts[2].style.transform = "translateX(0)";
        projectContainer[3].style.zIndex = 2;

    } else {
        projectHeaders[2].style.opacity = 0;
        projectHeaders[2].style.transform = "translateY(100%)";
        mokups[2].style.opacity = 0;
        mokups[2].style.transform = "translateX(-100%)";
        projectTexts[2].style.opacity = 0;
        projectTexts[2].style.transform = "translateX(100%)";
        projectContainer[3].style.zIndex = 1;

    }

    if (scrollValue >= 7636) {
        scrollMark.style.transition = "opacity 0.3s ease-in-out";
        scrollMark.style.opacity = 0;
    } else {
        scrollMark.style.transition = "opacity 0.3s ease-in-out";
        scrollMark.style.opacity = 1;
    }

});