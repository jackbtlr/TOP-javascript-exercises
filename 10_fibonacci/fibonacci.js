const fibonacci = function(ind) {
    let index = parseInt(ind);
    let current = 1;
    let last = 1;
    if(index < 0){
        return 'OOPS'
    }
    if(index === 1 || index === 2){
        return 1;
    }
    for(let i = 2; i < index; i++){
        let temp = current
        current = last + current;
        last = temp;
    }
    return current;

};

// Do not edit below this line
module.exports = fibonacci;
