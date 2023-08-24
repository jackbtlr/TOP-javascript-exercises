const repeatString = function(str, rep) {
    returnStr = '';
    if(rep < 0){
        return 'ERROR';
    }
    for(let i = 0; i < rep; i++){
        returnStr += str;
    }
    return returnStr;
};

// Do not edit below this line
module.exports = repeatString;
