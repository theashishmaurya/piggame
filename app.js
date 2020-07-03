/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/




 var score , roundScore , activePlayer , dice , six ;

 
// to get the result of math random between a range we use Math.random()*(max-min) + min 
//  dice = Math.floor(Math.random()*(6-0)) +1 ;
 
 //displaying dice value to the current Score 
//  document.querySelector('#current-' + activePlayer).textContent = dice;

 //hiding the dice for now
//  document.querySelector('.dice').style.display = 'none';

init();
var diceDOM = document.querySelector('.dice');

diceDOM.style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',()=>{
     //generate a random number
    //  dice = Math.floor(Math.random()*(6-0)) +1 ;
    dice = 6;

     //display the dice picture 
     
     diceDOM.src = 'dice-' + dice +".png";
     diceDOM.style.display = "block";
     //flag for dice = 6;
     
    if(dice === 6 ){
        six++;
        console.log(six);
        if(six===2){
            nextPlayer();
        }
        else{
        roundScore += dice ;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

        }

    }
     // Update the round score IF the rolled number was NOT a 1
     else if(dice !== 1  ){
         roundScore += dice ;
         document.querySelector('#current-' + activePlayer).textContent = roundScore;

     }
     
     
     else{
         //nextplayer 
         nextPlayer();
        

     }
})

// implementing hold function

document.querySelector('.btn-hold').addEventListener('click',()=>{
    // add score of active player to main-score
    score[activePlayer] += roundScore;

    //display the score in UI
    document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
    //check if player won the game
    if(score[activePlayer] >= 20){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
        diceDOM.style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

    }
    else{
        //Changing player
        nextPlayer();
    }
    
})


//NEWGAME initiator

document.querySelector('.btn-new').addEventListener('click' ,()=>{
     
    init();
   
})
//nextplayer function
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //setting roundScore to intial 
    roundScore = 0 ;
    //flag for getting two sixes in a row
    six = 0;

    // setting the roundScore =  0 when active player change
   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';
  

   //changing the active style for the players
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');
   diceDOM.style.display = "none";
};
function init(){
// setting variable to intial value
score = [0,0];
roundScore = 0;
activePlayer = 0;
six = 0;


//chnaging the UI to O.
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Winner status changed
document.querySelector('#name-0').textContent = 'Player 1';
document.querySelector('#name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');

}




/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
