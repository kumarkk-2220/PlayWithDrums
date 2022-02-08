let numOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let keyPressed = this.innerHTML;
    makeSound(keyPressed);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3").play();
      break;

    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3").play();
      break;

    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3").play();
      break;

    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3").play();
      break;

    case "k":
      let crash = new Audio("./sounds/crash.mp3").play();
      break;

    case "l":
      let kick = new Audio("./sounds/kick-bass.mp3").play();
      break;

    case "j":
      let snare = new Audio("./sounds/snare.mp3").play();
      break;

    default:
      let snare1 = new Audio("./sounds/snare.mp3").play();
  }
}
