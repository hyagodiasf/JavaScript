const keyboard = document.querySelector('.keyboard');

const randomList = () => {
    const { palavra, dica } = listaPalavra[Math.floor(Math.random() * listaPalavra.length)];
    console.log(palavra, dica);
}

for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    keyboard.appendChild(button);   
}

randomList()