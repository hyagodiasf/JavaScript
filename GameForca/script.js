const keyboard = document.querySelector('.keyboard');
const key_word = document.querySelector('.key-word');

const randomList = () => {
    const { palavra, dica } = listaPalavra[Math.floor(Math.random()  * listaPalavra.length)];
    document.querySelector('.hint-text b').innerHTML = dica;
    key_word.innerHTML = palavra.split("").map(() => `<li class="letters"></li>`).join('');
}

const iniGame = (button, clickLetter) => {
    console.log(button, clickLetter);
}

for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    keyboard.appendChild(button);
    button.addEventListener('click', e => iniGame(e.target, String.fromCharCode(i)));   
}

randomList()