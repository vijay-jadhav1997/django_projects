//* Select elements
const bodyElement = document.querySelector('body')
const themeBtn = document.querySelector('.theme-icon')
const profileBtn = document.querySelector('.profile-img')
console.log("Jay Shree Ram");
console.log(themeBtn);
console.log(profileBtn);


//* State



//* Handler
const themeToggler = (event) => {
  bodyElement.classList.toggle('light-mode')
}



//* Event Listners
themeBtn.addEventListener('click', themeToggler, false)