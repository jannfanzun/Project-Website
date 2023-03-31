const moonIcon = document.getElementById("icon-moon");
const moonImg = moonIcon.querySelector("moon.png");

moonIcon.addEventListener("click", function() {
  moonIcon.src = "images/sun.png";
});
