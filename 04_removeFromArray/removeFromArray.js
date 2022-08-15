const removeFromArray = function(array, ...valueToRemove) {
    //loop inside array of numberToRemove
    for (let index = 0; index < valueToRemove.length; index++) {
        // loop to remove the intend value to remove
        for (let indexArray = 0; indexArray < array.length; indexArray++) {
            if (array[indexArray] === valueToRemove[index]){
                array.splice(indexArray, 1);
            }
        }
    }
  
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
