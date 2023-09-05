// Un examen de conocimientos es una prueba diseñada para evaluar el conocimiento y comprensión de un tema
// o disciplina específica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
// (programa básico-simulación):
// a. Se debe presentar 5 preguntas (sea de selección múltiple o verdadero-falso).
// b. Cada pregunta debe ser evaluada si fue correcta o no su respuesta.
// c. Si la opción es correcta se suma 10 puntos por cada pregunta.
// d. Se debe mostrar los resultados del examen
examenForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const respuestas = {
    pregunta1: document.querySelector('input[name="pregunta1"]:checked').value,
    pregunta2: document.querySelector('input[name="pregunta2"]:checked').value,
    pregunta3: document.querySelector('input[name="pregunta3"]:checked').value,
    pregunta4: document.querySelector('input[name="pregunta4"]:checked').value,
    pregunta5: document.querySelector('input[name="pregunta5"]:checked').value
  };

  let puntaje = 0;
  if (respuestas.pregunta1 === "falso") {
    puntaje += 10;
  }
  if (respuestas.pregunta2 === "verdadero") {
    puntaje += 10;
  }
  if (respuestas.pregunta3 === "verdadero") {
    puntaje += 10;
  }
  if (respuestas.pregunta4 === "falso") {
    puntaje += 10;
  }
  if (respuestas.pregunta5 === "verdadero") {
    puntaje += 10;
  }
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "Tu puntaje es: " + puntaje + "/50";
});