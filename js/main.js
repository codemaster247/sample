
/*
setTimeout(wakeUpUser, 5000);
function wakeUpUser() {
  alert("Are you going to stare at this boring page");


}
var scoop = 5;

while (scoop > 0) {
  document.write("Another scoop <br>");
  scoop = scoop - 1;
}
document.write("Life without ice cream isn't fun");



function sumSquare(n) {

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += (i*i);
  }
  return sum;
}

console.log(sumSquare(5));


var name = "Joe";
var i = 0;

while (i < 2) {
  document.write("<br>Happy Birthday to you, <br>");
  i = i + 1;
}

document.write("Happy Birthday Dear" + name + ",<br>");
document.write("Happy Birthday to you. <br>");
*/


/*
var word = "bottles";
var count = 99;

while (count > 0 ) {
  console.log(count + " " + word + " of beer on the wall ");
  console.log(count + " " + word  + " of beer,");
  console.log("take one down, pass it around");
  count = count - 1;

  if (count > 0 ) {
    console.log(count + " " + word + " of beer on the wall ");
  } else {
    console.log("No more " + word + " of beer on the wall");
  }
}
*/

// function bark(name, weight) {
//   if (weight > 23) {
//     console.log(name + "says WOOF WOOF");
//   }
//   else {
//     console.log(name + "says woof woof");
//   }
// }
//
// bark("rover", 25);
// bark("rex", 18);
// bark("black", 28);
// bark("celtic", 10);
// bark("bruno", "20");

// function triArea(base, height) {
//   return (base * height) / 2;
// }
//
// b = prompt("Insert the base");
// h = prompt("Insert the height");
//
// alert("Area of triangle is " + triArea(b, h));

//
// function howManySeconds(hours) {
//   return hours * 3600;
// }
//
//
// console.log(howManySeconds(2));
// console.log(howManySeconds(10));
// console.log(howManySeconds(3));
// console.log(howManySeconds(1));
// console.log(howManySeconds(0.5));
// console.log(howManySeconds(24));
// const helloName = name => name;
//
// console.log("Hello " + helloName('Ivan'));


// function doIt(param) {
//   param = 2;
// }
//
// var testIt = 1;
// doIt(testIt);
// console.log(testIt);
// var balance = 10500;
// var cameraOn = true;
//
// function steal(balance, amount) {
//   cameraOn = false;
//   if (amount < balance) {
//     balance = balance - amount;
//
//   }
//   return amount;
//   cameraOn = true;
// }
//
// var amount = steal(balance, 1250);
// alert(" Criminal: you stole " + amount + " ! ");
//
// function per_rectangle(height, width) {
//   return 2 * height + 2 * width;
// }
//
// console.log(per_rectangle(2, 4));
// console.log(per_rectangle(6, 7));
//
// function remainder(dividendo, divisor) {
//   return dividendo % divisor;
// }
//
// console.log(remainder(1,3));
// console.log(remainder(5,5));
// console.log(remainder(-9, 45));
// console.log(remainder(3, 4));

// function setObject(){
//   var numObjects = ['hammer', 'notebook', 'pen', 'pencil', 'ruler'];
//   numObjects[2] = 'book'
//   var objects = numObjects[2];
//   for (var i = 0; i < numObjects.length; i++) {
//     numObjects[i];
//   }
//   return numObjects;
// }
//
// console.log(setObject())
//
// function firstValue(array){
//   var array = [1, 2, 3];
//   var index = array[0];
//   return index;
// }
//
// console.log(firstValue());

// function and(a, b ){
//   var a = true;
//   var b = true;
//
//   return a && b;
// }
//
//
// console.log(and());



// function flavours (products, hasBubbleGum ) {
//   var products = [ "Choo Choo Chocolate", "Icy Mint" ,
//                    "Cake Batter", "Bubblegum" ];
//
//   var hasBubbleGum = [ false,
//                        false,
//                        false,
//                        true ]
//   for (var i = 0; i < hasBubbleGum.length; i++) {
//     if (hasBubbleGum[i]) {
//       console.log(products[i] + " contains bubblegum. ")
//     }
//
//   }
// }
//
// flavours();


//
// function bubble (score) {
//   var score = [ 60, 50, 60, 58,
//                 54, 54, 58, 50,
//                 52, 54, 48, 69,
//                 34, 55, 51, 52,
//                 44, 51, 69, 64,
//                 66, 55, 52, 61,
//                 46, 31, 57, 52,
//                 44, 18, 41, 53,
//                 55, 61, 51, 44,
//               ];
//
//   for (let i = 0; i < score.length; i++) {
//     console.log("Bubble Solution # " + i + " Score: " + score[i]);
//   }
//   console.log("Bubbles scores: " + score.length);
// }
//

// bubble();
//
// function posCom(num) {
//   return Math.pow(2,num);
// }
// var number = posCom(number);
// console.log("Pos Com " + posCom(3));

// Creating a taxi object
// var taxi = {
//   make: "Webville Motors",
//   model: "Taxi",
//   year: 1965,
//   color: "yellow",
//   passengers: 4,
//   convertible: false,
//   mileage: 281341,
// };

// creating a prequalification function that takes the
// object taxi as a parameter and check if car is qualified or not
// function prequal(taxi){
//   // condition to check the car qualification
//   if (taxi.mileage > 10000) {
//     return false;
//   } else if ( car.year > 1960) {
//     return false;
//   }
//   return true;
// }
//
// var worthALook = prequal(taxi);
//
// if (worthALook) {
//   console.log("You gotta check out this " + taxi.make + " " + taxi.model);
// }else {
//   console.log("You should pass on the " + taxi.make + " " + taxi.model);
// }
//
// console.log(taxi);


// function arrayMul(num, length) {
//
//   var arr = [];
//
//   for (var i = 1; i <= length ; i++) {
//     var number = num * i;
//     arr.push(number);
//     }
//     return arr;
// }
//
// console.log(" Multiples: "+ arrayMul(7,5));


// var dog = {
//   name: "fido",
//   weight: 48,
//   breed: "mixed",
//   loves: "walks",
// };
//
// function loseWeight(dog, amount) {
//   dog.weight = dog.weight - amount;
// }
//
// console.log(fido.name + " now weighs " + fido.weight);


var song = {
  name: "Wake this way",
  artist: "Run-D.M.C",
  minutes: 4,
  seconds: 3,
  genre: "Pop",
  playing: false,

  play: function(){ //assign a function to a property object 
    if(!this.playing) {
      this.playing = true;
      console.log(" Playing " + song.name + " by " + song.artist);
    }
  },
  pause: function() {
      this.playing = false;
      console.log("Play a Song !!!");
  },
};



song.pause();
