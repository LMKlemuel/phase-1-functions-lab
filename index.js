function distanceFromHqInBlocks(someValue) {
   return Math.abs(someValue-42)
  }

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue)
    return Math.abs(distanceFromHqInBlocks(someValue)*(264))
  }

let start = math.abs(distanceFromHqInBlocks(someValue)*(264))
let destination = math.abs(distanceFromHqInBlocks(someValue)*(264))

function distanceTravelledInFeet(start, destination) {
 if (start > destination) {
    return start - destination
 } else (start < destination);{
    return destination - start}
}   
function calculatesFarePrice(start, destination) {
   const distance= distanceTravelledInFeet(start, destination);{
    if (distance <= 400) {
        return 0; 
    }
    else if(distance > 400 && distance <2000) {
        return (distance*0.02)
    }
    else if(distance >2000 && distance <2500){
        return 25;
    }
    else if(distance>2500){
        return 'cannot travel that far';
    }
    }
}




