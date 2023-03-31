const moonIcon = document.getElementById("icon");
const moonImg = moonIcon.querySelector("moon.png");

moonIcon.addEventListener("click", function() {

    if (moonIcon.src.includes("images/moon.png")) {
        moonIcon.src = "images/sun.png";
    }else {
        moonIcon.src = "images/moon.png";
    }
});
