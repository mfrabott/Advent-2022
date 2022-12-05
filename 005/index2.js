
const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');
const lines = data.split(/\n/);

let currentCalories = 0;
let mostCalories = 0;
let secondMost = 0;
let thirdMost = 0;



for (i=0; i<=lines.length; i++){
    if (lines[i]===''){
        if (currentCalories > mostCalories){
            mostCalories = currentCalories;
            currentCalories = 0;
        } else if (currentCalories>secondMost) {
            secondMost = currentCalories;
            currentCalories = 0;
        } else if (currentCalories>thirdMost) {
            thirdMost = currentCalories;
            currentCalories = 0;
        } else {
            currentCalories = 0;
        }
    } else {
        currentCalories += Number(lines[i]);
    }
};
let topThree = mostCalories+secondMost+thirdMost
console.log(mostCalories)
console.log(secondMost)
console.log(thirdMost)
console.log(topThree)
