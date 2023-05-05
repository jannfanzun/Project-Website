const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Elias Brasser",
    position: "Co-Founder Solunion.app",
    photo:
      "images/eliasbrasser.jpeg",
    text:
    "Bei MDC habe ich kontinuierliche Muskelzunahme erlebt. Das Trainingsprogramm ist reibungslos und gut organisiert. Ich bereue meine Entscheidung für MDC nicht und bin dankbar für die Unterstützung auf meinem Fitnessweg."
  },
  {
    name: "Fabio Murari",
    position: "Mitarbeiter EKS",
    photo: "images/murari.jpg",
    text: "Der Trainings- und Ernährungsplan hat funktioniert und meine Gesundheit verbessert. Das professionelle Team und die effektiven Pläne halfen mir, meine Ziele zu erreichen. Ich empfehle diesen Service sehr."
  }

];

let index = 1;

const updateTestimonial = () => {
  const { name, position, photo, text } = testimonials[index];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  index++;
  if (index > testimonials.length - 1) index = 0;
};

setInterval(updateTestimonial, 10000);
