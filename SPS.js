let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Game draw. Play again";
};

const showWinner = (UserWin, UserChoice, computerChoice) => {
    if(UserWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ${UserChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lose ${computerChoice} beats ${UserChoice}`;
    }
};

const playGame = (UserChoice) => {
    //generate COMPUTER choice
    const computerChoice = genComputerChoice();

    if(UserChoice === computerChoice) {
        //draw game
        drawGame();
    } else {
        let UserWin = true;
        if(UserChoice === "Rock") {
            //computer choice = Scissors, Paper
            UserWin = computerChoice === "Paper" ? false : true;        
        } else if (UserChoice === "Paper") {
            //computer choice = Rock, Scissors
            UserWin = computerChoice === "Scissors" ? false : true;
        } else {
            //user choice = scissors
            //computer choice = Paper, Rock 
            UserWin = computerChoice === "Rock" ? false : true;
        }
        showWinner(UserWin, UserChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const UserChoice = choice.getAttribute("id");
        playGame(UserChoice);
    });
});

