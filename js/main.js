
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
