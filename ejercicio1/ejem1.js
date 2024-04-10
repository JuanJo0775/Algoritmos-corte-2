const denominations = [50000,20000,10000,5000, 2000, 1000];

function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar  ?");
  return parseFloat(userInput);
}

function calculateBilletsNeeded(amount) {
  return denominations.map(denomination => {
    const billetsNeeded = Math.floor(amount / denomination);
    amount -= billetsNeeded * denomination;
    return billetsNeeded;
  });
}


function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0;
}

function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount();

  if (!isValidWithdrawalAmount(withdrawalAmount)) {
    alert("El monto solicitado no es válido.");
    return;
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount);

  alert("Para retirar $" + withdrawalAmount + ", necesitas:");
  denominations.forEach((denomination, index) => {
    if (billetsNeeded[index] > 0) {
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}


ATMTransaction();