// Code your solution in this file! 
function distanceFromHqInBlocks(distance) {
    const hq = 42;
    return Math.abs(distance - hq);
}

console.log(distanceFromHqInBlocks(50))

function distanceFromHqInFeet(distance) {
    const blocks = distanceFromHqInBlocks(distance),
    feetPerblock = 264;

    return blocks * feetPerblock;
    
  }

  console.log(distanceFromHqInFeet(50))

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const blocks = Math.abs(destination - start),
    feetPerblock = 264,
    distanceFeet = blocks * feetPerblock;

    return distanceFeet;
  }

  console.log(distanceTravelledInFeet(50, 42));

  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start);

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        // Distance between 400 and 2000 feet
        const fare = (distance - 400) * 0.02; // 2 cents per foot
        return fare;
    } else if (distance > 2000 && distance < 2500) {
        // Distance over 2000 feet and under 2500 feet
        return 25; // Flat fare of $25
    } else {
        
        return 'cannot travel that far';
    }
}


console.log(calculatesFarePrice(0, 300)); 
console.log(calculatesFarePrice(0, 500)); 
console.log(calculatesFarePrice(0, 2100)); 
console.log(calculatesFarePrice(0, 2600)); 

