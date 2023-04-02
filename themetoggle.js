function updateTheme(theme) {
    document.body.className = theme;
    const infotexts = document.querySelectorAll("#info-text");
    infotexts.forEach((infotext) => {
      if (theme === "light") {
        infotext.classList.remove("blackmode-text");
      } else if (theme === "dark") {
        infotext.classList.add("blackmode-text");
      }
    });
  
    const topOffers = document.querySelectorAll("#top-angebote");
    topOffers.forEach((offer) => {
      if (theme === "light") {
        offer.classList.remove("blackmode-text");
      } else if (theme === "dark") {
        offer.classList.add("blackmode-text");
      }
    });
  }
  
  const moonIcon = document.getElementById("icon");
  
  if (localStorage.getItem("theme")) {
    const theme = localStorage.getItem("theme");
    updateTheme(theme);
    if (theme === "light") {
      moonIcon.src = "images/moon.png";
    } else if (theme === "dark") {
      moonIcon.src = "images/sun.png";
    }
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
  