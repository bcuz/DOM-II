// Your code goes here

let introImg = document.querySelector('.intro img');

introImg.addEventListener('mouseover', (event) => {
  event.target.src = 'https://via.placeholder.com/1000x300'
})

introImg.addEventListener('mouseleave', (event) => {
  event.target.src = 'img/fun-bus.jpg'
})

introImg.addEventListener('drag', (event) => {
  // event.target.src = 'img/fun-bus.jpg'
  document.querySelector('header').style.backgroundColor = 'orange'
})


document.addEventListener('keydown', event => {
  if (event.keyCode == 27) {
    alert ("You pressed the Escape key!");
  }
})

// chain
document.querySelector('.content-pick').addEventListener('click', event => {
  if (event.target.className === 'btn') {
    alert("You clicked a button!");
  }
})

document.querySelector('.nav').addEventListener('click', event => {
  if (event.target.className === 'nav-link') {
    event.stopPropagation()
    event.preventDefault()
  }
})

document.querySelector('.main-navigation').addEventListener('click', event => {
  alert("Prevent this from bubbling up on nav item clicks");
})

let h1 = document.querySelector("h1")
// make the h1 the first thing that's focused on
h1.setAttribute("tabindex", "0")

h1.addEventListener('focus', event => {
  event.target.style.color = 'red'
})

h1.addEventListener('blur', event => {
  event.target.style.color = '#000'
})

// 8
document.querySelector(".img-content").addEventListener('dblclick', event => {
  event.target.style.transform = 'rotate(180deg)'
})

// resize	