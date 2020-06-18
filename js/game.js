var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (entern a number 0-6)");

  if (guess < 0 || guess > 6) {
    alert("Please enter a valid number");
  } else {

    guesses += 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT");

      hits = hits + 1;
      if (hits == 3) {

        isSunk = true;
        alert("You sank my Battleship");
      }
    }else {
      alert("MISS");
    }
  }

}

var stats = "you took " + guesses + " guesse to sink my Battleship, " +
 "which means you shooting accuracy was " + (3/guesses);

 alert(stats);
