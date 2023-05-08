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
  },
  {
    name: "Celine Pestana",
    position:"Lehrling MPA",
    photo: "images/midfrau.jpg",
    text: "Ich denke, dieser Ernährungsplan war eine gute Wahl für mich. Es hat mich auf den richtigen Weg gebracht und Fortschritte gemacht. Ich werde es auf jeden Fall weiterhin nutzen und empfehle es jedem, der nach einem einfachen und effektiven Ernährungsplan sucht."
  },
  {
    name: "Roberto Kreienbühl",
    position: "Lehrling Strassenbauer",
    photo: "images/robrerto.jpg",
    text: "Dank des großartigen Trainingsplans meines Fitness-Teams habe ich in 5 Monaten viele Fortschritte gemacht. Ich bin sehr zufrieden und kann es jedem empfehlen, der nach einem maßgeschneiderten und effektiven Plan sucht. Vielen Dank MDCoaching!"
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
