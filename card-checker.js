
function checkCardNumber(cardNumber) {

   const clearCardNumber = cardNumber.replace(/\s+/g, ''); 

    if(typeof clearCardNumber !== 'string' || /^\d+$/.test(clearCardNumber) !== true ) {
        throw new Error("Podaj numer karty w postaci liczb.")
    } else {

    const cardNumberArray = clearCardNumber.split('');
    
    const poppedArray = [...cardNumberArray];
    
    const poppedItem = poppedArray.pop();
    
    const multipliedNumberArray = cardNumberArray.slice(0,-1).map((num, index) => index % 2 === 0 ? num * 2 : parseInt(num));
    
    const reducedNumbers = multipliedNumberArray.toString().replace(/,/g, '').split('').map(num => parseInt(num)).reduce((total, num) => total += num);
    
    
  if((reducedNumbers + parseInt(poppedItem)) % 10 === 0) {
      const cardNames = ['Mastercard', 'AmericanExpress', 'Visa'];
      
      let validCardName;
      
      switch(true) {
          case (clearCardNumber.startsWith('51') && clearCardNumber.length === 16) :
             validCardName = cardNames[0];
              break;
          case (clearCardNumber.startsWith('52') && clearCardNumber.length === 16) :
              validCardName = cardNames[0];
              break;
          case (clearCardNumber.startsWith('53') && clearCardNumber.length === 16) :
              validCardName = cardNames[0];
              break;
          case (clearCardNumber.startsWith('54') && clearCardNumber.length === 16) :
              validCardName = cardNames[0];
              break;
          case (clearCardNumber.startsWith('55') && clearCardNumber.length === 16) :
              validCardName = cardNames[0];
              break;
          case (clearCardNumber.startsWith('34') && clearCardNumber.length === 15) :
              validCardName = cardNames[1];
              break;
          case (clearCardNumber.startsWith('37') && clearCardNumber.length === 15) :
              validCardName = cardNames[1];
              break;
          case (clearCardNumber.startsWith('4')  && (clearCardNumber.length === 13 || clearCardNumber.length === 16)):
              validCardName = cardNames[2];
              break;
          default: 
              false;
      }
      return `Twoja karta jest poprawna. Wydał ją ${validCardName}`   
    } else {
        throw new Error('Niepoprawny numer karty. Spróbuj jeszcze raz.')
    }
  }
}

export default checkCardNumber;






