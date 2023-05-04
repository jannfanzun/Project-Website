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
      alert("Success");

    })
    .catch((error) => {
        alert("Failed");
    });
});