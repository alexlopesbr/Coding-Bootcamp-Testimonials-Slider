/* Slide */

const btnPrevious = document.querySelector('#previous');
const btnNext = document.querySelector('#next');
const users = document.querySelectorAll('.user');
const screenWidth = document.querySelector('.container').clientWidth;
const arrUsers = Array.prototype.slice.call(users);
let currentUser = 0;

const quoteTop = document.querySelector('.quote').getBoundingClientRect().top;
const quoteLeft = document.querySelector('.quote').getBoundingClientRect().left;
const imgQuote = document.querySelector('.imgQuote');

const buttons = document.querySelector('.buttons');
const image = document.querySelector('.imgUser');
const buttonsHeight = buttons.offsetHeight;
const buttonsWidth = buttons.offsetWidth;

const positionXBtn = image.getBoundingClientRect().left;
const positionYBtn = image.getBoundingClientRect().bottom;

function addClass(index) {
  users[index].classList.add('active');
}

function changeClass() {
  arrUsers.forEach((element) => {
    element.classList.remove('active');
    addClass(currentUser);
  });
}

function handleClick(event) {
  if (event.target.id === 'next' && currentUser < users.length - 1) {
    currentUser += 1;
    changeClass();
  }

  if (event.target.id === 'previous' && currentUser > 0) {
    currentUser -= 1;
    changeClass();
  }
}

btnPrevious.addEventListener('click', handleClick);
btnNext.addEventListener('click', handleClick);

/* button position */

function btnAppear() {
  setTimeout(() => {
    buttons.style.top = `${positionYBtn - buttonsHeight / 2}px`;
    if (screenWidth > 1024) {
      buttons.style.left = `${positionXBtn + 45}px`;

      imgQuote.style.top = `${quoteTop - 65}px`;
      imgQuote.style.left = `${quoteLeft + 125}px`;
    } else {
      buttons.style.left = `${screenWidth / 2 - buttonsWidth / 2}px`;
      imgQuote.style.top = `${quoteTop - 23}px`;
    }
  }, 10);
}

btnAppear();
