const choice = ['Rock','Paper', 'Scissors'];
let playerWin=0;
let computerWin=0;
function computerPlay () {
    return choice[Math.floor(Math.random()*choice.length)]
}
function humanPlay () {

    let weapon = prompt("Select your weapon","Rock").toLowerCase();
    return weapon.charAt(0).toUpperCase() + weapon.slice(1);
}

function playRound(playerSelection,computerSelection){
    let result;
    playerSelection = humanPlay();
    computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        result = "Draw";
    } else {
        switch (playerSelection+computerSelection){
            case "RockScissors":
            case "ScissorsPaper":
            case "PaperRock":
                result = 'You win';
                playerWin++;
                break
            default:
                result = 'You lose';
                computerWin++;
        }
    }
    console.log(result);

    return result;

}

function game(){
    
    for (let i = 0; i < 5; i++) {
        playRound();

    };
    let finalResult = playerWin>computerWin?"Winner":
    playerWin == computerWin?"Drawer":"Loser";
    return finalResult;
}

console.log(game());