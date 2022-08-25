let playerScore = 0;
let computerScore = 0;

function updateScore () {
	const playerScoreDiv = document.querySelector('.humanScore')
	const computerScoreDiv = document.querySelector('.computerScore')

	playerScoreDiv.textContent=playerScore;
	computerScoreDiv.textContent=computerScore;

	if (game()) {
		displayModal(game())
	}
}

const weapons = document.querySelectorAll('.left .weapon')
weapons.forEach(weapon => {
	weapon.addEventListener('click',e => {
		const playerSelection = e.target.dataset.id;
		const computerSelection = getComputerChoice();
		displayChoice(playerSelection, computerSelection)
		playRound(playerSelection, computerSelection)
		updateScore()
	})
})


function getComputerChoice () {
	const options = ['Rock', 'Paper', 'Scissors']
	const randomIndex = Math.floor(Math.random()*options.length)
	return options[randomIndex]
}

function displayChoice (playerSelection, computerSelection) {
	const computerWeapon = document.querySelector(`.right .weapon[data-id='${computerSelection}']`);
	const playerWeapon = document.querySelector(`.left .weapon[data-id='${playerSelection}']`);

	computerWeapon.classList.add('computerSelection')
	playerWeapon.classList.add('playerSelection')

	computerWeapon.addEventListener('transitionend', ()=> {
		computerWeapon.classList.remove('computerSelection')
	})
	playerWeapon.addEventListener('transitionend', ()=> {
		playerWeapon.classList.remove('playerSelection')
	})
}

function playRound(playerSelection, computerSelection) {
	let result
	if (playerSelection===computerSelection) {
		result = `Both ${playerSelection}! You are a tough opponent`;
	} else if (
		playerSelection === 'Rock' && computerSelection === 'Paper' ||
		playerSelection === 'Paper' && computerSelection === 'Scissors' ||
		playerSelection === 'Scissors' && computerSelection === 'Paper'
	) {
		computerScore++;
/* 		result = `You lose! ${computerSelection} beats ${playerSelection}` */
	} else {
		playerScore++
/* 		result = `You win! ${playerSelection} beats ${computerSelection}` */
	}
	return result;
}



function game() {
	
	if (playerScore == 5) {

		return 'You win!'
	} else if (computerScore == 5) {
		return 'Game over!'
	} 
	return;
}

function displayModal (winner) {
	const modal = document.querySelector('.modal')
	const gameResult = document.querySelector('.gameResult')
	modal.setAttribute('style','visibility:visible')
	gameResult.textContent = winner
}

const reloadBtn = document.querySelector('.reload')
reloadBtn.addEventListener('click', () => {
	window.location.reload()
})