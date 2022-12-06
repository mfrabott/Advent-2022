
const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');

for (i=0; i<=data.length; i++){
    
    let fourteenCharsArray = [data[i], data[i+1], data[i+2], data[i+3], data[i+4], data[i+5], data[i+6], data[i+7], data[i+8], data[i+9], data[i+10], data[i+11], data[i+12], data[i+13]]

    // COnvert to set without duplicates, if not same length as input array, return true
    function hasDuplicates(arr) {
        return new Set(arr).size !== arr.length;
    }
    
    // if false, print last character position
    if (!hasDuplicates(fourteenCharsArray)) {
        console.log(i+14);
        break
    }
}


