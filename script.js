const choice = ['Rock','Paper', 'Scissors'];
let win=0;
let lose=0;
let draw = 0;
let humanPlay;

const winScore = document.querySelector('.winScore');
const drawScore = document.querySelector('.drawScore');
const loseScore = document.querySelector('.loseScore');

const btns = Array.from(document.querySelectorAll('.btn'));


function computerPlay () {
    return choice[Math.floor(Math.random()*choice.length)]
}

function playRound(playerSelection,computerSelection){
    let result;
    playerSelection = humanPlay;
    computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        result = "Draw";
        draw++;
        drawScore.textContent = "Draw: " + draw;
    } else {
        switch (playerSelection+computerSelection){
            case "RockScissors":
            case "ScissorsPaper":
            case "PaperRock":
                result = `You win. ${playerSelection} beats ${computerSelection}`;
                win++;
                winScore.textContent="Win: " + win;
                break
            default:
                result = `You lose. ${playerSelection} is beaten by ${computerSelection}`;
                lose++;
                loseScore.textContent="Lose: " +lose;
        }
    }
    const body = document.querySelector('body');
    const div = document.createElement('div');
    body.appendChild(div);
    div.textContent=result;

}
btns.forEach(btn=>{
    btn.addEventListener('click',e => {
        humanPlay=btn.getAttribute('id');
        playRound();
        winCheck();
    })
});
function winCheck(){
    if (win==5) {
        window.alert('YOU ARE WINNER');
        reset()
    } else if (lose==5) {
        window.alert('YOU ARE LOSERRRRRRRR');
        reset()
    };
}

function reset(){
    win = 0;
    lose =0;
    draw =0;
}