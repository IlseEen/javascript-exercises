const repeatString = function(string, num) {
    text="";
    let i = 0;

    if (num<0){
        return('ERROR')
    }

    while (i< num){
        text = text.concat(string);
        i ++;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
