
function checkCardNumber(cardNumber) {

    const result = document.querySelector('.result');

   const clearCardNumber = cardNumber.replace(/\s+/g, ''); 

    if(typeof clearCardNumber !== 'string' || /^\d+$/.test(clearCardNumber) !== true ) {
        throw new Error("Podaj numer karty w postaci liczb.")
    } else {

    const cardNumberArray = clearCardNumber.split('');
    
    const poppedArray = [...cardNumberArray];
    
    const poppedItem = poppedArray.pop();

    const selectionArray = cardNumberArray.slice(0,-1);

    console.log(selectionArray.length);
    
    const multipliedNumberArray = selectionArray.map((num, index) => {
        if(selectionArray.length % 2 !== 0) {
            return index % 2 === 0 ? num * 2 : parseInt(num);
        } else {
            return index % 2 !== 0 ? num * 2 : parseInt(num);
        }
    });
    
    const arrayWithReplacedCommas = multipliedNumberArray.toString().replace(/,/g, '').split('');

    const arrayWithNumValues = arrayWithReplacedCommas.map(num => parseInt(num));

    const reducedNumber = arrayWithNumValues.reduce((total, num) => total += num);

    
  if((reducedNumber + parseInt(poppedItem)) % 10 === 0){
      
      const cardNames = ['Mastercard', 'Visa', 'AmericanExpress'];
      
      let validCardName;

      function isMastercard(clearCardNumber) {
        const isLength = clearCardNumber.length === 16;
        const isPrefix = ['51', '52', '53', '54', '55'].includes(clearCardNumber.substring(0,2));
        return isLength && isPrefix; 
      }

      function isVisa(clearCardNumber) {
        const isLength = clearCardNumber.length === 13 || clearCardNumber.length === 16;
        const isPrefix = clearCardNumber.startsWith('4');
        return isLength && isPrefix; 
      }

      function isAmericanExpress(clearCardNumber) {
        const isLength = clearCardNumber.length === 15;
        const isPrefix = clearCardNumber.startsWith('34') || clearCardNumber.startsWith('37');
        return isLength && isPrefix; 
      }
      
      switch(true) {
          case isMastercard(clearCardNumber):
             validCardName = cardNames[0];
              break;
          case isVisa(clearCardNumber):
              validCardName = cardNames[1];
              break;
          case isAmericanExpress(clearCardNumber):
              validCardName = cardNames[2];
              break;
          default: 
              false;
      }
        const validValue = `Twoja karta jest poprawna. Wydana została przez ${validCardName}`;
        result.classList.remove('error');
        result.classList.add('success');
        result.innerText = validValue;
        setInterval(() => result.innerText = '', 5000);
    } else {
        const invalidValue = 'Niepoprawny numer karty. Spróbuj jeszcze raz.';
        result.classList.remove('success');
        result.classList.add('error');
        result.innerText = invalidValue;
        setInterval(() => result.innerText = '', 5000);
    }
  }
}


export default checkCardNumber;






