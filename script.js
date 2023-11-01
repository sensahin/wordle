const boardRows = document.querySelectorAll('.row');
const guessInput = document.getElementById('guess-input');
const submitGuessButton = document.getElementById('submit-guess');

const WORDS = ["ceviz", "armut", "limon", "kiraz", "kavun"]; // Türkçe kelimeler listesi
const targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];

let currentRow = 0;

submitGuessButton.addEventListener('click', () => {
    const guess = guessInput.value.toLowerCase();

    if (guess.length !== 5) {
        alert('Lütfen 5 harfli bir kelime girin.');
        return;
    }

    for (let i = 0; i < 5; i++) {
        const cell = document.createElement('div');
        cell.textContent = guess[i];

        if (guess[i] === targetWord[i]) {
            cell.style.backgroundColor = 'green'; // Doğru harf, doğru yer
        } else if (targetWord.includes(guess[i])) {
            cell.style.backgroundColor = 'yellow'; // Doğru harf, yanlış yer
        } else {
            cell.style.backgroundColor = 'gray'; // Harf kelime içinde değil
        }

        boardRows[currentRow].appendChild(cell);
    }

    currentRow++;

    if (guess === targetWord || currentRow === 6) {
        setTimeout(() => {
            alert(guess === targetWord ? 'Tebrikler! Kazandınız!' : 'Üzgünüm, kaybettiniz. Doğru kelime: ' + targetWord);
            location.reload();
        }, 1000);
    }

    guessInput.value = '';
});

