const drum = document.querySelectorAll('.drum');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

const dMusic = new Audio('sounds/crash.mp3');
const rMusic = new Audio('sounds/kick-bass.mp3');
const uMusic = new Audio('sounds/snare.mp3');
const mMusic = new Audio('sounds/tom-1.mp3');
const iMusic = new Audio('sounds/tom-2.mp3');
const nMusic = new Audio('sounds/tom-3.mp3');
const gMusic = new Audio('sounds/tom-4.mp3');

// # for clicking on box

function checkClick(e) {
  let click = e.target.innerText;

  switch (click) {
    case 'D':
      dMusic.play();
      break;

    case 'R':
      rMusic.play();
      break;

    case 'U':
      uMusic.play();
      break;

    case 'M':
      mMusic.play();
      break;

    case 'I':
      iMusic.play();
      break;

    case 'N':
      nMusic.play();
      break;

    case 'G':
      gMusic.play();
      break;

    default:
      console.log('wrong box clicked');
  }
}

drum.forEach(element => {
  element.addEventListener('click',checkClick)
});

// # For music play and pause

let randomNum = Math.floor(Math.random() * 10) + 1;
// console.log('music' + randomNum + '.mp3');
let musics = new Audio('musics/music' + randomNum + '.mp3');

play.addEventListener('click', () => {
  musics.play();
});

pause.addEventListener('click', () => {
  musics.pause();
});

// # for pressing keys value 

function checkKeyPress(e) {
  let keys = e.key;

  switch (keys) {
    case 'd':
      dMusic.play();
      break;

    case 'r':
      rMusic.play();
      break;

    case 'u':
      uMusic.play();
      break;

    case 'm':
      mMusic.play();
      break;

    case 'i':
      iMusic.play();
      break;

    case 'n':
      nMusic.play();
      break;

    case 'g':
      gMusic.play();
      break;
    
    default:
      console.log('wrong key pressed')
  }
}

document.addEventListener('keypress', checkKeyPress)