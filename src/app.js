import checkCardNumber from './card-checker';


// console.log(cardChecker('4111111111111111'));


const cardNameInput = document.querySelector('.card-number');
const errorEl = document.querySelector('.error');
let regexReplace = cardNameInput.value.replace(/\s+/g, ''); 

document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();

    switch(true) {
        case cardNameInput.value.replace(/\s+/g, '').length < 13 :
            errorEl.classList.add('red')
            errorEl.innerText = 'Numer karty nie może zawierać poniżej 13 cyfr';
            setInterval(() => errorEl.innerText = '', 5000);
            break;
        case cardNameInput.value.replace(/\s+/g, '').length > 16 :
            errorEl.classList.add('red');
            errorEl.innerText = 'Numer karty nie może zawierać powyżej 16 cyfr';
            setInterval(() => errorEl.innerText = '', 5000);
        break;
        default: 
            errorEl.classList.remove('red');
            errorEl.innerText = '';
    }
    
    checkCardNumber(cardNameInput.value);

})