
let preSetNumber = Math.round(Math.random() * 100)
// console.log(typeof preSetNumber);
let inputNumber = document.querySelector('#userInput')

const submit = document.querySelector('#submitBtn');
const statusBar = document.querySelector('#alert')
const preArray = document.querySelector('#preAttempts')
const attempts = document.querySelector('#attempts')

// console.log(attempts)

let array = [];
let limit = 0;
// console.log(preArray)
// displayMessage('fbvfg')
// console.log(submit)
// console.log(inputNumber)
let playGame = true
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const input = parseInt(inputNumber.value)
        // console.log(input)
        validateInputNumber(input);
    });
};
function validateInputNumber(input) {
    if (isNaN(input)) {
        statusBar.innerHTML = 'enter a valid number'
    } else if (input < 0) {
        statusBar.innerHTML = 'enter a number grater than 0'
    } else if (input > 100) {
        statusBar.innerHTML = 'enter a number less than 100'
    }
    else {
        array.push(input)
        if (limit === 9) {
            limitincrement(input); // seprate fn to increate value at every attempt
            statusBar.innerHTML = `game Over you Lost value was ${preSetNumber}`
            endGame();
        } else {
            limitincrement(input);
            compareInput(input);
        }
    }
    function compareInput(input) {
        if (input === preSetNumber) {
            statusBar.innerHTML = `you won !! value was: ${input}`
            endGame();
        } else if (input < preSetNumber) {
            statusBar.innerHTML = 'the input is too low'
        }
        else if (input > preSetNumber) {
            statusBar.innerHTML = 'the input is too high'
            // preAttempts.innerHTML += `${input}`
        }
    }
    function limitincrement(input) {
        inputNumber.value = '';
        preArray.innerHTML += `${input}, `
        limit++;
        attempts.innerHTML = `${10 - limit}`
    }
    function endGame(input) {
        inputNumber.value = '';
        inputNumber.setAttribute('disabled', '')
        playGame = false
        newGame();
    }
    function newGame() {
        let playAgainBt = document.querySelector('#reset')
        playAgainBt.addEventListener('click', function (e) {
            preSetNumber = Math.round(Math.random() * 100)
            array = [];
            limit = 0;
            inputNumber.value = '';
            preArray = '';
            attempts='';
            inputNumber.removeAttribute('disabled')
            playGame = true

        })
    }
};
