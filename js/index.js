/**
 * ! GET THE VARIABLES FOR THE NAVIGATION BAR
 */
let logo = document.querySelector('.logo');
let navbar = document.querySelector('.navbar');
let toggleMenu = document.querySelector('.toggle__menu');
let header = document.querySelector('.header');

/**
 * ! ADD EVENTLISTENER TO THE TOGGLE MENU BUTTON
 */
let menu = (e)=> {
    e.preventDefault();
  if(navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      toggleMenu.innerHTML = ' <i class="fas fa-bars"></i>';
      toggleMenu.style.color = '#fff';
      header.style.background = 'transparent';
      logo.innerHTML = 'room';
      logo.style.color = '#fff';
      logo.style.fontSize = '2.5rem';


  } else {
      navbar.classList.add('active');
      toggleMenu.innerHTML = ' <i class="fas fa-times"></i>';
      header.style.background = '#fff';
      toggleMenu.style.color = '';
      logo.innerHTML = '';
  }
}

toggleMenu.addEventListener('click', menu, false);


/**
 * ! GET THE VARIABLES FOR THE SLIDE SECTION 
 */
 let imageSlide = document.querySelectorAll('.slide');
 console.log(imageSlide);
 let textSlide = document.querySelectorAll('.text--slide');
 console.log(textSlide);
 let previousButton = document.querySelector('#previous');
 console.log(previousButton);
 let nextButton = document.querySelector('#next');
 console.log(nextButton);
 
 let currentSlide = 0;
 
 
 /** 
  * ! RESET FUNCTION TO RESET THE CURRENT SLIDE
 */
 let reset = ()=> {
     for(let i=0; i < imageSlide.length; i++) {
         imageSlide[i].style.display = "none";
         textSlide[i].style.display = " none";
     }
 }
 
 
 /**
  * ! START THE SLIDESHOW
  */
 let startSlide = ()=> {
     reset();
     imageSlide[currentSlide].style.display = "block";
     textSlide[currentSlide].style.display = "block";
 }
 startSlide();
 
 /** 
  * ! PREVIOUS SLIDE FUNCTION AND ADD EVENTLISTENER
 */
 
 function previousSlide() {
     reset();
     imageSlide[currentSlide - 1].style.display = 'block';
     textSlide[currentSlide - 1].style.display = 'block';

     currentSlide --;
 }

 previousButton.addEventListener("click", function() {
     if(currentSlide === 0) {
         currentSlide = imageSlide.length;
     }
     previousSlide();
 })
 
 /**
  * ! NEXT SLIDE FUNCTION AND THE ADD EVENTLISTENER
  */
 function nextSlide() {
     reset();
     imageSlide[currentSlide + 1].style.display = "block";
     textSlide[currentSlide + 1].style.display = "block";
     currentSlide ++;
 }

 nextButton.addEventListener("click", function() {
     if(currentSlide === (imageSlide.length - 1)) {
         currentSlide = -1;
     }
     nextSlide();
 })

