let game = (start) => {
    start = confirm('Welcome this is Paper Rock Scissors Game - Please click OK');
    let count = 5;
    let wins = 0;
    let draws = 0;
    let loss = 0;

    if (start) {
        while (count > 0) {

            // Game logic
            let playerOpt = prompt(`Rounds left : ${count--} - Please type in : [rock or paper or scissors`);
            let computerOpt = computerPlay();

            let result = playRound(playerOpt, computerOpt);
            let resultMsg = `${resultMessage(result)} \n\n The computer chose : ${computerOpt} - You chose : ${playerOpt}`;

            if (result == 1)
                wins++;
            else if (result == 0)
                draws++;
            else
                loss++;

            // Console output
            console.log(resultMsg);

            // Window output
            alert(resultMsg);
        }
        let finalResult = isWin(wins, loss, draws) + ` - Wins: ${wins} Loss: ${loss} Draws: ${draws}`;

        console.log(finalResult);
        alert(finalResult);
    }

}

let playRound = (playerSelection, computerSelection) => {
    let player = playerSelection.toLowerCase().trim();
    let computer = computerSelection;



    if (player == 'rock' && computer == 'rock' || player == 'paper' && computer == 'paper' || player == 'scissors' && computer == 'scissors') {
        return 0
    }

    if (player == 'rock' && computer == 'paper' || player == 'scissors' && computer == 'rock' || player == 'paper' && computer == 'scissors')
        return -1;

    return 1;
}

let computerPlay = () => {
    let options = ['rock', 'paper', 'scissors']

    return options[Math.trunc(Math.random() * options.length)];
}

let resultMessage = (result) => {
    let PLAYERWON = 'Congrats You won!!';
    let COMPUTERWON = 'Hard luck maybe next time...';
    let DRAW = 'It\'s a draw.';

    switch (result) {
        case 1:
            return PLAYERWON;
        case 0:
            return DRAW;
        case -1:
            return COMPUTERWON;
        default:
            break;
    }
}

let isWin = (wins, loss, draws) => {
    if (wins > loss)
        return "You won the game !";
    if (loss > wins)
        return 'You lost the game...';

    return "it's a draw for this game.";
}

let main = () => {

    let start = false;

    do {
        game(start);
    }
    while (!start);
}

main();