let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: brown ;">Estudiante de Ingeniería Ambiental con pasión por la Calidad del Agua y uso de tecnologías innovadoras. Enfocada en integrar Ciencia de Datos y Diseño Web para desarrollar soluciones sostenibles y creativas. </span>')
  .pauseFor(200)
  .deleteChars(5)
  .start();
