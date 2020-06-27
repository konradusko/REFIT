const menu = document.getElementById("hamburger");

menu.addEventListener("click", function () {
    if (menu.className === "hamburger active") {
        menu.classList.remove("active");
        // menuMobile.classList.remove("Menu-main-mobile-active");
    } else {
        menu.className = "hamburger active";
        // menuMobile.classList.add("Menu-main-mobile-active");
    }
})
//slider
let index = 1;
const galleryContainer = document.getElementById("gallery-container");
const body = document.getElementById("body");


let numberOfSlide = 7;
let sliderTableElement = {
    el: {
        image_container: document.querySelectorAll(".img_container_img"),
        btn_right: document.getElementById("button_right"),
        btn_left: document.getElementById("button_left"),
        dots: document.querySelectorAll(".dots_container_DOT"),
        current_dot: 0

    },
    image_container_width: document.querySelector(".img_container_img").offsetWidth,
    touchStartx: undefined,
    touchMovex: undefined,
    moveX: undefined,
    init: function () {
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
            this.image_container_width = document.querySelector(".img_container_img").offsetWidth;
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
                    this.el.image_container[i].style.transform = ("translate", "translate3d(-" + (this.image_container_width * (index - 1)) + "px,0,0)");
                }
            }
        })
        for (let j = 0; j < this.el.dots.length; j++) {
            this.el.dots[j].addEventListener("click", e => {
                if (j != this.el.current_dot) {
                    this.el.current_dot = j;
                    index = this.el.current_dot + 1;
                    for (let i = 0; i <= numberOfSlide - 1; i++) {
                        this.el.image_container[i].style.transform = ("translate", "translate3d(-" + (this.image_container_width * (index - 1)) + "px,0,0)");
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
                    this.el.image_container[i].style.transform = ("translate", "translate3d(-" + (this.image_container_width * index) + "px,0,0)");
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
                    this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.image_container_width * (index - 2) + "px,0,0)");
                }
                index--;
            }
        } else {
            for (let i = 0; i <= numberOfSlide - 1; i++) {
                this.el.image_container[i].style.transform = ("translate", "translate3d(-" + (index - 1) * this.image_container_width + "px,0,0)");
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