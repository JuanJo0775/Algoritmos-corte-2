function calcularMCD(a, b) {
    
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      return "Ambos números deben ser enteros.";
    }
  
    a = Math.abs(a);
    b = Math.abs(b);
  
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
  
    return a;
  }

  console.log(calcularMCD(24, 18)); // Output: 6