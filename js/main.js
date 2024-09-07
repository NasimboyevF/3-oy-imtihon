const Btn = document.querySelector('#nav-icon1');
const Header = document.querySelector('.header'); 
const body = document.querySelector('body');

const mod = document.querySelector('.mod')


  Btn.addEventListener('click', () =>{
    body.classList.toggle('hidden')
    Btn.classList.toggle('open');
    Header.classList.toggle('header-burger')
  });

  mod.addEventListener('click', ()=> {

    body.classList.toggle('light-mod')

  })









