const denominations = [50000,20000,10000,5000, 2000, 1000];

// esta funcion solicita la cantidad de dinero qeu se quiere retirar
function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar  ?");
  return parseFloat(userInput);
}

// esta funcion calcula la cantidad de billetes que se necesitan para cubrir el monto que se quiere retirar
function calculateBilletsNeeded(amount) {
  return denominations.map(denomination => {
    const billetsNeeded = Math.floor(amount / denomination);
    amount -= billetsNeeded * denomination;
    return billetsNeeded;
  });
}


// esta funcion verifica si el monto solicitado es valido, que sea mayor de cero y un numero entero
function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0;
}

// esta funcion nos muestra si el monto es valido o no
// en caso que el monto sea valido  se le muestra al usuario de que billetes se retiraron para llegar a cubrir su monto
function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount();

  if (!isValidWithdrawalAmount(withdrawalAmount)) {
    alert("El monto solicitado no es válido.");
    return;
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount);

  alert("Para retirar $" + withdrawalAmount + ", necesitas:");

  // se muestan los billetes de la denominacion necesaria 
  denominations.forEach((denomination, index) => {
    if (billetsNeeded[index] > 0) {
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}


ATMTransaction();