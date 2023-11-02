const logoIcon = document.getElementById("mdc-logo");

if (localStorage.getItem("theme")) {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      logoIcon.src = "images/mdclogostandard.svg";
    } else if (theme === "dark") {
      logoIcon.src = "images/mdclogodarkmode.svg";
    }
  }
  
  moonIcon.addEventListener("click", function () {
    const theme = localStorage.getItem("theme");
  
    if (theme === "dark") {
      
      logoIcon.src = "images/mdclogodarkmode.svg";
    } else {
        logoIcon.src = "images/mdclogostandard.svg";
    }
  });   