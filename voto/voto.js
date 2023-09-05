// Un sistema de voto electrónico es una aplicación informática diseñada para permitir a los votantes emitir sus
// votos de forma electrónica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o
// características (programa básico-simulación):
// a. La cantidad de votantes son 10 personas
// b. Hay dos opciones de votos: 1. Ana Maria Suarez 2. Diego Acero
// c. El sistema debe ir sumando los votos de cada candidato.
// d. El sistema debe arrojar el ganador y perdedor de la votación

let votosCandidato1 = 0;
let votosCandidato2 = 0;

const registrarVotante = () => {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);

  if (edad >= 18) {
    alert("Votante registrado exitosamente.");
  } else {
    alert("El votante debe ser mayor de 18 años.");
  }
};

const votar = () => {
  const candidato = document.getElementById("candidato").value;

  if (candidato === "1") {
    votosCandidato1++;
  } else if (candidato === "2") {
    votosCandidato2++;
  }

  alert("Voto registrado exitosamente.");
  mostrarResultados();
};

const mostrarResultados = () => {
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `
    <p>Ana Maria Suarez: ${votosCandidato1} votos</p>
    <p>Diego Acero: ${votosCandidato2} votos</p>
  `}