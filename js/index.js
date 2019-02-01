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