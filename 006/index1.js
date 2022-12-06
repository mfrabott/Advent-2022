const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');

for (i=0; i<=data.length; i++){
        
    let fourCharsArray = [data[i], data[i+1], data[i+2], data[i+3]]

    // COnvert to set without duplicates, if not same length as input array, return true
    function hasDuplicates(arr) {
        return new Set(arr).size !== arr.length;
    }
    
    // if false, print last character position
    if (!hasDuplicates(fourCharsArray)) {
        console.log(i+4);
        break
    }
}
