var slide_thumbnail = new Swiper(".slide-thumbnail", {
  slidePerview: 2,
  direction: 'vertical',
  spaceBetween: 20,
});

var slide_hero = new Swiper(".slide-principal", {
  effect: 'fade'
});


const allFilters = document.querySelectorAll('.js-nav-games li a');
const tabPane = document.querySelectorAll('.tab-pane-games');

allFilters.forEach((filter, index) =>{
  filter.addEventListener('click', (event) => {
    event.preventDefault();

    allFilters.forEach(item =>{
      item.classList.remove('active');
    })

    tabPane.forEach(tab =>{
      tab.classList.remove('active');
    })

    tabPane[index].classList.add('active');
    filter.classList.add('active');
})
})

const btnOpenModal = document.querySelector('.js-open-modal');
const btnCloseModal = document.querySelector('.js-close-modal');
console.log('fechado');

btnOpenModal.addEventListener('click', (event) =>{
  event.preventDefault();
  let tagHtml =  document.documentElement;
  tagHtml.classList.add('show-modal');
})

btnCloseModal.addEventListener('click', (event) =>{
  event.preventDefault();
  let tagHtml =  document.documentElement;
  tagHtml.classList.remove('show-modal');
})