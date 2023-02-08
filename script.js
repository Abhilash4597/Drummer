const drum = document.querySelectorAll('.drum');
const d = document.querySelector('.d');
const r = document.querySelector('.r');
const u = document.querySelector('.u');
const m = document.querySelector('.m');
const M = document.querySelector('.M');
const e = document.querySelector('.e');
const R = document.querySelector('.R');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

const dMusic = new Audio('sounds/crash.mp3');
const rMusic = new Audio('sounds/kick-bass.mp3');
const uMusic = new Audio('sounds/snare.mp3');
const mMusic = new Audio('sounds/tom-1.mp3');
const MMusic = new Audio('sounds/tom-2.mp3');
const eMusic = new Audio('sounds/tom-3.mp3');
const RMusic = new Audio('sounds/tom-4.mp3');

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

function click_M() {
  MMusic.play();
};

function click_e() {
  eMusic.play();
};

function click_R() {
  RMusic.play();
};

d.addEventListener('click', click_d);

r.addEventListener('click', click_r);

u.addEventListener('click', click_u);

m.addEventListener('click', click_m);

M.addEventListener('click', click_M);

e.addEventListener('click', click_e);

R.addEventListener('click', click_R);

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
