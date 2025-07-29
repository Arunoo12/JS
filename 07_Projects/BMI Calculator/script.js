const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#inputH').value);
    const weight = parseInt(document.querySelector('#inputW').value);
    const result = document.querySelector('.result');
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (height === " " || height < 0 || isNaN(height)) {
        result.innerHTML = 'enter a valid heigth';
    }
    if (weight === " " || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'enter a valid weight';
    } else {
        //    bmi.innerHTML

        //show result
        result.innerHTML = `<span>${bmi}</span>`
    }
    let newTag = document.createElement('span')
    // newTag.innerHTML = 'something'
    document.querySelector('.info').appendChild(newTag) // attaching new tag to div
    // div

    // newTag.innerHTML = 'aaaqa'
    // newTag.appendChild('.info')
    if (bmi < 18) {
        newTag.textContent = 'under weight'
    }
    if (bmi > 25) {
        newTag.textContent = 'over weight'
    }
    if (bmi > 18 && bmi < 25) {
        newTag.textContent = 'current status according to your bmi index is : you are fit'
    }

})
