let arr = ['rock','paper','scissor'];

const getComputerChoice = () => {
    return arr[Math.floor(Math.random()*arr.length)];
}

const playRound = (playerChoice,com) => {
    let player = playerChoice.toLowerCase();
    console.log(`Player : ${player} || Com : ${com}`)
    
    if (player == com) {
        return 'tie';
    }
    
    if (player == 'rock') {
        return com == 'scissor' ? 'win' : 'lose';
    } else if (player == 'paper') {
        return com == 'rock' ? 'win' : 'lose';
    } else {
        return com == 'paper' ? 'win' : 'lose';
    }
}

const game = () => {
    let playerScore = 0;
    let comScore = 0;
    for (let i = 1; i <= 5; i++) {
        if (playerScore == 3) {
            console.log(`\nYou WIN!\nScore : ${playerScore} - ${comScore}`);
            return;
        } else if (comScore == 3) {
            console.log(`\nYou LOSE!\nScore : ${playerScore} - ${comScore}`);
            return;
        } else {
            console.log(`\n---ROUND ${i}---`);
            let player = prompt("Rock,Paper,Scissor ?");
            let com = getComputerChoice();
            let result = playRound(player, com);
            if(result == 'win') {
                console.log(`ROUND ${i} WIN`);
                playerScore++;
            } else if (result == 'lose') {
                console.log(`ROUND ${i} LOSE`);
                comScore++;
            } else {
                console.log(`ROUND ${i} TIE`);
            }
        }
    }

    if (playerScore > comScore) {
        console.log(`\nYou WIN!\nScore : ${playerScore} - ${comScore}`);
    } else if (comScore > playerScore) {
        console.log(`\nYou LOSE!\nScore : ${playerScore} - ${comScore}`);
    } else {
        console.log(`\nTIE!\nScore : ${playerScore} - ${comScore}`);
    }
}


game();