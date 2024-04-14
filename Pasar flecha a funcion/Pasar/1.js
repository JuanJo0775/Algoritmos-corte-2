
function calcularfactorial (num) {
    if (num<0){
    return "El número debe ser positivo";

    }else if (num === 0) {
    return 1;

    } else {
        let result = 1;
    for (let i = 1; i <= num; i++){
    result*= i;
    }
    return result;
    }
    }
    console.log(calcularfactorial(num = 7))