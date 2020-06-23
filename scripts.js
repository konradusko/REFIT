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



let numberOfSlide = 3;
let sliderTableElement = {
    el: {
        image_container: document.querySelectorAll(".img_container_img"),
        btn_right: document.getElementById("button_right"),
        btn_left: document.getElementById("button_left")

    },
    image_container_width: document.querySelector(".img_container_img").offsetWidth,
    touchStartx: undefined,
    touchMovex: undefined,
    moveX: undefined,
    init: function () {
        this.bindEvents();
        console.log(this.el.image_container)
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


    },
    start: function (e) {
        this.touchStartx = e.targetTouches[0].pageX;
    },
    move: function (e) {
        body.style.overflowY = "hidden";
        this.touchMovex = e.targetTouches[0].pageX;
        this.moveX = (index - 1) * this.image_container_width + (this.touchStartx - this.touchMovex);
        galleryContainer.classList.add("animatee");
        if (index < numberOfSlide) {
            console.log('xd')
            for (let i = 0; i <= 2; i++) {
                this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.moveX + "px,0,0)");
            }
        }
        if (this.touchMovex > this.touchStartx && index === numberOfSlide) {
            console.log(';lol')
            for (let i = 0; i <= 2; i++) {
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

        body.style.overflowY = "scroll";
        if (distance > this.image_container_width / 3) {
            console.log(this.touchMovex < this.touchStartx)
            if (this.touchMovex < this.touchStartx && index > 1 && index < numberOfSlide) {
                for (let i = 0; i <= 2; i++) {
                    this.el.image_container[i].style.transform = ("translate", "translate3d(-" + (this.image_container_width * index) + "px,0,0)");
                }
                index++;
            } else if (this.touchMovex < this.touchStartx && index === 1) {
                for (let i = 0; i <= 2; i++) {
                    this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.image_container_width + "px,0,0)");
                }
                index++;
            }
            if (this.touchMovex > this.touchStartx && index > 1) {
                for (let i = 0; i <= 2; i++) {
                    this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.image_container_width * (index - 2) + "px,0,0)");
                }
                index--;
            }
        } else {
            for (let i = 0; i <= 2; i++) {
                this.el.image_container[i].style.transform = ("translate", "translate3d(-" + (index - 1) * this.image_container_width + "px,0,0)");
            }
        }
        sliderTableElement.end2();
    },
    end2: function (e) {
        galleryContainer.classList.remove("animatee");
    },

}
sliderTableElement.init();
