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

const btnMenu = document.querySelectorAll('.js-btn-menu');
const menuSite = document.querySelectorAll('.js-menu')

btnMenu.forEach((btn, index) =>{
  btn.addEventListener('click', (Event) =>{
    Event.preventDefault();
    
    menuSite.forEach(itemMenu =>{
      itemMenu.classList.remove('active');
      itemMenu.addEventListener('mouseleave', () => {
        itemMenu.classList.remove('active');
        btnMenu.forEach(itemBtn =>{
          itemBtn.classList.remove('ative');
        })
      }) 
    })

    btnMenu.forEach(itemBtn =>{
      itemBtn.classList.remove('ative');
    })
    btn.classList.add('active');
    menuSite[index].classList.add('active');

  })
})
