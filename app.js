 const productBtn = document.querySelector('.closes')
 productArray = document.querySelector('.product__array')
titleButton = document.querySelector('.title__button')
 twoButton = document.querySelector('.title__buttons')
twoProductArray = document.querySelector('.products__array')
twoProductBtn = document.querySelector('.medium')
prevBtn = document.querySelector('.close')
prevProduct = document.querySelector('.product__arrays')
prevButton = document.querySelector('.titles__button')
boxBtn = document.querySelector('.header')
menuBtn = document.querySelector('.bx')
ulBtn = document.querySelector('.ul__list') 


menuBtn.addEventListener('click', () =>{
    ulBtn.classList.toggle('active')
})

productBtn.addEventListener('click', function(){
    productArray.classList.add('active')
})

titleButton.addEventListener('click', function(){
    productArray.classList.remove('active')
})

twoProductBtn.addEventListener('click', function(){
    twoProductArray.classList.add('active')
})

twoButton.addEventListener('click', function(){
    twoProductArray.classList.remove('active')
})
prevBtn.addEventListener('click', function(){
    prevProduct.classList.add('active')
})

prevButton.addEventListener('click', function(){
    prevProduct.classList.remove('active')
})


window.addEventListener('scroll', () => {
    boxBtn.classList.toggle('active', window.scrollY > 72)
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 23,
    loop: true,
    fade:'true',
    gragCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      dynamicBullets:'true'
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const darkBtn = document.querySelector('.moon');
  body = document.querySelector('body')

const darkMode = () => {
    body.classList.toggle('dark')
}



  darkBtn.addEventListener('click', () => {
    setDark = localStorage.getItem('dark')
    if (setDark !== 'on') {
        darkMode()
        setDark = localStorage.setItem('dark', 'on')
    } else{
darkMode()
setDark = localStorage.setItem('dark', null)
    }
  })

  
  let  setDark = localStorage.getItem('dark')


  if(setDark === 'on'){
    darkMode()
  }

  var swiper = new Swiper(".comanda", {
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




  var swiper = new Swiper(".sliders", {
    loop:true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


informBtn = document.querySelector('.inform__btn')
lineTexts = document.querySelector('.linear')
informBtn.addEventListener('click', function(){
    informBtn.classList.toggle('active')
  lineTexts.classList.toggle('active')
})

informBtns = document.querySelector('.inform__btns')
lineText = document.querySelector('.linears')
informBtns.addEventListener('click', function(){
informBtns.classList.toggle('active')
lineText.classList.toggle('active')
})

informLine = document.querySelector('.inform__button')
lineTextBet = document.querySelector('.lines')
informLine.addEventListener('click', function(){
informLine.classList.toggle('active')
lineTextBet.classList.toggle('active')
})

informLines = document.querySelector('.inform__buttons')
lineTextBets = document.querySelector('.linear__text')
informLines.addEventListener('click', function(){
informLines.classList.toggle('active')
lineTextBets.classList.toggle('active')
})

const styleSwitcher = document.querySelector('.style-switcher')
styleSwitcher.addEventListener('click', () => {
  document.querySelector('.style__switcher').classList.toggle('active')
})

window.addEventListener('scroll', () => {
  if(document.querySelector('.style__switcher').classList.contains('active')){
    document.querySelector('.style__switcher').classList.remove('active')
  }
})

const alternate = document.querySelectorAll('.alternate');


function setActiveStyle(color){
  alternate.forEach((style) => {
  if (color === style.getAttribute('title')) {
    style.removeAttribute('disabled')
  }else{
    style.setAttribute('disabled','true')
  }
})
}