function getComputerChoice () {
	const options = ['Rock', 'Paper', 'Scissors']
	const randomIndex = Math.floor(Math.random()*options.length)
	return options[randomIndex]
}

function getPlayerChoice () {
	const choice = prompt('Enter your choice: Rock? Paper? Scissors?')
	return choice[0].toUpperCase().concat(choice.slice(1).toLowerCase())
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
		result = `You lose! ${computerSelection} beats ${playerSelection}`
	} else result = `You win! ${playerSelection} beats ${computerSelection}`
	console.log(result);
	return result;
}



function game() {
	let playerScore = 0;
	let computerScore = 0;
	for (let i =0; i< 5; i++) {
		const result = playRound(getPlayerChoice(),getComputerChoice());
		if (result.includes('win')) {
			playerScore++
		} else if (result.includes('lose')) {
			computerScore++
		}
	}
	if (playerScore > computerScore) {
		return 'Win'
	} else if (playerScore < computerScore) {
		return 'Lose'
	}
	return 'Tie'
}