// Play the game //
function play(){

  // hide all , show only the playground  
   hideElementById('home-screen'); 
   showElementById('play-ground');
   hideElementById('final-score');

   setTextElementValueById('current-life', 5);
   setTextElementValueById('current-score', 0);
   continueGame();
}

// Game Over //
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score 
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}

// Continue Game //
function continueGame(){
  // step 1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    
  // set randomly generated alphabet to the screen (show it)
    const showAlphabet = document.getElementById('current-alphabet');
    showAlphabet.innerText = alphabet;
  
  // set key background color
    setBackgroundColorById(alphabet);
}   


// capture keyboard key press //
document.addEventListener('keyup', handleKeyboardButtonPressed)

function handleKeyboardButtonPressed(event){ 
  // keyboard key press
  const playerPressed = event.key;
  
  // stop the game if pressed "Esc"
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press 
    const alphabet = document.getElementById('current-alphabet');
    const showAlphabet = alphabet.innerText;
    const expectedAlphabet = showAlphabet.toLocaleLowerCase();


  // check matched or not 
  if(playerPressed === expectedAlphabet){
    
    // update score 
    const currentScore = getTextElementValueById('current-score');
    const newScore = currentScore + 1; 

    setTextElementValueById('current-score', newScore);
    
    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }

  else{

    // update life
    const currentLife = getTextElementValueById('current-life');
    const lifeRemaining = currentLife - 1;

    setTextElementValueById('current-life', lifeRemaining);  
    
    if(lifeRemaining === 0){
        gameOver();
    }

  }

}