var scores,roundScore,activePlayer,gameplay;

 init();



document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gameplay)
        {
              dice= Math.floor(Math.random() * 6)+ 1;
    
    //2. display result
    var diceDOM = document.querySelector('.dice');
    
    diceDOM.style.display = 'block';
    diceDOM .src = 'dice-' + dice + '.png';
    
    //update score 
    
    if(dice !== 1)
        {
           roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
    else{
        
        //next player
    nextPlayer();
            
        }
    
    //1.random number
  
    
        
        
        
    }
    
    
    
    
});



document.querySelector('.btn-hold').addEventListener('click',function(){
    
    scores[activePlayer] += roundScore;
    
    
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //Who won the game
    
    if(scores[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent= 'Winner!!';
        document.querySelector('.dice').style.display= 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gameplay = false;
        
    }
    else{
        nextPlayer();
    }
    
    
});



function nextPlayer(){
     //next player
        activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent= '0';
        document.getElementById('current-1').textContent= '0';
        
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        
}



document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    
     scores =[0,0];
    activePlayer = 0;
    roundScore =0;
    gameplay = true;
    
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent= '0';
    document.getElementById('score-1').textContent= '0';
    document.getElementById('current-0').textContent= '0';
    document.getElementById('current-1').textContent= '0';
    document.getElementById('name-0').textContent= 'Player 1';
    document.getElementById('name-1').textContent= 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}