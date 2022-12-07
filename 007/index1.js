const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');
const lines = data.split(/\n/);

const directoryObjs = [];

// loop through system
for (i=0; i<lines.length; i++){
    // keep track of when inside a directory
    let layers = 0
    
    // lets us know we're in a directory
    if (lines[i].includes('$ cd') && lines[i].includes('$ cd ..') === false) {
        layers ++;

        // remove '$ cd " to leave dir name 
        let dir = lines[i].slice(5);
        let dirValue=0;
        
        // start looking through the dir for commands, dirs, and files...
        for (j=i+1; j<lines.length; j++){ 

            // ...so long as we're inside a directory
            if (layers > 0) {
            
                // keep track of stepping out of a dir
                if (lines[j].includes('$ cd ..')) {
                    layers --;
                
                 // keep track of stepping into a directory
                } else if (lines[j].includes('$ cd') && lines[j].includes('$ cd ..') === false) {
                    layers ++;
                
                // grab the file size and add to current value
                } else if (lines[j].includes('$ cd') === false && lines[j].includes('$ cd ..') === false) {
                    let fileSize = Number(lines[j].match(/[+]?[0-9]*\.?[0-9]+/g));
                    dirValue += fileSize;
                }; 
            
                // create object with dir name and size
            } else {
                let dirObj = {
                    dir:dir,
                    value: dirValue
                };

                // save object if <= 1000000
                if (dirObj.value<=100000) {
                    directoryObjs.push(dirObj);
                    break;
                };
            };
        };
    };
};

let total = 0
// sum value of all directories<100000
for (i=0; i<directoryObjs.length; i++){
    total += directoryObjs[i].value
    };

console.log(total);