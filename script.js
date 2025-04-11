function getComputerChoice() {
    let computerChoice;

    // generating a random number between 1 and 4
    const minNum = Math.ceil(1);
    const maxNum = Math.floor(4);
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);

    if (randomNumber == 1) {
        computerChoice = "rock";
    }
    else if (randomNumber == 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return computerChoice;

    //console.log(computerChoice);

}

//getComputerChoice();