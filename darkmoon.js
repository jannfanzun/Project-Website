const moonicon = document.getElementById("icon");

icon.addEventListener("click", function() {
  if (icon.src.endsWith("dark-moon.png")) {
    icon.src = "white-moon.png";
  } else {
    icon.src = "dark-moon.png";
  }
});
