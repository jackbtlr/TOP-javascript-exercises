const palindromes = function (str) {
    let lowerStr = str.toLowerCase();
    let arr = []
    for(let char of lowerStr){
        if(isAlphaNum(char)){
            arr.push(char)
        }
    }
    if(arr.toString() == arr.reverse().toString()){
        return true;
    }
    return false;
};

function isAlphaNum(char){
    const code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
