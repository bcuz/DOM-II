let introImg = document.querySelector('.intro img');

// 1
introImg.addEventListener('mouseover', (event) => {
  event.target.src = 'https://via.placeholder.com/1000x300'
})

// 2
introImg.addEventListener('mouseleave', (event) => {
  event.target.src = 'img/fun-bus.jpg'
})

// 3
introImg.addEventListener('drag', (event) => {
  // event.target.src = 'img/fun-bus.jpg'
  document.querySelector('header').style.backgroundColor = 'orange'
})

// 4
document.addEventListener('keydown', event => {
  if (event.keyCode == 27) {
    alert ("You pressed the Escape key!");
  }
})

// 5
// elegantly giving all .btn elements a click event
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

// 6
h1.addEventListener('focus', event => {
  event.target.style.color = 'red'
})

// 7
h1.addEventListener('blur', event => {
  event.target.style.color = '#000'
})

// 8
document.querySelector(".img-content").addEventListener('dblclick', event => {
  event.target.style.transform = 'rotate(180deg)'
})

// 9
window.addEventListener('resize', () => {
  console.log('resizing');
})

// 10
document.body.addEventListener('wheel', () => {
  document.querySelector('.intro').style.backgroundColor = 'red'
})