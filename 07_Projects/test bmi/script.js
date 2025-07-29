const formData = document.querySelector('form')
formData.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#inputH').value);
    // console.log(typeof height)
    const weight = parseInt(document.querySelector('#inputW').value);
    const result = document.querySelector('.result');
    // console.log(result)
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)

    // check conditions
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'enter a vlaid height'
    }
    if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'enter a vlaid weight'
    }
    else {
        result.innerHTML = `Your BMI is : ${bmi}`
    }

    const status = document.createElement('div')
    document.querySelector('.guide').appendChild(status)
    if (bmi < 18) {
        status.innerHTML = 'you are under weight '
    }
    if (bmi > 25) {
        status.innerHTML = 'you are over weight '
    }
    if (bmi > 18 && bmi <= 25) {
        status.innerHTML = 'you are fit '
    }

})