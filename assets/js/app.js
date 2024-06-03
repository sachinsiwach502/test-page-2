// nav bar----------------
let body = document.body;
let menuIcon = document.querySelector(".menuIcon");
let menuList = document.querySelector(".menuBar");
let line_1 = document.querySelector(".first-line")
let line_2 = document.querySelector(".sec-line");
let line_3 = document.querySelector(".third-line");

function cross() {
    line_2.classList.add("d-none");
    // line_1.classList.add("transform-origin-center-center");
    line_1.classList.add("position-relative");
    line_1.style.top = "12px";
    line_1.style.left = "2px";
    line_1.style.transform = "rotate(45deg)"
    line_3.classList.add("position-relative");
    line_3.style.top = "-12px";
    line_3.style.transform = "rotate(-45deg)";
    line_1.classList.add("transition");
    line_3.classList.add("transition");

}
function line() {
    line_2.classList.remove("d-none");
    line_1.classList.remove("position-relative");
    line_1.style.transform = "rotate(0deg)"
    line_3.classList.remove("position-relative");
    line_3.style.transform = "rotate(0deg)";
}


// add show class in nav links--------------
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    if (menuList.classList.contains("show")) {
        cross();
        body.style.overflow = "hidden";
    } else {
        line();
        body.style.overflow = "auto";
    }
});



// navlinks hidden show class----------
let navLinks = document.querySelectorAll(".nav_links")

navLinks.forEach(links => {
    links.addEventListener("click", () => {
        menuList.classList.remove("show");
        line();
        body.style.overflow = "auto";
    });
});


// slick-slider=====================
$('.slick_slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// accordian==================
let clickPart = document.querySelector(".clickable_part");
let img = document.querySelector(".accordian_img");
let accHeading = document.querySelector(".accordian-heading");
let num = document.querySelector(".acc_num_box");
let hiddenTxt = document.querySelector(".hidden_txt");

hiddenTxt.style.display = "block";
num.style.color = "#9EFF00";
img.style.transform = "rotate(90deg)";
img.classList.add("svg_green_color");

accHeading.style.color = "#9EFF00";

let accItm = document.querySelectorAll(".accrodain_itm");
accItm.forEach(e => {
    let clickPart = e.querySelector(".clickable_part");
    let img = e.querySelector(".accordian_img");
    let accHeading = e.querySelector(".accordian-heading");
    let num = e.querySelector(".acc_num_box");
    let hiddenTxt = e.querySelector(".hidden_txt");
    let txtDisply = window.getComputedStyle(hiddenTxt).display;

    clickPart.addEventListener("click", () => {
        accItm.forEach(j => {
            let clickPart = j.querySelector(".clickable_part");
            let img = j.querySelector(".accordian_img");
            let accHeading = j.querySelector(".accordian-heading");
            let num = j.querySelector(".acc_num_box");
            let hiddenTxt = j.querySelector(".hidden_txt");
            if (e !== j) {
                hiddenTxt.style.display = "none";
                num.style.color = "#ffffff";
                img.style.transform = "rotate(0deg)";
                img.classList.remove("svg_green_color");
                accHeading.style.color = "#ffffff";

            }
        })

        if (txtDisply === "none") {
            hiddenTxt.style.display = "block";
            num.style.color = "#9EFF00";
            img.style.transform = "rotate(1800deg)";
            img.classList.add("svg_green_color");

            accHeading.style.color = "#9EFF00";

        } else {
            hiddenTxt.style.display = "none";
            num.style.color = "#ffffff";
            img.style.transform = "rotate(0deg)";
            img.classList.remove("svg_green_color");

            accHeading.style.color = "#ffffff";
        }
    })
})

