const form = document.querySelector("form[name='newsletter-form']");
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
      console.log(response);
      // show success message
      alertElement.classList.remove("hidden");
      success_message.classList.remove("hidden");
      success_message.innerText = "Deine Nachricht wurde erfolgreich gesendet!";
      // reset the form
      form.reset();
    })
    .catch((error) => {
      console.log(error);
      alertElement.classList.remove("hidden");
      success_message.innerText =
        "Hoppla, da ist etwas schiefgelaufen, bitte versuche es erneut.";
    });
});
onsubmit="clear_form()"