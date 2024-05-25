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




//! GSAP code
gsap.registerPlugin(TextPlugin)


gsap.to(".welcome-heading", {
duration: 3,
// color: "greenyellow",
// textDecoration: "underline blue",
// delay: 3,
repeat: -1,
yoyo:true,
text : "Welcome...."
})

gsap.from(".todo-header", {
  // x: 200,
  y: -15,
  duration: 1,
  // delay: 1,
  ease: "power1.out",
  opacity: 0,
})
gsap.from(".todo-image", {
  x: 50,
  // y: 200,
  duration: 3,
  delay: 1,
  ease: "power1.out",
  opacity: 0,
})
gsap.from(".welcome-title", {
  x: -50,
  // y: -200,
  duration: 2,
  delay: 1,
  ease: "power1.out",
  opacity: 0,
})