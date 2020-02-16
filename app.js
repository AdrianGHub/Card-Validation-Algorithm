import checkCardNumber from './card-checker';


// console.log(cardChecker('4111111111111111'));



const form = document.querySelector('form');
const cardNameInput = document.querySelector('.card-number');
const submitBtn = document.querySelector('.submit-btn');
const errorEl = document.querySelector('.error');

document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();

    switch(true) {
        case cardNameInput.value.replace(/\s+/g, '').length < 13 :
            errorEl.classList.add('red')
            errorEl.innerText = 'Numer karty musi zawierać od 13 do 16 cyfr';
            break;
        case cardNameInput.value.replace(/\s+/g, '').length > 16 :
            errorEl.classList.add('red');
            errorEl.innerText = 'Numer karty musi zawierać od 13 do 16 cyfr';
            break;
        default: 
            errorEl.classList.remove('red');
            errorEl.innerText = '';
    }
    
    checkCardNumber(cardNameInput.value);

})