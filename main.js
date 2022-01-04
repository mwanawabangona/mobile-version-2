const overlay = document.querySelector('.overlay');
const options = document.querySelectorAll('.option');
const btnCloseMenu = document.querySelector('.close-menu');
const btnOpenMenu = document.querySelector('.open-menu');

function openMenu() {
  overlay.classList.remove('hidden');
}

function closeMenu() {
  overlay.classList.add('hidden');
}

btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);

for (let i = 0; i < options.length; i += 1) {
  options[i].addEventListener('click', closeMenu);
}

const data = {
  project1: {
    name: 'Tonic',
    img: 'img/snip.png',
    companyName: 'CANOPY',
    job: 'Back End Dev',
    year: 2015,
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled is simply ',
    tags: ['html', 'css', 'javaScript'],
  },

  project2: {
    name: 'Multi-Post Stories',
    img: 'https://github.com/mwanawabangona/Math-magician/raw/full-website/img/screenshot.png',
    companyName: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2015,
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },

  project3: {
    name: 'Facebook 360',
    img: 'img/nba.png',
    companyName: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2015,
    decription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },
  project4: {
    name: 'Uber Navigation',
    img: 'https://github.com/Kingjosh007/space-travelers-hub/raw/master/screenshots/app.gif',
    companyName: 'Uber',
    job: 'Lead Developer',
    year: 2018,
    decription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },
};

const nameID = document.getElementById('name');
const img = document.getElementById('img');
const companyName = document.getElementById('companyName');
const job = document.getElementById('job');
const year = document.getElementById('data');
const descrition = document.getElementById('description');
const tags = document.getElementById('tags');
const button1 = document.querySelector('#btn-1');
const button2 = document.querySelector('#btn-2');
const button3 = document.querySelector('#btn-3');
const button4 = document.querySelector('#btn-4');
const btnClosePop = document.querySelector('.popup-close-btn');
const popupOverlay = document.querySelector('.popup-overlay');
const popup = document.getElementById('popup');
const live_link = document.querySelector('.live-link');

function openPopUp() {
  popup.classList.remove('hidden');
}

function changePopup(order) {
  tags.innerHTML = '';

  const project = data[`project${order}`];
  nameID.innerHTML = project.name;
  img.src = project.img;
  companyName.innerHTML = project.companyName;
  job.innerHTML = project.job;
  year.innerHTML = project.year;
  descrition.innerHTML = project.decription;
  const tagsLength = project.tags.length;
  for (let i = 0; i < tagsLength; i += 1) {
    const element = document.createElement('li');
    element.innerHTML = `${project.tags[i]}`;
    tags.appendChild(element);
  }
  openPopUp();
}

function closePopUp() {
  popup.classList.add('hidden');
}

button1.addEventListener('click', () => {
  openPopUp();
  changePopup(1);
  live_link.setAttribute('href', 'https://quirky-hamilton-73201b.netlify.app/');
});

button2.addEventListener('click', () => {
  openPopUp();
  changePopup(2);
  live_link.setAttribute('href', 'https://mwanawabangona.github.io/Math-magician/');
});

button3.addEventListener('click', () => {
  openPopUp();
  changePopup(3);
  live_link.setAttribute('href', 'https://mwanawabangona.github.io/capstone/index.html');
});

button4.addEventListener('click', () => {
  openPopUp();
  changePopup(4);
  live_link.setAttribute('href', 'https://space-travelers-hub-1.netlify.app/');
});

popupOverlay.addEventListener('click', closePopUp);
btnClosePop.addEventListener('click', closePopUp);

const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const msg = document.querySelector('.show-msg');

function validationEmail(e) {
  if (email.value !== email.value.toLowerCase()) {
    msg.style.display = 'block';
    e.preventDefault();
  }
}

form.addEventListener('submit', validationEmail);
