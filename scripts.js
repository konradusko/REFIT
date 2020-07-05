const menu = document.getElementById("hamburger");
const menu_mobile = document.getElementById("container_for_buttons");
const galleryContainer = document.getElementById("gallery-container");
const body = document.getElementById("body");
const mobileViewport = window.matchMedia("screen and (max-width: 900px)");
const body_container = document.getElementById("body_container");
const loading_container = document.getElementById("loading_container");
const txtEmail = document.getElementById("txtEmail");
const txtTitle = document.getElementById("Title");
const txtmessage = document.getElementById("message");
const submit_button = document.getElementById("submit_button");
//////////////
const uslug_button = document.getElementById("uslugi");
const realizacja_button = document.getElementById("realizacja");
// const wycena_button = document.getElementById("wycena");
const o_nas_button = document.getElementById("o_nas");
const kontak_button = document.getElementById("kontakt");
const aleria_button = document.getElementById("galeria");
const arrow_top = document.getElementById("arrow_top");
// ??/////
const logo_nav_button = document.getElementById("logo_nav_button");
const nasze_uslugi_kontakt_button = document.getElementById("nasze_uslugi_kontakt_button");
const Kontakt_nasze_uslugi_to_nie_koniec = document.getElementById("Kontakt_nasze_uslugi_to_nie_koniec");
// const wycena_kontakt_button = document.getElementById("wycena_kontakt_button");
let allMenuButons = [uslug_button, realizacja_button, o_nas_button, kontak_button, aleria_button]
// ?????
const nav_container = document.getElementById("nav_container_id");
const header = document.getElementById("header");
const naszeUslug = document.getElementById("Nasz_uslugi_section");
const realizacja = document.getElementById("ralizacja_section");
// const wycena = document.getElementById("Wycena_section");
const O_nas_section = document.getElementById("O_nas_section");
const kontakt_section = document.getElementById("kontakt_section");
const footer = document.getElementById("footer");
let nav_height = nav_container.offsetHeight * 2;

/////////////////
arrow_top.addEventListener("click", e => {
    header.scrollIntoView({
        behavior: 'smooth',
        block: "start",
    });
})
logo_nav_button.addEventListener("click", e => {
    header.scrollIntoView({
        behavior: 'smooth',
        block: "start",
    });
})
uslug_button.addEventListener("click", e => {
    naszeUslug.scrollIntoView({
        behavior: 'smooth',
        block: "start",
    });
})
realizacja_button.addEventListener("click", e => {
    realizacja.scrollIntoView({
        behavior: 'smooth',
        block: "start",
    });
})
// wycena_button.addEventListener("click", e => {
//     wycena.scrollIntoView({
//         behavior: 'smooth',
//         block: "start",
//     });
// })
o_nas_button.addEventListener("click", e => {
    O_nas_section.scrollIntoView({
        behavior: 'smooth',
        block: "start",
    });
})
kontak_button.addEventListener("click", e => {
    kontakt_section.scrollIntoView({
        behavior: 'smooth',
        block: "start",
    });
})
nasze_uslugi_kontakt_button.addEventListener("click", e => {
    kontakt_section.scrollIntoView({
        behavior: 'smooth',
        block: "start",
    });
})
Kontakt_nasze_uslugi_to_nie_koniec.addEventListener("click", e => {
    kontakt_section.scrollIntoView({
        behavior: 'smooth',
        block: "start",
    });
})
// wycena_kontakt_button.addEventListener("click", e => {
//     kontakt_section.scrollIntoView({
//         behavior: 'smooth',
//         block: "start",
//     });
// })


function removeActiveMenu() {
    allMenuButons.forEach(element => {
        element.classList.remove('nav-active')
    });
}
menu.addEventListener("click", function () {
    if (menu.className === "hamburger active") {
        menu.classList.remove("active");
        menu_mobile.style.transform = ("translate", "translate3d(" + 300 + "px,0,0)");
    } else {
        menu.className = "hamburger active";
        menu_mobile.style.transform = ("translate", "translate3d(-" + 0 + "px,0,0)");

    }
})
window.addEventListener("click", function (event) {
    if (event.target.id != "hamburger" && event.target.className != "spanek" && menu.className == "hamburger active") {
        if (mobileViewport.matches) {
            menu.classList.remove("active");
            menu_mobile.style.transform = ("translate", "translate3d(" + 300 + "px,0,0)");
        }


    }
})
//slider
let index = 1;
let numberOfSlide = 5;
let sliderTableElement = {
    el: {
        image_container: document.querySelectorAll(".img_container_img"),
        btn_right: document.getElementById("button_right"),
        btn_left: document.getElementById("button_left"),
        dots: document.querySelectorAll(".dots_container_DOT"),
        current_dot: 0

    },
    // image_container_width: document.querySelector(".img_container_img").offsetWidth,
    image_container_width: document.querySelector(".img_container_img").getBoundingClientRect().width,
    touchStartx: undefined,
    touchMovex: undefined,
    moveX: undefined,
    init: function () {
        console.log(this.image_container_width)

        this.bindEvents();
        this.el.dots[this.el.current_dot].style.opacity = 1;
        this.arrow();
    },
    arrow: function () {
        if (index == 1) {
            this.el.btn_left.style.display = "none";
            this.el.btn_right.style.display = "block";
        } else if (index == numberOfSlide) {
            this.el.btn_right.style.display = "none";
            this.el.btn_left.style.display = "block";
        } else {
            this.el.btn_right.style.display = "block";
            this.el.btn_left.style.display = "block";
        }
    },
    bindEvents: function (e) {

        galleryContainer.addEventListener("touchstart", (e) => {
            sliderTableElement.start(e);
        });
        galleryContainer.addEventListener("touchmove", (e) => {
            sliderTableElement.move(e);
        });
        galleryContainer.addEventListener("touchend", (e) => {
            sliderTableElement.end(e, "none");

        });
        this.el.btn_right.addEventListener("click", e => {
            sliderTableElement.end(e, "right")
        });
        this.el.btn_left.addEventListener("click", e => {
            sliderTableElement.end(e, "left")
        });
        window.addEventListener("resize", e => {
            this.image_container_width = document.querySelector(".img_container_img").getBoundingClientRect().width;
            if (index == 1) {
                for (let i = 0; i <= numberOfSlide - 1; i++) {
                    this.el.image_container[i].style.transform = ("translate", "translate3d(-" + 0 + "px,0,0)");
                }
            } else if (index == 2) {
                for (let i = 0; i <= numberOfSlide - 1; i++) {
                    this.el.image_container[i].style.transform = ("translate", "translate3d(-" + (this.image_container_width) + "px,0,0)");
                }
            } else if (index > 2) {
                for (let i = 0; i <= numberOfSlide - 1; i++) {
                    this.el.image_container[i].style.transform = ("translate", "translate3d(-" + Math.round((this.image_container_width * (index - 1))) + "px,0,0)");
                }
            }
            if (mobileViewport) {
                if (mobileViewport.matches) {
                    menu.classList.remove("active");
                    menu_mobile.style.transform = ("translate", "translate3d(" + 300 + "px,0,0)");
                } else {
                    menu.className = "hamburger active";
                    menu_mobile.style.transform = ("translate", "translate3d(-" + 0 + "px,0,0)");
                }

            }
        })
        for (let j = 0; j < this.el.dots.length; j++) {
            this.el.dots[j].addEventListener("click", e => {
                if (j != this.el.current_dot) {
                    this.el.current_dot = j;
                    index = this.el.current_dot + 1;
                    for (let i = 0; i <= numberOfSlide - 1; i++) {
                        this.el.image_container[i].style.transform = ("translate", "translate3d(-" + Math.round((this.image_container_width * (index - 1))) + "px,0,0)");
                    }
                    this.dots();
                    this.arrow();
                }
            })
        }
    },
    dots: function () {
        for (let i = 0; i < this.el.dots.length; i++) {
            this.el.dots[i].style.opacity = .5;
        }
        this.el.dots[this.el.current_dot].style.opacity = 1;
    },
    start: function (e) {
        this.touchStartx = e.targetTouches[0].pageX;
    },
    move: function (e) {
        this.touchMovex = e.targetTouches[0].pageX;
        this.moveX = (index - 1) * this.image_container_width + (this.touchStartx - this.touchMovex);
        galleryContainer.classList.add("animatee");
        if (index < numberOfSlide) {
            for (let i = 0; i <= numberOfSlide - 1; i++) {
                this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.moveX + "px,0,0)");
            }
        }
        if (this.touchMovex > this.touchStartx && index === numberOfSlide) {
            for (let i = 0; i <= numberOfSlide - 1; i++) {
                this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.moveX + "px,0,0)");
            }
        }
    },
    end: function (e, T) {
        let distance;
        if (T == "right") {
            distance = this.image_container_width;
            this.touchMovex = 10
            this.touchStartx = 20
        } else if (T == "left") {
            distance = this.image_container_width;
            this.touchMovex = 20
            this.touchStartx = 10
        } else {
            distance = Math.abs((index - 1) * this.image_container_width - this.moveX)

        }

        if (distance > this.image_container_width / 3) {
            console.log(this.touchMovex < this.touchStartx)
            if (this.touchMovex < this.touchStartx && index > 1 && index < numberOfSlide) {
                for (let i = 0; i <= numberOfSlide - 1; i++) {
                    this.el.image_container[i].style.transform = ("translate", "translate3d(-" + Math.round((this.image_container_width * index)) + "px,0,0)");
                }
                index++;
            } else if (this.touchMovex < this.touchStartx && index === 1) {
                for (let i = 0; i <= numberOfSlide - 1; i++) {
                    this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.image_container_width + "px,0,0)");
                }
                index++;
            }
            if (this.touchMovex > this.touchStartx && index > 1) {
                for (let i = 0; i <= numberOfSlide - 1; i++) {
                    this.el.image_container[i].style.transform = ("translate", "translate3d(-" + Math.round(this.image_container_width * (index - 2)) + "px,0,0)");
                }
                index--;
            }
        } else {
            for (let i = 0; i <= numberOfSlide - 1; i++) {
                this.el.image_container[i].style.transform = ("translate", "translate3d(-" + Math.round((index - 1) * this.image_container_width) + "px,0,0)");
            }
        }
        sliderTableElement.end2();
    },
    end2: function (e) {
        galleryContainer.classList.remove("animatee");
        this.el.current_dot = index - 1;
        this.dots();
        this.arrow();
    },

}
sliderTableElement.init();
window.addEventListener("scroll", e => {
    if (document.documentElement.scrollTop > header.offsetHeight -nav_container.offsetHeight*2 + naszeUslug.offsetHeight + realizacja.offsetHeight  + O_nas_section.offsetHeight) {
        removeActiveMenu();
        arrow_top.style.display = "flex";
        kontak_button.classList.add("nav-active")
    } else if (document.documentElement.scrollTop > header.offsetHeight -nav_container.offsetHeight*2 + naszeUslug.offsetHeight + realizacja.offsetHeight ) {
        removeActiveMenu();
        arrow_top.style.display = "flex";
        o_nas_button.classList.add("nav-active")
    } else  if (document.documentElement.scrollTop > header.offsetHeight - nav_container.offsetHeight*2 + naszeUslug.offsetHeight) {
        removeActiveMenu();
        arrow_top.style.display = "flex";
        realizacja_button.classList.add("nav-active")
    } else if (document.documentElement.scrollTop > header.offsetHeight - nav_container.offsetHeight*2) {
        removeActiveMenu();
        arrow_top.style.display = "flex";
        uslug_button.classList.add("nav-active")
    } else {
        removeActiveMenu();
        arrow_top.style.display = "none";
    }
})

window.addEventListener("load", e => {
    loading_container.style.display = "none";
    body.classList.remove("loading_page");
    nav_container.style.display = "flex";
    header.style.display = "flex";
    naszeUslug.style.display = "flex";
    realizacja.style.display = "flex";
    // wycena.style.display = "flex";
    O_nas_section.style.display = "flex";
    kontakt_section.style.display = "flex";
    footer.style.display = "flex";
    sliderTableElement.image_container_width = document.querySelector(".img_container_img").getBoundingClientRect().width;

})

window.addEventListener("keyup" , e=>{
    if(txtEmail.value.length > 1 && txtTitle.value.length >1 && txtmessage.value.length >1){
        submit_button.style.opacity = 1;
        submit_button.style.cursor = "pointer";
        submit_button.disabled= false;
    }else{
        submit_button.style.opacity = .5;
        submit_button.style.cursor = "no-drop";
        submit_button.disabled= true;
    }
})