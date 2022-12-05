
const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');
const lines = data.split(/\n/);

//             [G] [W]         [Q]    
// [Z]         [Q] [M]     [J] [F]    
// [V]         [V] [S] [F] [N] [R]    
// [T]         [F] [C] [H] [F] [W] [P]
// [B] [L]     [L] [J] [C] [V] [D] [V]
// [J] [V] [F] [N] [T] [T] [C] [Z] [W]
// [G] [R] [Q] [H] [Q] [W] [Z] [G] [B]
// [R] [J] [S] [Z] [R] [S] [D] [L] [J]
//  1   2   3   4   5   6   7   8   9 

let stack1 = ['R', 'G', 'J', 'B', 'T', 'V', 'Z'];
let stack2 = ['J', 'R', 'V', 'L'];
let stack3 = ['S', 'Q', 'F'];
let stack4 = ['Z', 'H', 'N', 'L', 'F', 'V', 'Q', 'G'];
let stack5 = ['R', 'Q', 'T', 'J', 'C', 'S', 'M', 'W'];
let stack6 = ['S', 'W', 'T', 'C', 'H', 'F'];
let stack7 = ['D', 'Z', 'C', 'V', 'F', 'N', 'J'];
let stack8 = ['L', 'G', 'Z', 'D', 'W', 'R', 'F', 'Q'];
let stack9 = ['J', 'B', 'W', 'V', 'P'];

const stacks = [stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9]

for (i=0; i<lines.length; i++) {
    let currentLine = lines[i].match(/[+]?[0-9]*\.?[0-9]+/g);
    let quantity = Number(currentLine[0])
    let fromStack = Number(currentLine[1]-1)
    let toStack = Number(currentLine[2]-1)

    let cratesRemoved = stacks[fromStack].slice(stacks[fromStack].length-quantity)
    
    let cratesRemaining = stacks[fromStack].slice(0, stacks[fromStack].length-quantity)

    stacks[fromStack] = cratesRemaining

    for (j=0; j<quantity; j++){
        let crateRemoved = cratesRemoved.shift()
        stacks[toStack].push(crateRemoved)
    }
}


console.log(stacks)
// console.log(quantity)
// console.log(fromStack)
// console.log(toStack)
// console.log(stacks[4])
// console.log(stacks[6])