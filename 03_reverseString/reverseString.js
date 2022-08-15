const reverseString = function(text) {
    let concatWord = "";
    for (let i = text.length; i >= 0; i--) {
        concatWord += text.charAt(i);
    }
    return concatWord;
};

// Do not edit below this line
module.exports = reverseString;
