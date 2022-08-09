const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let btnsubmit = document.getElementById('submit');
let statusH2 = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

/*Guess = vai criar o número que o JS está "pensando"*/
const Guess = {
    max: 10,
    attemptsNuber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max);
    }
};

/*numberDrawn = vai trazer/guardar o número que o JS está "pensando"*/
let numberDrawn = Guess.numberDrawn();

function upDateAttempt(attempt, value){
  attempt.innerHTML = 'Tentativa: ' + value;
};

function handleSubmit(e){
    e.preventDefault();
    
    let kick = document.getElementById('kick').value;

    if(!kick){
        alert('Oops! Parece que você esqueceu de digitar algum número!')
        return;
    };

    upDateAttempt(attempt, ++Guess.attemptsNuber);

    if(numberDrawn == kick){
        playAgain();
        statusH2.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        statusH2.style.color = '#fff';
        btnsubmit.style.display = 'none';
        clear();
    } else if(numberDrawn > kick){
        statusH2.innerHTML = 'O número é maior';
        statusH2.style.color = '#de4251';
        clear();
    } else if(numberDrawn < kick){
        statusH2.innerHTML = 'O número é menor';
        statusH2.style.color = '#de4251';
        clear();
    }
};

function playAgain(){ //Aparecer o botão para jogar novamente
    document.getElementById('btn-restart').style.display = 'flex';
};

function restart(){ //Recarregar a página
    document.location.reload(true);
};

function clear(){ //Limpar o campo kick
    document.getElementById('kick').value = '';
};