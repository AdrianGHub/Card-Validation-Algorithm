import checkCardNumber from './card-checker';


// console.log(cardChecker('4111111111111111'));




const form = document.querySelector('form');
const cardNameInput = document.querySelector('.card-number');
const submitBtn = document.querySelector('.submit-btn');
const errorEl = document.querySelector('.error');
const result = document.querySelector('.result');

document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();
    let messages = [];
    switch(true) {
        case cardNameInput.value.replace(/\s+/g, '').length < 13 :
            messages.push('Numer karty musi zawierać od 13 do 16 cyfr');
            break;
        case cardNameInput.value.replace(/\s+/g, '').length > 16 :
            messages.push('Numer karty musi zawierać od 13 do 16 cyfr');
            break;
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorEl.innerText = messages.join(', ')
    }
    
    if(checkCardNumber) {
        result.innerText = checkCardNumber(cardNameInput.value);
    } else {
        result.innerText = 'Niepoprawny numer karty';
    }
    
})