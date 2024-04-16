//detecting button press

var numberOfDrumButtons = document.querySelectorAll('.drum').length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

//detecting key press

document.addEventListener('keypress', function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(Key) {
  switch (Key) {
    case 'w':
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play(); // Fix: play the tom1 audio object

      break;
    case 'a':
      var tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play(); // Fix: play the tom2 audio object

      break;
    case 's':
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play(); // Fix: play the tom3 audio object

      break;
    case 'd':
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play(); // Fix: play the tom4 audio object

      break;
    case 'j':
      var crash = new Audio('./sounds/crash.mp3');
      crash.play(); // Fix: play the crash audio object

      break;
    case 'k':
      var kick = new Audio('./sounds/kick-bass.mp3');
      kick.play(); // Fix: play the kick audio object

      break;
    case 'l':
      var snare = new Audio('./sounds/snare.mp3');
      snare.play(); // Fix: play the snare audio object

      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}

//button animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);

  activeButton.classList.add('pressed');

  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}

/* so this code is gonna listen to the whole document so a alert message will be shown if a button is pressed.

document.addEventListener('keypress', function () {
  alert('Key was pressed!');
});'

*/
