var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var word_to_guessEl = document.getElementById('word-to-guess')
var incorrect_lettersEl = document.getElementById('incorrect-letters')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')
var previous_wordEl = document.getElementById('previous-word')
var remainingGuessDisplay = document.getElementById('remaining-guesses')
var scoreEl = document.getElementsByClassName('score')

var wins = 0
var losses = 0


var guessesLeft = 10
remainingGuessDisplay.textContent = guessesLeft

var word = words[Math.floor(Math.random() * words.length)];
var guessed_word = [];
for (var p = 0; p < word.length; p++){
  guessed_word.push("_");
}

var remainingLetters = word.length;

word_to_guessEl.textContent = guessed_word.join("")

var bad_letters = [];

document.onkeyup = function(g){
  var guessed_key = g.key.toLowerCase()
  
  var guessed_letter = word.indexOf(guessed_key)
  incorrect_lettersEl.textContent = guessed_letter

  if (guessed_letter > -1) {
    var updated_word = [];
    for (var i = 0; i < remainingLetters; i++) {
      if(word[i] === guessed_key){
      updated_word.push(guessed_key)
      } else{
        updated_word.push(guessed_word[i])
      }
  }
  
  guessed_word = updated_word
  word_to_guessEl.textContent = guessed_word.join("")
  
  } else {
    //A checker to see if the guess is in the 
    var bad_check = bad_letters.indexOf(guessed_key);
    

    if(bad_check > -1){
      //Letter has been already guessed NO CHANGE

    }else if(!(/[a-zA-Z]/).test(guessed_key)){
      //Letter is not actually a letter NO CHANGE

    }else {
      //Actual bad guess
      bad_letters.push(guessed_key)
      guessesLeft--;
      remainingGuessDisplay.textContent = guessesLeft
    }
  }
  incorrect_lettersEl.textContent = bad_letters


//Check if the game ends (either no guess or no "_")
if(guessesLeft === 0 || guessed_word.indexOf("_") === -1){
  
  //Check if the game is a win (no "_")
  if(guessed_word.indexOf("_") === -1){
    wins++
    winsEl.textContent = wins
  }

  //Check if the game is a loss (no guesses left)
  if(guessesLeft === 0){
  losses++
  lossesEl.textContent = losses;
}
  //show previous word
  previous_wordEl.textContent = word;

  //random set next word
  word = words[Math.floor(Math.random() * words.length)];
  remainingLetters = word.length;

  //change new word to underscore
  guessed_word = [];
  for (var p = 0; p < remainingLetters; p++){
    guessed_word.push("_");
  }
  word_to_guessEl.textContent = guessed_word.join("")

  //reset incorrect letters
  bad_letters = []
  incorrect_lettersEl.textContent = bad_letters

  //reset guesses to 10
  guessesLeft = 10
  remainingGuessDisplay.textContent = guessesLeft


}

}

