const sumAll = function(startNumber, endNumber) {
    //check if the argument is not negative
    if (startNumber < 0 || endNumber < 0){
        return "ERROR";
    }
    //check if the argument is number
    if (!(typeof startNumber === 'number')
        || !(typeof endNumber === 'number')){
            return "ERROR";
        }

    //calculate the sum
    if (startNumber < endNumber){
        return calculateNumber(startNumber, endNumber);
    } else {
        return calculateNumber(endNumber, startNumber);
    }
};

function calculateNumber(startNumber, endNumber){
    let sum = 0;
    for (let index = startNumber; index <= endNumber; index++) {
        sum += index;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
