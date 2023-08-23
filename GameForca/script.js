const keyboard = document.querySelector('.keyboard');
const key_word = document.querySelector('.key-word');

let palavraAtual, errado = 0;
const total = 6;

const randomList = () => {
    const { palavra, dica } = listaPalavra[Math.floor(Math.random() * listaPalavra.length)];
    document.querySelector('.hint-text b').innerHTML = dica;
    palavraAtual = palavra;
    key_word.innerHTML = palavra.split("").map(() => `<li class="letters"></li>`).join('');
}

const iniGame = (button, clickLetter) => {
    if (palavraAtual.includes(clickLetter)) {
        [...palavraAtual].forEach((letra, index) => {
            if (letra === clickLetter) {
                key_word.querySelectorAll('li')[index].innerText = letra;
                key_word.querySelectorAll('li')[index].classList.add('guessed')
            }
        })
    } else {
        button.disabled = true;
        errado++;
        document.querySelector('.box-forca img').src = `images/forca-${errado}.svg`
    }
    document.querySelector('.guesses-text b').innerText = `${errado} / ${total}`;
    if (errado === total) return gameOver(false);
    if ()
}

for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    keyboard.appendChild(button);
    button.addEventListener('click', e => iniGame(e.target, String.fromCharCode(i)));
}

randomList()