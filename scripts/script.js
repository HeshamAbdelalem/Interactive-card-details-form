// # card front and back
let cardFrontNumber = document.getElementById('cardFrontNumber');
let cardFrontNumber1 = document.getElementById('cardFrontNumber1');
let cardFrontNumber2 = document.getElementById('cardFrontNumber2');
let cardFrontNumber3 = document.getElementById('cardFrontNumber3');
let cardFrontNumber4 = document.getElementById('cardFrontNumber4');
let cardNumber;

let cardFrontName = document.getElementById('cardFrontName');

let cardFrontExpMonth = document.getElementById('cardFrontExpMonth');
let cardFrontExpYear = document.getElementById('cardFrontExpYear');
let cardBackCvc = document.getElementById('cardBackCvc');

// # card INPUTS
let inputCardName = document.getElementById('cardHolderName');
let inputCardNumber = document.getElementById('cardNumber');
let inputExpMonth = document.getElementById('cardExpMonth');
let inputExpYear = document.getElementById('cardExpYear');
let inputCvc = document.getElementById('cvc');

// # confirm button
let confirmBtn = document.getElementById('confirmBtn');

// cardFrontName.innerHTML = '';
// ardFrontNumber.innerHTML = '';

// cardFrontExpMonth.innerHTML = '';
// cardFrontExpYear.innerHTML = '';
// cardBackCvc.innerHTML = '';

// ! validation functions
function validateCardHolderName(i) {
  let regx = /^[a-zA-z\s]{3,}$/;
  if (regx.test(i)) {
    console.log('the name ok');
    document.querySelector('#cardHolderName + p').innerHTML = '';
    return true;
  } else {
    console.log('the name should be like this: ali sayed');
    document.querySelector('#cardHolderName + p').innerHTML =
      'not valid card name';
    return false;
  }
}

function validateCardNumber(i) {
  let regx = /^[0-9]{16}$/;
  if (regx.test(i)) {
    if (i.length == 16) {
      console.log('valid card number');
      document.querySelector('#cardNumber + p').innerHTML = '';
      return true;
    }
  } else {
    document.querySelector('#cardNumber + p').innerHTML =
      'not valid card number';
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
      document.querySelector('#cardExpMonth + p').innerHTML = 'not valid';
      return false;
    } else {
      document.querySelector('#cardExpMonth + p').innerHTML = '';
      return true;
    }
  } else {
    console.log('not valid month!! , ex: 05,12');
    document.querySelector('#cardExpMonth + p').innerHTML = 'not valid';

    return false;
  }
}

function validateExpYear(i) {
  let regx = /^[2-3]{1}[3-9]{1}$/;
  if (regx.test(i)) {
    console.log('valid year');
    document.querySelector('#cardExpYear + p').innerHTML = '';

    return true;
  } else {
    console.log('invalid year');
    document.querySelector('#cardExpYear + p').innerHTML = 'not valid';

    return false;
  }
}

function validateCvc(i) {
  let regx = /^[0-9]{3}$/;
  if (regx.test(i)) {
    console.log('valid cvc');
    document.querySelector('#cvc + p').innerHTML = '';

    return true;
  } else {
    document.querySelector('#cvc + p').innerHTML = 'not valid';
    console.log('invalid cvc');
    return false;
  }
}

inputCardName.addEventListener('input', function (e) {
  // console.log(e.target.value);
  validateCardHolderName(inputCardName.value);
  cardFrontName.innerHTML = e.target.value;
});

inputCardNumber.addEventListener('input', function (e) {
  validateCardNumber(cardNumber);

  console.log(e.target.value);
  cardFrontNumber1.innerHTML = e.target.value.slice(0, 4);
  cardFrontNumber2.innerHTML = e.target.value.slice(4, 8);
  cardFrontNumber3.innerHTML = e.target.value.slice(8, 12);
  cardFrontNumber4.innerHTML = e.target.value.slice(12, 16);
  cardNumber =
    cardFrontNumber1.innerHTML +
    cardFrontNumber2.innerHTML +
    cardFrontNumber3.innerHTML +
    cardFrontNumber4.innerHTML;
  if (cardNumber.length > 16) {
    cardNumber.slice(0, 16);
  }
});

inputExpMonth.addEventListener('input', function (e) {
  if (e.target.value.length > 2) {
    console.log('month should be 2 digit');
    validateExpMonth(inputExpMonth.value);

    cardFrontExpMonth.innerHTML = e.target.value;
    return false;
  }
});

confirmBtn.addEventListener('click', function () {
  if (
    validateCardHolderName(inputCardName.value) &&
    validateCardNumber(cardNumber) &&
    validateExpMonth(inputExpMonth.value) &&
    validateExpYear(inputExpYear.value) &&
    validateCvc(inputCvc.value)
  ) {
    let cardInfo = [];
    let card = {
      name: inputCardName.value,
      number: cardNumber,
      month: inputExpMonth.value,
      year: inputExpYear.value,
      cvc: inputCvc.value,
    };
    cardInfo.push(card);

    localStorage.setItem('cardInfo', JSON.stringify(cardInfo));

    window.location = 'goodjob.html';
  }
});
