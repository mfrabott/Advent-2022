const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');
const lines = data.split(/\n/);

const directoryObjs = [];

let rootValue = 0;

// find file size of root directory
for (i=0; i<lines.length; i++){
    let fileSize = Number(lines[i].match(/[+]?[0-9]*\.?[0-9]+/g));
    rootValue += fileSize;
};

let unusedSpace = 70000000 - rootValue;
let neededSpace = 30000000 - unusedSpace;

// loop through file system
for (i=0; i<lines.length; i++){
    
    // keep track of when inside a directory
    let layers = 0;

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
                    let fileSize = Number(lines[j].match(/[+]?[0-9]*\.?[0-9]+/g))
                    dirValue += fileSize
                };
            
            // create object with dir name and size
            } else {
                let dirObj = {
                    dir:dir,
                    value: dirValue
                };

            // save object
            directoryObjs.push(dirObj);
            break;
            };
        };
    };
};

// sort function
function compare( a, b ) {
    if ( a.value < b.value ){
      return -1;
    }
    if ( a.value > b.value ){
      return 1;
    }
    return 0;
  }
  
let sortedDirectories = directoryObjs.sort( compare );

// find first directory greater than needed space
for (i=0; i<sortedDirectories.length; i++) {
    if (sortedDirectories[i].value >= neededSpace){
        console.log(sortedDirectories[i])
        break
    };
};