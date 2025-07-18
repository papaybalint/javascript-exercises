const reverseString = function(word) {
    const tomb = word.split('')
    console.log(tomb);
    const reversedStrings = tomb.reverse()
    return reversedStrings.join('')
};

// Do not edit below this line
module.exports = reverseString;
