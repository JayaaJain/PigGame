
/*

CHALLENGES : Change the game rules to following rules =>

#1 If 6 rolled twice, clear score of that player, next player.
#2 Change the pre-defined score of 100 to user input
#3 Add one more dice and if one of the two dices is 1 then current score of player is lost

*/
var scores, roundScore, activePlayer, gamePlaying, winnerScore;
// var prevDice1, prevDice2;
init();

//Anonymous Function
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
    // 1.Random Number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var dice1DOM = document.getElementById('dice-1');
    var dice2DOM = document.getElementById('dice-2');
    dice1DOM.style.display = 'block';
    dice2DOM.style.display = 'block';
    dice1DOM.src = 'dice-' + dice1 + '.png';
    dice2DOM.src = 'dice-' + dice2 + '.png';

    /*
    //3. Update the round score IF the rolled number was NOT a 1
    if (prevDice1 === 6 && dice1 === 6 || prevDice2 === 6 && dice2 === 6 ) {
        //Player looses score
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        //Next Player
       nextPlayer();
    } else if (dice1 !== 1 && dice2 !== 1) {
        //Add score
        roundScore += dice1;
        roundScore += dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        //Next Player
       nextPlayer();
    }
    prevDice1 = dice1;
    prevDice2 = dice2;

    } 
    */
   if (dice1 !== 1 && dice2 !== 1) {
    //Add score
    roundScore += dice1 + dice2;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next Player
        nextPlayer();
        }
    }
    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
    //Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //take the final score from user
    var input = document.querySelector('.final-score').value;

    //Undefined, 0, null or "" are COERCED to false
    //Anything else is coerced to true

    if(input) {
        winnerScore = input;
    } else {
        winnerScore = 100;
    }

    //Check if the player won the game
    if(scores[activePlayer] >= winnerScore) {
        //display the winner
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        //Stop the game
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        if(document.querySelector('#current-' + activePlayer).textContent > 0) {
        //Next Player
        nextPlayer();   
    }
}
}
});

function nextPlayer() {
    //Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
        
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}

