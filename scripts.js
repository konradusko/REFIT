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
const btn_left = document.getElementById("button_left");
const btn_right = document.getElementById("button_right");


let numberOfSlide = 3;
let sliderTableElement = {
    el: {
        image_container: document.querySelectorAll(".img_container_img"),
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
            sliderTableElement.end(e);

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
        if (index < numberOfSlide ) {
            console.log('xd')
            for (let i = 0; i <= 2; i++) {
                this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.moveX + "px,0,0)");
            }
        }
        if (this.touchMovex > this.touchStartx && index === numberOfSlide ) {
            console.log(';lol')
            for (let i = 0; i <= 2; i++) {
                this.el.image_container[i].style.transform = ("translate", "translate3d(-" + this.moveX + "px,0,0)");
            }
        }
    },
    end: function (e) {
        body.style.overflowY = "scroll";
        let distance = Math.abs((index - 1) * this.image_container_width - this.moveX)
        if (distance > this.image_container_width / 3) {

            if (this.touchMovex < this.touchStartx && index > 1 && index < numberOfSlide ) {
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
console.log(index)
console.log(numberOfSlide)
    },
    end2: function (e) {
        galleryContainer.classList.remove("animatee");
        // number_of_image.innerHTML = index + "/" + (numberOfSlide + 1);
    },

}
sliderTableElement.init();
btn_right.addEventListener("click", e=>{
    if(index < numberOfSlide){
        console.log(sliderTableElement.image_container_width)
        console.log(index)
            for (let i = 0; i <= numberOfSlide-1; i++) {
                console.log('robi sie petla w prawo')
                sliderTableElement.el.image_container[i].style.transform = ("translate", "translate3d(-" + sliderTableElement.image_container_width*index + "px,0,0)");
            }
            index++;
    }
 
    
    })
    btn_left.addEventListener("click", e=>{
        if(index >= 1){
            index--;
            console.log(sliderTableElement.image_container_width)
                for (let i = 0; i <= numberOfSlide-1; i++) {
                    console.log("robi sie petla w lewo")
                    sliderTableElement.el.image_container[i].style.transform = ("translate", "translate3d(-" + sliderTableElement.image_container_width*index + "px,0,0)");
        
                }
        }
        
        })