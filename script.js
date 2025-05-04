let score = JSON.parse(localStorage.getItem
    ('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    };

    updateScoreElement();

    function playGame(playerMove){
        const computerMove = pickComputerMove();
        let result = '';
        
        if (playerMove === 'Scissors'){
            if(computerMove === 'Rock'){
            result = 'You lose.';
            }else if(computerMove === 'Paper'){
                result = 'You won!';
            }else{
                result = 'Tie';
            }

        }else if(playerMove === 'Rock'){
            if(computerMove === 'Rock'){
                result = 'Tie.';
            }else if(computerMove === 'Paper'){
                result =  'You lose.';
            }else{
                result = 'You won!';
            }
            
        }else{
            if(computerMove === 'Rock'){
                result = 'You won!';
            }else if(computerMove === 'Paper'){
                result = 'Tie';
            }else{
                result = 'You lose.';
            }
        }

        if(result == 'You won!'){
            score.wins += 1;
        }else if(result == 'You lose.'){
            score.losses += 1;
        }else{
            score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move">
    <img src="images/${computerMove}-emoji.png" class="move">
    Computer `;

    }

    function updateScoreElement() {
        document.querySelector('.js-score').innerHTML = 
            `Wins ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`;
    }
    
    function pickComputerMove(){
        
        const randomNum = Math.random();
        let computerMove = '';

        if(randomNum >= 0 && randomNum < 1/3){
            computerMove = 'Rock';
        }else if(randomNum >= 1/3 && randomNum < 2/3){
            computerMove = 'Paper';
        }else{
            computerMove = 'Scissors';
        }
        return computerMove;
    }