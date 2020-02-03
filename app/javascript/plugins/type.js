function type() {
  var options = {
    strings: ["Je suis <br> Développeur Web Fullstack <br> en Freelance.", "N'hésitez pas à me contacter <br> pour plus de renseignements <br> conseils ou autre."],
    typeSpeed: 70,
    startDelay: 1000,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    eraseAtOnce: true,
    loopCount: Infinity
  };

  var typed = new Typed('.typed', options);

}


export { type };
