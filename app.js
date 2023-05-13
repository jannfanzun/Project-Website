const form = document.querySelector("form[name='contact-form']");
const alertElement = document.querySelector("#alertContainer");
const success_message = document.getElementById("alertMessage");

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
      success_message.classList.remove("hidden");
      success_message.innerText = "Deine Nachricht wurde erfolgreich gesendet!";
      // reset the form
      form.reset();
    })
    .catch((error) => {
      alertElement.classList.remove("hidden");
      success_message.innerText =
        "Hoppla, da ist etwas schiefgelaufen, bitte versuche es erneut.";
    });
});
onsubmit="clear_form()"