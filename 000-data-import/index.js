
const fs = require('fs');
const data = fs.readFileSync('test.txt', 'utf8');
const lines = data.split(/\n/);
console.log(lines)


let greaterDepth = 0

// for (i=0; i<=lines.length; i++){
//     first = lines[i];
//     second = lines[i+1]
//     if (second > first){
//         greaterDepth += 1;
//     }
// }

// console.log(greaterDepth)

// let greaterDepthThrees = 0

// for (i=0; i<lines.length; i++){
//     let first = Number(lines[i]);
//     let second = Number(lines[i+1])
//     let third = Number(lines[i+2])

//     let firstSet = first+second+third

//     let fourth = Number(lines[i+3])

//     let secondSet = second+third+fourth
//     console.log(firstSet)
//     console.log(secondSet)
//     if (secondSet > firstSet){
//         greaterDepthThrees += 1;
//     }
// }

// console.log(greaterDepthThrees)