function esPrimo (num) {
    if (num<2){
        return false;
    }
    if(num === 2){
        return false
    }
    if(num % 2 === 0){
        return false
    }
    const limite = Math.srt(num); 
    for (let i = 3; i < limite; i+-2) {
        if(num % i === 0){
            return false
        }
    } 
    return true
}
