
const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');
const lines = data.split(/\n/);

const items='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let packedItems = []
let totalValue = 0

// splits the line in half
function split(str, index) {
    const result = [str.slice(0, index), str.slice(index)];
    return result;
};

// loop through each line and split in half. 
for (i=0; i<lines.length; i++) {

    halfLine = lines[i].length/2
    const [firstComp, secondComp] = split(lines[i], lines[i].length/2);

    // compare each item in firstComp with secondComp until match is found. Add matched item to packedItems array.
    for (k=0; k<firstComp.length; k++){
        let item = secondComp.includes(firstComp[k])
        if (item === true) {
            packedItems.push(firstComp[k]);   
            break;
        };    
    };
};

// loop through packedItems to get value for each and add to totalValue
for (i=0; i<packedItems.length; i++) {
    let itemValue = items.indexOf(packedItems[i]) +1;
    totalValue += itemValue;
};

console.log(totalValue)
