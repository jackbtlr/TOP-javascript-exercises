const findTheOldest = function(people) {
    let index = 0;
    let longestLife = 0;
    let currentYear = new Date().getFullYear();
    for(let i = 0; i < people.length; i++){
        let lifeSpan;
        if(!people[i].yearOfDeath){
            lifeSpan = currentYear - people[i].yearOfBirth;
        }
        else{
            lifeSpan = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        if(lifeSpan > longestLife){
            index = i;
            longestLife = lifeSpan;
        }
    }
    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
