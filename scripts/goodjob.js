// # card front and back
let cardFrontNumber = document.getElementById('cardFrontNumber');
let cardFrontName = document.getElementById('cardFrontName');
let cardFrontExpMonth = document.getElementById('cardFrontExpMonth');
let cardFrontExpYear = document.getElementById('cardFrontExpYear');
let cardBackCvc = document.getElementById('cardBackCvc');

let cardInfo = JSON.parse(localStorage.getItem('cardInfo'));

cardFrontName.innerHTML = cardInfo[0].name;
cardFrontNumber.innerHTML = cardInfo[0].number;
cardFrontExpMonth.innerHTML = cardInfo[0].month;
cardFrontExpYear.innerHTML = cardInfo[0].year;
cardBackCvc.innerHTML = cardInfo[0].cvc;
