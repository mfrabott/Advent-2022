
const fs = require('fs');
const data = fs.readFileSync('data1.txt', 'utf8');
const lines = data.split(/\n/);

let currentCalories = 0;
let mostCalories = 0;

for (i=0; i<=lines.length; i++){
    if (lines[i]===''){
        if (currentCalories > mostCalories){
            mostCalories = currentCalories;
            currentCalories = 0;
        } else {
            currentCalories = 0;
        }
    } else {
        currentCalories += Number(lines[i]);
    }
}

console.log(mostCalories)

