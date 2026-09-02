function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    // Distance charge
    if (distance > 2) {
        fare = fare + (distance - 2) * 15;
    }

    // Waiting charge
    fare = fare + waitingMinutes * 2;

    // Night charge
    if (isNight) {
        fare = fare * 1.20;
    }

    return fare;
}

console.log(getCngFare(2));              
console.log(getCngFare(1));              
console.log(getCngFare(5));              
console.log(getCngFare(10));             
console.log(getCngFare(5, false, 10));   
console.log(getCngFare(5, true));         
console.log(getCngFare(5, true, 10));     