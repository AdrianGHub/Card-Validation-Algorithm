import checkCardNumber from './cardChecker';


// console.log(cardChecker('4111111111111111'));


const cardNameInput = document.querySelector('.card_input');
const errorEl = document.querySelector('.error');
let regexReplace = cardNameInput.value.replace(/\s+/g, ''); 

document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();

    switch(true) {
        case cardNameInput.value.replace(/\s+/g, '').length < 13 :
            errorEl.classList.add('error')
            errorEl.innerText = 'Numer karty nie może zawierać poniżej 13 cyfr';
            setInterval(() => errorEl.innerText = '', 5000);
            break;
        case cardNameInput.value.replace(/\s+/g, '').length > 16 :
            errorEl.classList.add('error');
            errorEl.innerText = 'Numer karty nie może zawierać powyżej 16 cyfr';
            setInterval(() => errorEl.innerText = '', 5000);
        break;
        default: 
            errorEl.classList.remove('error');
            errorEl.innerText = '';
    }
    
    checkCardNumber(cardNameInput.value);

})

cardNameInput.addEventListener('click', (e) => e.target.value = '');