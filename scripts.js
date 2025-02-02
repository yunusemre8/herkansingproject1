function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.addEventListener("click", function(event) {
    let menu = document.getElementById("menu");
    let menuIcon = document.querySelector(".menu-icon");

    if (getComputedStyle(menu).display === "block" && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.style.display = "none";
        document.body.classList.remove("active-menu");
    }
});