const removeFromArray = function(arr, ...remove) {
    return arr.filter(val => {
        return !remove.includes(val);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
