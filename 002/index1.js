
const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');
const lines = data.split(/\n/);

let score = 0;

// for each row compare opponent v. suggested play
for (i=0; i<lines.length; i++){

    const opponent = lines[i][0]
    const suggestedPlay = lines[i][2]

    if (opponent === 'A') {
        if (suggestedPlay === 'X') {
            score += 4; //1 move + 3 result
        } else if (suggestedPlay === 'Y') {
            score += 8; //2+6
        } else if (suggestedPlay === 'Z') {
            score += 3; //3+0
        };

    } else if (opponent === 'B') {
        if (suggestedPlay === 'X') {
            score += 1; //1+0
        } else if (suggestedPlay === 'Y') {
            score += 5; //2+3
        } else if (suggestedPlay === 'Z') {
            score += 9; //3+6
        };
        
    } else if (opponent === 'C') {
        if (suggestedPlay === 'X') {
            score += 7; //1+6
        } else if (suggestedPlay === 'Y') {
            score += 2; //2+0
        } else if (suggestedPlay === 'Z') {
            score += 6; //3+3
        };
    };
};

console.log(score)


// for (i=0; i<lines.length; i++){
//     const opponent = lines[i][0]
//     const suggestedPlay = lines[i][2]

//     switch (opponent) {
//         case 'A':
//             switch(suggestedPlay){
//                 case 'X':
//                     score += 4;   //1  draw
//                     break;
//                 case 'Y':
//                     score += 8; //2  win
//                     break;
//                 case 'Z':
//                     score += 3; //3  lose
//                     break;
//                 default:
//                     console.log('something is wrong 1');
//             };
//         case 'B':
//             switch(suggestedPlay){
//                 case 'X':
//                     score += 1; //1  lose
//                     break;
//                 case 'Y':
//                     score += 5;  //2 draw
//                     break;
//                 case 'Z':
//                     score += 9;  //3 win
//                     break;
//                 default:
//                     console.log('something is wrong 2');
//             };
//         case 'C':
//             switch(suggestedPlay){
//                 case 'X':
//                     score += 7; //1 win
//                     break;
//                 case 'Y':
//                     score += 2; //2 lose
//                     break;
//                 case 'Z':
//                     score += 6; //3 draw
//                     break;
//                 default:
//                     console.log('something is wrong 3');
//             };
//          default:
//             console.log('something is wrong 4');
//             console.log(lines[i])
//     };
// };

// console.log(score)