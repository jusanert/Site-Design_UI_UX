import {
  throttle,
  debounce,
  getDay,
  getMonth,
  getRandom
} from "./functions.js";


//Плавный скролл по сылкам
// const anchors = document.querySelectorAll('a[href*="#"]')
// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (event) {
//     event.preventDefault()

//     const blockID = anchor.getAttribute('href').substr(1)

//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// };


//Веделение ссылки меню на которой вы находитесь
// const createSelectedSection = (root) => {
//   const nav = root.querySelector('nav');
//   root.querySelector('.observe').forEach(s => {
//     new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           nav.querySelector('a').forEach(link => link.classList.remove('active'))
//           let id = entry.target.getAttribute('id');
//           nav.querySelector(`a[href="#${id}"]`).classList.add('active');
//         }
//       })
//     }, {}).observe(s);
//   })
// }

// createSelectedSection(document.querySelector('#page'))