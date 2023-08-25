const sumAll = function(start, finish) {
    let sum = 0;
    if(typeof start !== 'number' || typeof finish !== 'number'){
        return 'ERROR';
    }
    if(start < 0 || finish < 0){
        return 'ERROR';
    }
    if(start > finish){
        let holder = finish;
        finish = start;
        start = holder;
    }
    for (let i = start; i <= finish; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
