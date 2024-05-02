
// document.addEventListener('DOMContentLoaded', function(){
//   const mainNav = document.querySelector('.main-nav');
// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (!ent.isIntersecting === false) {
//       mainNav.classList.add("sticky");
//     }

//      else (ent.isIntersecting === true) {
//       mainNav.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//   }
// );
// obs.observe(sectionHeroEl);
// });




const nav = document.querySelector(".main-nav-list");
const mobileOpenMenu = document.querySelector("#mobile-open-menu");
const mobileCloseMenu = document.querySelector("#mobile-close-menu");

mobileOpenMenu.addEventListener("click", () => {
  document.querySelector(".toggle-menu").classList.toggle('active')

  // // Handling the menu open/close icons
  mobileCloseMenu.style.display = "block"; 
  mobileOpenMenu.style.display = "none";  
});
console.log()

mobileCloseMenu.addEventListener("click", () => {
  // Adjusting class-based visibility
  nav.classList.add("invisible"); // Assuming "invisible" class hides the menu
  nav.classList.remove("visible"); // Assuming "visible" class shows the menu

  // Handling the menu open/close icons
  mobileCloseMenu.style.display = "none"; // Hide the close icon
  mobileOpenMenu.style.display = "block";  // Show the open icon
});


const tabs = document.querySelectorAll('.info-tab') 
const tabContents = document.querySelectorAll('.flip-tabs')  

function handleActive(){
  tabs.forEach(btn => {
    console.log(btn);
      btn.classList.remove('active');
  })
  this.classList.add('active');
  let btnData = this.getAttribute('data-tab-target')
  tabContents.forEach(element => {
      let data = element.getAttribute('data-tab-content');
      element.classList.remove('active');
      if(data == btnData) {
          element.classList.add('active');
      }
  })
}

tabs.forEach(btn => {
  btn.addEventListener('click', handleActive);
})

function handleScreenWidthChange(){
  var screenWidth = window.innerWidth;
  const detailHeight = document.querySelector('.flip-tabs').offsetHeight;
  document.querySelector('.section-slide').style.marginTop = detailHeight + 100 + 'px';
}

handleScreenWidthChange()

window.addEventListener('resize',function(){
  handleScreenWidthChange();
});


// const menuToggle = document.getElementById("menu-toggle");
// const  nav = document.getElementById("main-nav");

// menuToggle.addEventListener("click",() => {
//     nav.classList.toggle("show");
// });