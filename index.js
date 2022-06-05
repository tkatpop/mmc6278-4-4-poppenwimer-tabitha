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


window.onload = function(){

  var guessesLeft = 10
  remainingGuessDisplay.textContent = guessesLeft

  var word = words[Math.floor(Math.random() * words.length)];
  var guessed_word = [];
  for (var p = 0; p < word.length; p++){
    guessed_word[p] = "_";
  }

  var remainingLetters = word.length;

  word_to_guessEl.textContent = guessed_word.join("")
  /*
  var guessed_word = word.replace(/[a-z]/g, "_")
  word_to_guessEl.textContent = guessed_word*/

  var bad_letters = [];

 document.onkeyup = function(g){
   var key = g.key.toLowerCase();
   
   guessesLeft--;
   remainingGuessDisplay.textContent = guessesLeft
   var guessed_letter = word.indexOf(key)
   incorrect_lettersEl.textContent = guessed_letter

   if (guessed_letter > -1) {
     var updated_word = [];
     for (var i = 0; i < remainingLetters; i++) {
       if(word[i] === key){
        updated_word.push(key)
       } else{
         updated_word.push(guessed_word[i])
       }
    }
    guessed_word = updated_word
    word_to_guessEl.textContent = guessed_word.join("")
   } else {
     bad_letters.push(key)
   }
   incorrect_lettersEl.textContent = bad_letters

  if(guessesLeft === 0){
    if(guessed_word.indexOf("_") > -1){
      lossesEl.textContent = losses++
    }else{
      winsEl.textContent = wins++
    }
  }
 }
 




}
