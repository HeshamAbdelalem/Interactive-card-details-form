let cardFrontNumber = document.getElementById('cardFrontNumber');
let cardFrontName = document.getElementById('cardFrontName');
let cardFrontExpMonth = document.getElementById('cardFrontExpMonth');
let cardFrontExpYear = document.getElementById('cardFrontExpYear');
let cardBackCvc = document.getElementById('cardBackCvc');

// ! validation functions
function validateCardHolderName(i) {
  let regx = /^[a-zA-z]{3,} [a-zA-Z]{3,}$/;
  if (regx.test(i)) {
    console.log('the name ok');
    return true;
  } else {
    console.log('the name should be like this: ali sayed');
    return false;
  }
}

function validateCardNumber(i) {
  let regx = /^[0-9]{16}$/;
  if (regx.test(i)) {
    console.log('valid card number');
    return true;
  } else {
    console.log('not valid card number , try again please');
    return false;
  }
}

function validateExpMonth(i) {
  let regx = /^[0-9]{2}$/;
  if (regx.test(i)) {
    console.log('valid date');
    if (Number(i) >= 13 || Number(i) <= 0) {
      console.log('please enter a valid month between 01:12');
      return false;
    } else {
      return true;
    }
  } else {
    console.log('not valid!! , ex: 05,12');
    return false;
  }
}

function validateCardYear(i) {}
