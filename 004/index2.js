
const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');
const lines = data.split(/\n/);

// const assignments = lines.split(,)
let doubledAreas = 0;

for (i=0; i<lines.length; i++) {
    //pull all (positive) numbers into an array for each line
    let currentLine = lines[i].match(/[+]?[0-9]*\.?[0-9]+/g);
    // first number in each range
    let areaOneStart = Number(currentLine[0]);
    let areaTwoStart = Number(currentLine[2]);

    let areaOne = [];
    let areaTwo = [];
    // populate array from first number through each number in range
    for (j = areaOneStart; j<=currentLine[1]; j++){
        areaOne.push(j)
    };

    for (k = areaTwoStart; k<=currentLine[3]; k++){
        areaTwo.push(k)
    };
    // Check for overlap
    for (m=0; m<areaOne.length; m++){
        let checkFirstArea = areaTwo.includes(areaOne[m])

        if (checkFirstArea){
            doubledAreas ++
            break
        };
    };
};

console.log(doubledAreas)
