// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

//luhnify any array
const luhnifyNumber = cardNum => {
    let numSum = 0;
    for(let i = cardNum.length-1; i>=0; i--){
        let currentNum = cardNum[i];

        //card length minus i in oder to count card numbers from 0
        if((cardNum.length -1 -i)%2===1){
            currentNum *= 2;
            if(currentNum >9){
                currentNum -= 9;
            }
        }
        numSum += currentNum;
    }
    return numSum;
}

//validate card
const validateCred=credNum=>{
   return luhnifyNumber(credNum)%10 === 0;
};

//find invalid cards in an array
const findInvalidCards=credArray=>{
  let invalidCards = [];
  for (let i=0; i<=nestArr.length-1;i++){
   if(!validateCred(credArray[i]))
    invalidCards.push(credArray[i]);
  };
  return invalidCards;
};
//console.log(findInvalidCards(batch));

const idInvalidCardCompanies=(nestArr)=>{
    let companies = [];
    let invalidNumber = [];
    for(let i=0; i<=nestArr.length-1;i++){
    let cardNumber = nestArr[i];
    if(validateCred(cardNumber)===false){
        invalidNumber.push(cardNumber);
    }};
        for(let j of invalidNumber){
           if((j[0]===3 && !companies.includes("Amex (American Express)"))){
            companies.push("Amex (American Express)");
           } else if ((j[0]===4 && !companies.includes("Visa"))){
            companies.push("Visa"); 
           } else if ((j[0]===5 && !companies.includes("Mastercard"))){
            companies.push("Mastercard");  
           } else if ((invalidNumber[0]===6 && !companies.includes("Discover"))){
            companies.push("Discover"); 
           } else {
            console.log('Company not found');
           };

    };
    return companies;
};
//console.log(idInvalidCardCompanies(batch));

//create a function that accepts a string and converts it into an array of numbers like the initially provided arrays. (Check the hint for a helpful function)
const arrayNumbers = credString => {
 let numberArray = [];
 let strNumbers = credString.split('');
 for (let i=0; i < strNumbers.length; i++){
    numberArray.push(parseInt(strNumbers[i]));
 }
 return numberArray;
};

//turns invalid card number into valid card number, keeping first digit
const fixInvalidCard = invalidCard => {
  let newCard = invalidCard;
  newCard.pop();

  //check if 0 as last digit makes it valid
  newCard.push(0);
  let lastDigit = luhnifyNumber(newCard);
  if(lastDigit % 10 === 0){
    return newCard;
  } else {
    newCard.pop();
    lastDigit = 10 - (lastDigit % 10);
    newCard.push(lastDigit);
    return newCard;
  }
};


