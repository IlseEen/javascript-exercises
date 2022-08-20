const removeFromArray = function( ) {
    argsArray = Array.from(arguments);
    inputArray = argsArray[0];

    for (let i = 1; i< (argsArray.length); i++ ) {
        if (inputArray.includes(argsArray[i])) {
        inputArray.splice(inputArray.indexOf(argsArray[i]),1);
        }

    }
    return(inputArray);
};

// Do not edit below this line
module.exports = removeFromArray;
