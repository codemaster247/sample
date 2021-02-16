
var score = [ 60, 50, 60, 58,
              54, 54, 58, 50,
              52, 54, 48, 69,
              34, 55, 51, 52,
              44, 51, 69, 64,
              66, 55, 52, 61,
              46, 31, 57, 52,
              44, 18, 41, 53,
              55, 61, 51, 44,
            ];
var costs = [.25, .27, .25, .25, .25, .25,
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .21, .25,
             .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29,
            ];

function printAndGetHighScore(score){

  var highScore = 0;
  for (let i = 0; i < score.length; i++) {
    console.log("Bubble Solution # " + i + " Score: " + score[i]);
    if (score[i] > highScore) {
      highScore = score[i];
    }
  }
  return highScore;
}

var highScore = printAndGetHighScore(score);
console.log("Bubbles scores: " + score.length);
console.log("High Bubble score " + highScore);

function getBestResults(score, highScore){

  var bubbleHigh = [];
  for (var i = 0; i < score.length; i++) {
    if (score[i] == highScore) {
      bubbleHigh.push(i);
    }
  }
  return bubbleHigh;
}


var bubbleHigh = getBestResults(score, highScore);
console.log("Best Solutions: " + bubbleHigh);


function getCosts(score, costs, highScore ){
  var cost = 100;
  var index = 0;

  for (var i = 0; i < score.length; i++) {
    if(score[i] == highScore){
      if (cost > costs[i]) {
        index = [i];
        cost = costs[i];
      }
    }
  }
  return index;
}

var mostCostEffective = getCosts(score, costs, highScore);
console.log("Bubble Solution # " + mostCostEffective + " is the most cost effective");
