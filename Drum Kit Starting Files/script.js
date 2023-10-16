const drums = document.querySelectorAll(".drum");

const audioFiles = [
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3",
  "./sounds/snare.mp3",
  "./sounds/crash.mp3",
  "./sounds/kick-bass.mp3",
];

for (let index = 0; index < drums.length; index++) {
  const element = drums[index];
  element.addEventListener("click", () => {
    btnAnimation(element.innerHTML);
    const audio = new Audio(audioFiles[index]);
    audio.play();
  });
}

document.addEventListener("keypress", (event) => {
  btnAnimation(event.key);
  switch (event.key) {
    case "w":
      const tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      const tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      const tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      const tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      const snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      const crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      const kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      break;
  }
});

const btnAnimation = (currentKey) => {
  const activatedKey = document.querySelector("." + currentKey);
  activatedKey.classList.add("pressed");
  setTimeout(() => {
    activatedKey.classList.remove("pressed");
  }, 100);
};
