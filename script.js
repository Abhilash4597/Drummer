const drum = document.querySelectorAll('.drum');
const d = document.querySelector('.d');
const r = document.querySelector('.r');
const u = document.querySelector('.u');
const m = document.querySelector('.m');
const i = document.querySelector('.i');
const n = document.querySelector('.n');
const g = document.querySelector('.g');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

const dMusic = new Audio('sounds/crash.mp3');
const rMusic = new Audio('sounds/kick-bass.mp3');
const uMusic = new Audio('sounds/snare.mp3');
const mMusic = new Audio('sounds/tom-1.mp3');
const iMusic = new Audio('sounds/tom-2.mp3');
const nMusic = new Audio('sounds/tom-3.mp3');
const gMusic = new Audio('sounds/tom-4.mp3');

function click_d() {
  dMusic.play();
};

function click_r() {
  rMusic.play();
};

function click_u() {
  uMusic.play();
};

function click_m() {
  mMusic.play();
};

function click_i() {
  iMusic.play();
};

function click_n() {
  nMusic.play();
};

function click_g() {
  gMusic.play();
};

d.addEventListener('click', click_d);

r.addEventListener('click', click_r);

u.addEventListener('click', click_u);

m.addEventListener('click', click_m);

i.addEventListener('click', click_i);

n.addEventListener('click', click_n);

g.addEventListener('click', click_g);

let randomNum = Math.floor(Math.random() * 10) + 1;
// console.log('music' + randomNum + '.mp3');
let musics = new Audio('musics/music' + randomNum + '.mp3');
console.log(musics)

play.addEventListener('click', () => {
  musics.play();
});

pause.addEventListener('click', () => {
  musics.pause();
});

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