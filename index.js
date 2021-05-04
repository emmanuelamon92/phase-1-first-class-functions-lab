// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    const firstDrivers = function(){
        return drivers.slice(0,2)
    }
    return firstDrivers()
}

function returnLastTwoDrivers(drivers){
    const lastDrivers = function(){
      return drivers.slice(2)
    }
    return lastDrivers();
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// function createFareMultiplier(int){
//     return function(){
//         int * int;
//     };
// }

function createFareMultiplier(outerInteger){
    return function(fare){
    // function multFare(){
       return fare * outerInteger;
    };
    
    
}

function fareDoubler(fare){
    
    const doubleFare = createFareMultiplier(2);
    // console.log('createFareMultiplier ' + createFareMultiplier(fare)(2) )
    //function doubleFare gives the parameter 'fare' to the function 
    //inside of createFareMultiplier and '2' is the param for the outer function
    return doubleFare(fare)
}

function fareTripler(fare){
    console.log(fare)
    const tripleFare = createFareMultiplier(3);
    return tripleFare(fare);
}

function selectDifferentDrivers(arrayOfDrivers, driversFunc){
    return driversFunc(arrayOfDrivers);

}