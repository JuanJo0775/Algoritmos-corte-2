
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);


function verDisponibilidad() {
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

function reservarAsiento() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  if (sala === "1" && !sala1[asiento]) {
    sala1[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
  } else if (sala === "2" && !sala2[asiento]) {
    sala2[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
}


function verPelicula() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento);

  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("Disfrutad de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}


function verBalance(){
  const valorBoleta = 1;
  const userInput = parseInt(prompt(`Seleccione 1. Dinero recaudado en las salas por individual 2. Dinero recaudado en las salas de forma general`));

  if(userInput === 1){
    const salaEleccion = prompt("Ingresa el número de la sala (1 o 2)");
    const sala = salaEleccion === "1" ? sala1.filter(asiento => !asiento).length : sala2.filter(asiento => !asiento).length;
    const precio = 10 - sala
    const costo = precio * valorBoleta;

    alert(`Se recaudó $${costo} en la sala ${salaEleccion}`);
   
  } else if(userInput === 2) {
    const s1sala = sala1.filter(asiento => !asiento).length
    const s2sala = sala2.filter(asiento => !asiento).length

    const precio1 = 10 - s1sala
    const precio2 = 10 - s2sala

    const precioTotal = precio1 + precio2
    const costoTotal = valorBoleta * precioTotal

    alert(`Se recaudó $${costoTotal} en las dos salas`);
  } else {
    alert("Opción no válida. Por favor, seleccione 1 o 2.");
  }
}


while (true) {
  console.log("hola")
  const opcion = prompt("Ingresa tu opción:Bienvenido a la sala de cine"+ " \nSelecciona una opción:" +"1. Ver disponibilidad de asientos"+ 
  " 2. Reservar asiento"+ " 3. Ver ocupación sala" + " 4. Dinero Recaudado" + " 5. Salir" );

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      verBalance();
      break;
    case "5":
      alert("¡Hasta luego!");
        break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}