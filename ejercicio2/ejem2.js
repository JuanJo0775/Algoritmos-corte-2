// muestra las habitaciones 
const rooms = [100, 101, 102, 103, 201, 202, 203, 301, 302, 303];

// muestra el eltado de la habitaciones, si estan libres o reservadas
const roomStatus = Array(10).fill(false);

// muestra que habitaciones estan reservadas
const roomReservations = {};


// en esta funcion flecha se reservan las habitaciones 
const reserveRoom = (roomNumber, name) => {

  //esta busca cual de las habitaciones que se quiere reservar estan en la lista 
  const index = rooms.indexOf(roomNumber);

  // esta if verifica si la habitacion esta reservada, si no lo esta pide el nombre y la reserva añadiendola a la lista
  if (index !== -1 && roomStatus[index] === false) {
    roomStatus[index] = true;
    roomReservations[roomNumber] = name;
    alert(`La habitación ${roomNumber} ha sido reservada por ${name}.`);
  } else {
    alert(`La habitación ${roomNumber} ya está reservada.`);
  }
};


// esta funcion libera las habitaciones 
const freeRoom = (roomNumber) => {

  // esta busca la habitacion que esta reservada 
  const index = rooms.indexOf(roomNumber);

  // este if muestra que la habitacion fue liberada o si ya estaba liberada antes 
  if (index !== -1 && roomStatus[index] === true) {
    roomStatus[index] = false;
    delete roomReservations[roomNumber];
    alert(`La habitación ${roomNumber} ha sido liberada.`);
  } else {
    alert(`La habitación ${roomNumber} ya está libre.`);
  }
};


// esta funcion muestra la disponiblidad de las habitaciones 
const showAvailableRooms = () => {
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });

   // esta verificar si hay habitaciones disponibles y las muestra o si no hay habitaciones disponibles 
  if (availableRooms.length > 0) {
    alert(`Las habitaciones disponibles son: ${availableRooms.join(', ')}`);
  } else {
    alert('No hay habitaciones disponibles.');
  }
};


// esta funcion muestras la ocupacion de las habitaciones, (ejemplo: 7/10)
const showOccupancy = () => {

  // esta revisa cuales habitaciones estan disponibles 
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });

  // esta revisa cales habitaciones estan ocupadas
  const reservedRooms = rooms.filter((room, index) => {
    return roomStatus[index] === true;
  });
  alert(`Hay ${availableRooms.length} habitaciones disponibles y ${reservedRooms.length} habitaciones reservadas.`);
};

// esta funcion muestra el menu para que el usuario pueda interactuar
const handleUserInput = () => {
  let userInput;
  do {
    
    // muestra el menu de opciones y recibe la entrada del usuario
    userInput = prompt('Menú \n' + '1. Reservar una habitación '+ 
    ' 2. Liberar una habitación'+
    ' 3. Consultar ocupación' +
  ' 4. Salir');


    // esto revisa los casos dependiendo de la eleccion de los usuarios 
    switch (userInput) {
      case '1':
        // reserva las habitaciones y pide el nombre del ususario 
        const roomNumber = parseInt(prompt('Ingrese el número de la habitación:\n[100, 101, 102, 103, 201, 202, 203, 301, 302, 303]:'));
        if (!isNaN(roomNumber) && rooms.includes(roomNumber)) {
          const name = prompt('Ingrese su nombre:');
          reserveRoom(roomNumber, name);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '2':
        // libera las habitaciones 
        const roomNumberToFree = parseInt(prompt('Ingrese el número de la habitación que desea liberar:'));
        if (!isNaN(roomNumberToFree) && rooms.includes(roomNumberToFree)) {
          freeRoom(roomNumberToFree);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '3':
        // muestra las habitaciones desponibles y ocupadas
        showOccupancy();
        break;
      case '4':
        // muestra el mensaje de salida
        alert('Saliendo...');
        break;
      default:
        // muestra el mensaje de error
        alert('Opción inválida. Intente de nuevo.');
        break;
    }
  } while (userInput !== '4');
};

// Ejecutar la función para manejar la interacción con el usuario
handleUserInput();