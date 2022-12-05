
const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');
const lines = data.split(/\n/);

let score = 0;

for (i=0; i<lines.length; i++){

    const opponent = lines[i][0]
    const suggestedPlay = lines[i][2]

    // X = lose; Y=draw; Z=win
    if (opponent === 'A') {
        if (suggestedPlay === 'X') {
            score += 3; //scissors
        } else if (suggestedPlay === 'Y') {
            score += 4; //rock
        } else if (suggestedPlay === 'Z') {
            score += 8; //paper
        };

    } else if (opponent === 'B') {
        if (suggestedPlay === 'X') {
            score += 1; //rock
        } else if (suggestedPlay === 'Y') {
            score += 5; //paper
        } else if (suggestedPlay === 'Z') {
            score += 9; //scissors
        };
        
    } else if (opponent === 'C') {
        if (suggestedPlay === 'X') {
            score += 2; //paper
        } else if (suggestedPlay === 'Y') {
            score += 6; //scissors
        } else if (suggestedPlay === 'Z') {
            score += 7; //rock
        };
    };
};

console.log(score)

