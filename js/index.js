// Your code goes here

let introImg = document.querySelector('.intro img');

introImg.addEventListener('mouseover', (event) => {
  event.target.src = 'https://via.placeholder.com/1000x300'
})

introImg.addEventListener('mouseleave', (event) => {
  event.target.src = 'img/fun-bus.jpg'
})

document.addEventListener('keydown', event => {
  if (event.keyCode == 27) {
    alert ("You pressed the Escape key!");
  }
})

// chain
// mayb make it work for all the btns later.
document.querySelector('.btn').addEventListener('click', event => {
  event.stopPropagation()
  alert("You clicked this button!");
})

document.querySelector('.destination').addEventListener('click', event => {
  alert("Prevent this from bubbling up");
})

let h1 = document.querySelector("h1")
// make the h1 the first thing that's focused on
h1.setAttribute("tabindex", "0")

h1.addEventListener('focus', event => {
  event.target.style.color = 'red'
})

// 6
document.querySelector(".img-content").addEventListener('dblclick', event => {
  event.target.style.transform = 'rotate(180deg)'
})