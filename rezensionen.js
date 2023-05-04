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
    "Seitdem ich mich MDC angeschlossen habe, konnte ich eine kontinuierliche Zunahme meiner Muskelmasse feststellen. Ich bin erstaunt darüber, wie reibungslos das gesamte Trainingsprogramm abläuft und wie gut alles organisiert ist. Ich bereue es keineswegs, mich für MDC entschieden zu haben und bin dankbar für die Unterstützung auf meinem Fitnessweg."
  },
  {
    name: "Fabio Murari",
    position: "Mitarbeiter EKS",
    photo: "images/murari.jpg",
    text: "Ich bin beeindruckt von der Wirksamkeit des Trainings- und Ernährungsplans, den das Team bereitgestellt hat. Ich hatte anfangs meine Zweifel, aber nachdem ich ihn ausprobiert habe, kann ich sagen, dass es wirklich so einfach funktioniert. Die Professionalität und das Fachwissen des Teams haben mir sehr geholfen. Der Trainingsplan war gut strukturiert und effektiv, während der Ernährungsplan mir geholfen hat, meine Ziele zu erreichen und gleichzeitig meine Gesundheit zu verbessern. Ich kann diesen Service nur wärmstens empfehlen, da es sich wirklich lohnt, Zeit und Energie in die eigene Gesundheit und Fitness zu investieren."
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
