// Format data to an array including empty items for blank lines
const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');
const lines = data.split(/\n/);

let currentCalories = 0;
let mostCalories = 0;
let secondMost = 0;
let thirdMost = 0;


// Loop through array. If item is not blank, add to current counter; else compare to current high marks, replace highest if higher, reset current count
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

console.log(topThree)
