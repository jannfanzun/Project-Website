const form = document.querySelector("form[name='newsletter-form']");


form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form submission
  fetch(event.target.action, {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })

    .then((response) => {
      form.reset();
      

    })
    .catch((error) => {
       
    });
});






const contactform = document.querySelector("form[name='newsletter-form']");
const alertElement = document.querySelector("#response-message-box");
const success_message = document.getElementById("alert-message");

form.addEventListener("submit", (event) => {
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
      alertElement.classList.remove("hidden");
      alertElement.classList.remove("text-alert-red", "border-alert-red");
      alertElement.classList.add("text-alert-green", "border-alert-green");
      success_message.innerText = "Deine Nachricht wurde erfolgreich gesendet!";
      // reset the form
      contactform.reset();
    })
    .catch((error) => {
      alertElement.classList.remove("hidden");
      alertElement.classList.remove("text-alert-green", "border-alert-green");
      alertElement.classList.add("text-alert-red", "border-alert-red");
      success_message.innerText =
        "Hoppla, da ist etwas schiefgelaufen, bitte versuche es erneut.";
    });
});