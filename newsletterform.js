// Newsletter
const newsletterform = document.querySelector("form[name='newsletter-form']");
const newsletterAlertElement = document.querySelector("#response-message-box");
const newsletterSuccessMessage = document.getElementById("alert-message");

newsletterform.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form submission
  fetch(event.target.action, {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      // show success message
      newsletterAlertElement.classList.remove("hidden");
      newsletterSuccessMessage.classList.remove("hidden");
      newsletterSuccessMessage.innerText = "Deine Nachricht wurde erfolgreich gesendet!";
      // reset the form
      newsletterform.reset();
    })
    .catch((error) => {
      newsletterAlertElement.classList.remove("hidden");
      newsletterSuccessMessage.innerText =
        "Hoppla, da ist etwas schiefgelaufen, bitte versuche es erneut.";
    });
});