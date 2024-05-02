

const nav = document.querySelector(".main-nav-list");
const mobileOpenMenu = document.querySelector("#mobile-open-menu");
const mobileCloseMenu = document.querySelector("#mobile-close-menu");

mobileOpenMenu.addEventListener("click", () => {
  document.querySelector(".toggle-menu").classList.toggle('active')

  // Adjusting class-based visibility
  // nav.classList.add("visible"); // Assuming "visible" class shows the menu
  // nav.classList.remove("invisible"); // Assuming "invisible" class hides the menu

  // // Handling the menu open/close icons
  mobileCloseMenu.style.display = "block"; // Show the close icon
  mobileOpenMenu.style.display = "none";  // Hide the open icon
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

// const btnNavEl = document.querySelector(btn-mobile-nav)
// const headerEl = document.querySelector(main-nav)

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });


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



// tabs.forEach(tab => {
//   tab.addEventListener('click',() =>{
//     const target = document.querySelector(tab.dataset.tabTarget)
//     tabContents.forEach(tabContent () => tabContent.classList.remove('active'))
//     target.classList.add('active')
//   })
// });



// const menuToggle = document.getElementById("menu-toggle");
// const  nav = document.getElementById("main-nav");

// menuToggle.addEventListener("click",() => {
//     nav.classList.toggle("show");
// });