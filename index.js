

particlesJS.load('particles-js', 'particles.json', function () {
  console.log('✨ Particles.js loaded!');
});

const username = document.querySelector('#username');
console.log(username);

const password = document.querySelector('#password');

const LoginButton = document.querySelector('#Login-button');

const container = document.querySelector('#container');

const superHeroSection = document.querySelector('#super-hero-section');

LoginButton.addEventListener('click', (e) => {
  let usernameValue = username.value;
  let passwordValue = password.value;
  // console.log(usernameValue, passwordValue);
  e.preventDefault();
  if (usernameValue !== 'Ashutosh' && passwordValue !== '123') {
    alert('your password and username both invalid');
  } else if (usernameValue === 'Ashutosh') {
    if (passwordValue === '123') {
      alert('you are login');
      container.style.display = 'none';
      superHeroSection.style.display = 'block';
    } else {
      alert('your password is invalid');
    }
  } else {
    alert('your username is invalid');
  }
});

const superhero = document.querySelector('#superhero');

const searchSuperHero = document.querySelector('#search-Super-hero-btn');

const api = 'data.json';

const heroDetailsHere = document.querySelector('.hero-details-here');

searchSuperHero.addEventListener('click', async (e) => {
  e.preventDefault();
  let super_hero_Search_Input = superhero.value;
  try {
    let data = await fetch(api);
    let rdata = await data.json();
    // console.log(rdata);

    let hero_details = rdata.find((hero) => {
      return hero.name.toLowerCase() === super_hero_Search_Input.toLowerCase()
    });

    let key = Object.values(hero_details);
    // if (hero_details) {
    //   let key = Object.values(hero_details);
    // }
    // console.log(key);
    superHeroSection.style.display = 'none';
    heroDetailsHere.style.display = 'block';

    let name = document.querySelector('#name');
    let age = document.querySelector('#age');
    let Power = document.querySelector('#Power');
    let description = document.querySelector('#description');
    let image = document.querySelector('#image');

    name.innerText = key[0];
    age.innerText = key[1];
    Power.innerText = key[2];
    description.innerText = key[3];
    image.src = key[4];
  } catch (error) {
    console.log(error);
  }
});

const go_back_btn = document.querySelector('#Go_back_btn');

go_back_btn.addEventListener('click' , (e)=>{
  superHeroSection.style.display = 'block';
  heroDetailsHere.style.display = 'none';
})