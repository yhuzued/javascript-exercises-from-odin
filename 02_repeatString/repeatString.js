const repeatString = function(text, number) {
    if (number < 0){
        return "ERROR";
    } else {
        let returnWord = "";
        for (let i = 0; i < number; i++) {
            returnWord += text;
        }
        return returnWord;
    }   
};

// Do not edit below this line
module.exports = repeatString;
