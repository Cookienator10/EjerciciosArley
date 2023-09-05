// El concesionario de carros “VenXtucarro” es un lugar donde los compradores pueden comprar un carro nuevo o
// usado. Estos establecimientos generalmente están asociados con una marca de automóviles específica y tienen
// un inventario de vehículos nuevos. Hacer un programa en JavaScript que cumpla los siguientes requisitos o
// características (programa básico-simulación):
// a. El usuario debe ingresar una marca de carros entre Chevrolet-Mazda y Renault.
// b. Dependiendo de la marca, se seleccionará una de dos referencias por marca ejemplo: captiva -traker
// c. El sistema le mostrara toda la información de cada una de las referencias en particular.
const mostrarInformacion = () => {
  const marca = document.getElementById("marca").value;
  const referencia = document.getElementById("referencia").value;

  const informacion = {
    chevrolet: {
      captiva: "La Chevrolet Captiva es un SUV de tamaño mediano con un diseño elegante y amplio espacio interior.",
      tracker: "La Chevrolet Tracker es un SUV compacto con un diseño moderno y tecnología avanzada."
    },
    mazda: {
      cx5: "El Mazda CX-5 es un SUV de alta gama con un diseño sofisticado y un rendimiento excepcional.",
      mazda3: "El Mazda3 es un sedán compacto con un diseño deportivo y características de lujo."
    },
    renault: {
      sandero: "El Renault Sandero es un hatchback económico con un diseño versátil y un buen rendimiento en ciudad.",
      duster: "La Renault Duster es una SUV compacta con un diseño robusto y capacidad off-road."
    }
  };

  const info = informacion[marca][referencia];

  const informacionDiv = document.getElementById("informacion");
  informacionDiv.innerHTML = `<p>${info}</p>`;
};
