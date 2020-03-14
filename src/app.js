import checkCardNumber from './card-checker';


// console.log(cardChecker('4111111111111111'));


const cardNameInput = document.querySelector('.card-number');
const errorEl = document.querySelector('.error');
const regexReplace = cardNameInput.value.replace(/\s+/g, ''); 

document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();

    switch(true) {
        case regexReplace.length < 13 :
            errorEl.classList.add('red')
            errorEl.innerText = 'Numer karty musi zawierać od 13 do 16 cyfr';
            break;
        case regexReplace.length > 16 :
            errorEl.classList.add('red');
            errorEl.innerText = 'Numer karty musi zawierać od 13 do 16 cyfr';
            break;
        default: 
            errorEl.classList.remove('red');
            errorEl.innerText = '';
    }
    
    checkCardNumber(cardNameInput.value);

})