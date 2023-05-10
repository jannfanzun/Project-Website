const theme = localStorage.getItem("theme");

function updateTheme(theme) {
  document.body.className = theme;
  const changeColors = document.querySelectorAll('.change-color');
  changeColors.forEach((changeColor) => {
    if (theme === 'light') {
      changeColor.classList.remove('blackmode-text');
    } else if (theme === 'dark') {
      changeColor.classList.add('blackmode-text');
    }
  });
}


 
  const moonIcon = document.getElementById("icon");
  if (theme) {
    updateTheme(theme);
    if (theme === "light") {
      moonIcon.src = "images/moon.png";
    } else if (theme === "dark") {
      moonIcon.src = "images/sun.png";
  
    }

 
}else{
  theme = "light"
}
  
  
  moonIcon.addEventListener("click", function () {
    const theme = localStorage.getItem("theme");
  
    if (theme === "dark") {
      moonIcon.src = "images/moon.png";
      localStorage.setItem("theme", "light");
      updateTheme("light");
      
    } else {
      moonIcon.src = "images/sun.png";
      localStorage.setItem("theme", "dark");
      updateTheme("dark");

    }
  });
  