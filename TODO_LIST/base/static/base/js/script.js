//* Selectors
const bodyElement = document.querySelector('body')
const themeBtn = document.querySelector('.theme-icon')
const profileBtn = document.querySelector('.profile-img')
const profileActionBar = document.querySelector('.profile-action-bar')
// console.log("Jay Shree Ram");
// console.log(themeBtn);
// console.log(profileBtn);



//* State
const theme = localStorage.getItem('theme') 


//* on mount
theme && bodyElement.classList.add(theme)
theme && (themeBtn.textContent = '🌙')

//* Handlers
const themeToggler = (event) => {
  bodyElement.classList.toggle('light-mode')
  if (bodyElement.classList.contains('light-mode')) {
    themeBtn.textContent = '🌙'
    localStorage.setItem('theme', 'light-mode')
  }
  else {
    themeBtn.textContent = '🔆'
    localStorage.removeItem('theme')
  }
}


let toggle = true
const profileBtnToggler = (e) => {
  // console.log(e);
  if (toggle) {
    profileActionBar.style.display = 'flex'
    toggle = false
  }
  else {
    profileActionBar.style.display = 'none'
    toggle = true
  }
}




//* Event Listners
themeBtn.addEventListener('click', themeToggler, false)

profileBtn.addEventListener('click', profileBtnToggler, false)
profileActionBar.addEventListener('click', profileBtnToggler, true)



//! GSAP code
gsap.registerPlugin(TextPlugin)


gsap.to(".welcome-heading", {
duration: 2,
// color: "greenyellow",
// textDecoration: "underline blue",
// delay: 3,
repeat: -1,
yoyo:true,
text : "Welcome to Task Manager...."
})

// gsap.from(".todo-header", {
//   // x: 200,
//   y: -15,
//   duration: 1,
//   // delay: 1,
//   ease: "power1.out",
//   opacity: 0,
// })
gsap.from(".todo-image", {
  x: 50,
  // y: 200,
  // duration: 2,
  delay: 1,
  ease: "power1.out",
  opacity: 0,
})
gsap.from(".welcome-title", {
  x: -50,
  // y: -200,
  // duration: 2,
  delay: 1,
  ease: "power1.out",
  opacity: 0,
})