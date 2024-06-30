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


