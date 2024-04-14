function invertirCadena(str) {

    if (str.length === 0) {
      return "La cadena está vacía.";
    }
  
    return str.split('').reverse().join('');
  }
  
  console.log(invertirCadena("Hola"));