
//  La Champions League es la competición de fútbol más importante en el mundo. Se juega cada año entre los
// mejores equipos de Europa y es organizada por la Unión de Asociaciones Europeas de Fútbol (UEFA). Los
// equipos compiten por la Copa de Europa y la gloria de ser el mejor equipo. Hacer un programa en JavaScript que
// cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Ingresar por el usuario el nombre del primer equipo
// b. Ingresar por el usuario el marcador del primer equipo.
// c. Ingresar por el usuario el nombre del segundo equipo
// d. Ingresar por el usuario el marcador del segundo equipo
// e. Hacer el ingreso para 3 fechas particulares de la Champions League.
// f. Mostrar Resultados de ranking de equipos.
var resultados = [];

function ingresarResultado() {
    var equipo1 = document.getElementById("equipo1").value;
    var marcador1 = document.getElementById("marcador1").value;
    var equipo2 = document.getElementById("equipo2").value;
    var marcador2 = document.getElementById("marcador2").value;

    var resultado = {
        equipo1: equipo1,
        marcador1: marcador1,
        equipo2: equipo2,
        marcador2: marcador2
    };

    resultados.push(resultado);

    document.getElementById("equipo1").value = "";
    document.getElementById("marcador1").value = "";
    document.getElementById("equipo2").value = "";
    document.getElementById("marcador2").value = "";

    mostrarResultados();
}

function mostrarResultados() {
    var resultadosElement = document.getElementById("resultados");
    resultadosElement.innerHTML = "";

    for (var i = 0; i < resultados.length; i++) {
        var resultado = resultados[i];
        var resultadoHTML = "<p>" + resultado.equipo1 + " " + resultado.marcador1 + " - " + resultado.marcador2 + " " + resultado.equipo2 + "</p>";
        resultadosElement.innerHTML += resultadoHTML;
    }
}