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