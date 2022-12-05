
const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');
const lines = data.split(/\n/);

const items='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let badgeItems = []
let totalValue = 0

// splits the line in half
function split(str, index) {
    const result = [str.slice(0, index), str.slice(index)];
    return result;
};

// loop through each set of three lines 
for (i=0; i<lines.length; i+=3) {

    let firstElf = lines[i];
    let secondElf = lines[i+1];
    let thirdElf = lines[i+2];

    for (k=0; k<firstElf.length; k++){

        // Check for existence of matching items in first and second elf sacks
        let firstCheck = secondElf.includes(firstElf[k]);
        if (firstCheck === true) {

            // Check for existence of matched item in third elf sack
            let secondCheck = thirdElf.includes(firstElf[k])
            
            // push to badgeItems if exist in all three
            if (secondCheck === true) {
                badgeItems.push(firstElf[k]);
                break;
            };
        };
    };
};

// loop through badgeItems to get value for each and add to totalValue
for (i=0; i<badgeItems.length; i++) {
    let itemValue = items.indexOf(badgeItems[i]) +1;
    totalValue += itemValue;
};

console.log(totalValue)