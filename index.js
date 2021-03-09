let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

const dice1Img = document.querySelector('.img1');
const dice2Img = document.querySelector('.img2');

dice1Img.src = `images/dice${randomNumber1}.png`;
dice2Img.src = `images/dice${randomNumber2}.png`;

let h1 = document.querySelector('h1');

if(randomNumber1 > randomNumber2){
    h1.innerText = 'Player 1 Wins!';
}else if(randomNumber2 > randomNumber1){
    h1.innerText = 'Player 2 Wins!';
}else {
    h1.innerText = 'Draw!';
}
 