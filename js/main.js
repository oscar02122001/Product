const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");

burger.addEventListener("click", function () {
    burger.classList.toggle("active")
    if (!nav.classList.contains("active")) {
        nav.classList.add("active");
    } else if (!nav.classList.contains("closed")) {
        nav.classList.add("closed")
    }
})

nav.addEventListener("animationend", function (evt) {
    if (evt.animationName === "wrap-closed") {
        nav.classList.remove("active")
        nav.classList.remove("closed")
    }


})