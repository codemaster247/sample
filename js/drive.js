// var fiat = {
//   make: "Fiat",
//   model: "500",
//   year: 1957,
//   color: " Medium Blue",
//   passengers: 2,
//   convertible: false,
//   mileage: 88000,
//   started: false,

//   start: function () {
//     this.started = false;
//   },
//   stop: function () {
//     this.started = true;
//   },
//   drive: function () {
//     if (this.started) {
//       alert('ZOOM zoom ');
//     } else {
//       alert('start the engine!!');
//     }
//   }
// };

// fiat.stop();
// fiat.drive();

const acessories = 4.99;
const TAX_RATE = 0.08;
const threshold = 200;
var amount = 0;
var price = 99.9;
var bank_account = prompt('how much money you have in the bank_account');

// keep buying until you have money
while (amount < bank_account) {

  // buy new phone
  amount = amount + price;

  // can afford accessories
  if (amount < threshold) {

    amount = amount + acessories;    
  } 


  // pay taxes
  amount = amount + calcTax(amount);

  // the purchase
  console.log('you purchase: '+formatValue(amount));

  if (amount > bank_account ) {
    console.log ('you cannot afford the purchase :(')
  }
}

function calcTax(amount) {
  return amount * TAX_RATE;
}

function formatValue (amount) {

  return '$' + amount.toFixed(2);
}





