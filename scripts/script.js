// # card front and back
let cardFrontNumber = document.getElementById('cardFrontNumber');
let cardFrontNumber1 = document.getElementById('cardFrontNumber1');
let cardFrontNumber2 = document.getElementById('cardFrontNumber2');
let cardFrontNumber3 = document.getElementById('cardFrontNumber3');
let cardFrontNumber4 = document.getElementById('cardFrontNumber4');
let cardNumber =
  cardFrontNumber1.innerHTML +
  cardFrontNumber2.innerHTML +
  cardFrontNumber3.innerHTML +
  cardFrontNumber4.innerHTML;

let cardFrontName = document.getElementById('cardFrontName');

let cardFrontExpMonth = document.getElementById('cardFrontExpMonth');
let cardFrontExpYear = document.getElementById('cardFrontExpYear');
let cardBackCvc = document.getElementById('cardBackCvc');

// # card INPUTS
let inputCardName = document.getElementById('cardHolderName');
let inputCardNumber = document.getElementById('cardNumber');
let inputExpMonth = document.getElementById('cardExpMonth');
let inputExpYear = document.getElementById('cardExpYear');
let InputCvc = document.getElementById('cvc');

// # confirm button
let confirmBtn = document.getElementById('confirmBtn');

// ! validation functions
function validateCardHolderName(i) {
  let regx = /^[a-zA-z\s]{3,}$/;
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
    if ((i.length = 16)) {
      console.log('valid card number');
      return true;
    }
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

function validateExpYear(i) {
  let regx = /^[2-3]{1}[3-9]{1}$/;
  if (regx.test(i)) {
    console.log('valid year');
    return true;
  } else {
    console.log('invalid year');
    return false;
  }
}

function validateCvc(i) {
  let regx = /^[0-9]{3}$/;
  if (regx.test(i)) {
    console.log('valid cvc');
  } else {
    console.log('invalid cvc');
  }
}

inputCardName.addEventListener('input', function (e) {
  // console.log(e.target.value);
  cardFrontName.innerHTML = e.target.value;
});

inputCardNumber.addEventListener('input', function (e) {
  console.log(e.target.value);
  cardFrontNumber1.innerHTML = e.target.value.slice(0, 4);
  cardFrontNumber2.innerHTML = e.target.value.slice(4, 8);
  cardFrontNumber3.innerHTML = e.target.value.slice(8, 12);
  cardFrontNumber4.innerHTML = e.target.value.slice(12, 16);
});

confirmBtn.addEventListener('click', function () {
  validateCardHolderName(inputCardName.value);
  validateCardNumber(Number(inputCardNumber.value));
  validateExpMonth(inputExpMonth.value);
  validateExpYear(inputExpYear.value);
  validateCvc(InputCvc.value);
});
