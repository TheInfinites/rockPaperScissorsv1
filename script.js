// player scores
let humanScore = 0;
let computerScore = 0;

// computer choice
function getComputerChoice() {
    let computerChoice;

    // generating a random number between 1 and 4
    const minNum = Math.ceil(1);
    const maxNum = Math.floor(4);
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);

    // generating the computer choice based on the random number
    if (randomNumber == 1) {
        computerChoice = "rock";
    }
    else if (randomNumber == 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    //console.log(computerChoice);
    return computerChoice;   
}

// user choice
function getHumanChoice() {

    // asking and storing the humam choice
    let humChoice;
    let userChoice = prompt("rock, paper, or scissors?");

    if (userChoice.toLowerCase() == "rock") {
        humChoice = "rock";
    } else if (userChoice.toLocaleLowerCase() == "paper") {
        humChoice = "paper";
    } else {
        humChoice = "scissors";
    }

    //console.log(humChoice);
    return humChoice;   
}

// Round 1 logic
function playRound(humanChoice, computerChoice) {
    let hc = humanChoice;
    let cc = computerChoice;

    if (hc === cc) {
        console.log("It's a tie");
        humanScore += 1;
        computerScore += 1;
    } else if (hc == "rock" && cc == "paper") {
        console.log("Compter wins sucker!");
        computerScore += 1;
        humanScore += 0;
    } else if (hc == "rock" && cc == "scissors") {
        console.log("You win this round!");
        humanScore +=1;
        computerScore += 0;
    } else if (hc == "scissors" && cc == "rock") {
        console.log("Computer wins bro!!");
        computerScore += 1;
        humanScore += 0;
    } else if (hc == "scissors" && cc == "paper") {
        console.log("Damn, you win");
        humanScore +=1;
        computerScore += 0;
    } else if (hc == "paper" && cc == "rock") {
        console.log("How about that, you win!")
        humanScore += 1;
        computerScore += 0
    } else if (hc == "paper" && cc == "scissors") {
        console.log("Yeah, you lost man");
        computerScore += 1;
        humanScore += 0;
    }  
    console.log(`Current score is: You = ${humanScore} and Computer = ${computerScore}`);
}


function playGame() {

    for (i = 0; i < 5; i++){
        const humanSelction = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelction, computerSelection);   
    }

    let final = (humanScore > computerScore) ? `You win this round! Your score: ${humanScore} and Computer's score: ${computerScore}` : `You idiot! Your score: ${humanScore} and Computer's score: ${computerScore}`;
    console.log(final)

}

// playGame()

//getComputerChoice();
//getHumanChoice();