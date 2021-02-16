
var texto = document.getElementById('texto');
texto.innerHTML = "You are practising HTML";

var container = document.querySelector('body .container');
var p = document.querySelector('.container p');

var newDiv = document.createElement('div');
newDiv.className = 'second-container';
newDiv.setAttribute('id', 'container');

var newDivText = document.createTextNode('keep practising');
newDiv.appendChild(newDivText);

container.insertBefore(newDiv, p);
newDiv.style.fontSize = '30px';
newDiv.style.fontWeight = 'bolder';
newDiv.style.backgroundColor = 'yellow';

//criar elemento
var newHeading = document.createElement('h1');
// criar texto para inserir no elemento
var newHeadingText = document.createTextNode('JavaScript');
//adicionar conteudo ao elemento criado
newHeading.appendChild(newHeadingText);

var h1 = document.querySelector('.container h1');
// inserir elemento
container.insertBefore(newHeading, h1);

newHeading.style.fontSize = "50px";
newHeading.style.color= "blue";


console.log(newHeading);



console.log(newDiv);
