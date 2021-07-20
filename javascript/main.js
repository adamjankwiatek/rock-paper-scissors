document.querySelector('#play').addEventListener('click', play)

// computer randomly picks rock, paper, or scissors
function randomChoice(){
  let random = Math.random()
  if(random < 0.33){
    return 'rock'
  }else if(random < 0.66){
    return 'paper'
  }else{
    return 'scissors'
  }
}

// triggered by clicking the button
function play(){
  let computerChoice = randomChoice()
  let userChoice = document.querySelector('input').value.toLowerCase()
  let userChoiceDom = document.querySelector('.place-for-user-result')
  let computerChoiceDom = document.querySelector('.place-for-computer-result')
  let whoWon = document.querySelector('.who-won')
  userChoiceDom.innerText = ''
  computerChoiceDom.innerText = ''

  let winCondition = `User picked ${userChoice}, computer picked ${computerChoice}. Computer wins.`
  let loseCondition = `User picked ${userChoice}, computer picked ${computerChoice}. Computer wins.`
  let tieCondition = `User picked ${userChoice}, computer picked ${computerChoice}. It's a tie.`
  
  userChoiceDom.innerText = userChoice.toUpperCase()
  computerChoiceDom.innerText = computerChoice.toUpperCase()

  // invalid input, tie, win, and lose conditions
  if(userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors'){
    userChoiceDom.innerText = ''
    computerChoiceDom.innerText = ''
    whoWon.innerText = ''
    alert('Please choose rock, paper, or scissors')
  } else if(userChoice === computerChoice){ 
    whoWon.innerText = tieCondition
  }else if(userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper'){
    whoWon.innerText = winCondition
  }else{
    whoWon.innerText = loseCondition
  }
}