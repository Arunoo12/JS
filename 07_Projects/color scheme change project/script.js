let buttons = document.querySelectorAll('.button')
console.log(buttons)
// now button is nodelist and we can apply foreach on nodelist beacuse of prototype inspection
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        if (event.target.id === 'blue') {
            document.body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'grey') {
            document.body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'red') {
            document.body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'yellow') {
            document.body.style.backgroundColor = event.target.id
        }
    })
})

let homeBt = document.querySelectorAll('.homeButton')
console.log(homeBt)
homeBt.forEach(function (a) {
    a.addEventListener('click', function (b) {
        console.log(b.target.id)

        document.body.style.backgroundColor = b.target.id

    })
})