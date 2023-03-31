const moonIcon = document.getElementById("icon");
const moonImg = moonIcon.querySelector("moon.png");

if (localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme')
    document.body.className = theme;
    
    if (theme == "light") {
        moonIcon.src = "images/moon.png";
    } else {
        moonIcon.src = "images/sun.png";
    }
}

moonIcon.addEventListener("click", function() {

    const theme = localStorage.getItem('theme')

    if (theme === "dark") {
        moonIcon.src = "images/moon.png";
        localStorage.setItem('theme', 'light');
        document.body.className = "light";

    }else {
        moonIcon.src = "images/sun.png";
        localStorage.setItem('theme', 'dark');
        document.body.className = "dark";
    }
});
