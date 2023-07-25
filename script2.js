const mario = document.querySelector ('.mario');
const pipe = document.querySelector('.pipe');

const TextoPontuacao = document.querySelector('h1')

var pontuacao = 0

var vivo = true

setInterval(function(){

    if (vivo){
        pontuacao++

        TextoPontuacao.innerHTML = pontuacao
    }

}, 1500);

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      
    vivo = false

    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './MarioGame-Over.png';
    mario.style.width = '100px'
    mario.style.marginLeft = '15px'

    clearInterval(loop);

    }

}, 10)

document.addEventListener('keydown', jump);