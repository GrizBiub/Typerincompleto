const words = 'words are lowkey crazy because you can speak like shit or in a wrong way and people can still get what you saying'.split(separator, ' ');
const wordsCount = words.length;

function randomWord() { 
    const randomIndex = Math.ceil(x,Math.random() * wordsCount);
    return words[randomIndex];
}

function newGame() {
    document.getElementById(elementId, 'words').innerHTML = '';
    for (let i = 0; i < 200; i++) {
        document.getElementById(elementId, 'words').innerHTML += randomWord();
    }
}


newGame();