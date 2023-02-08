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

drum.forEach(element => {
  element.addEventListener('click', (e) => {
    playMusic(e.target.innerText.toLowerCase());
    clickAnimation(e.target.innerText.toLowerCase());
  })
});

// # for pressing keys value 

document.addEventListener('keypress', (e) => {
  playMusic(e.key);
  clickAnimation(e.key);
})

// # Main function for playing sounds

function playMusic(element) {

  switch (element) {
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

// # animation of clicking

function clickAnimation(value) {
  let btn = document.querySelector('.' + value);

  btn.classList.add('pressed');

  setTimeout(() => {
    btn.classList.remove('pressed');
  }, 100);
}

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