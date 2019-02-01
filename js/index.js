// Your code goes here

let introImg = document.querySelector('.intro img');

introImg.addEventListener('mouseover', (event) => {
  event.target.src = 'https://via.placeholder.com/1000x300'
})

document.addEventListener('keydown', event => {
  if (event.keyCode == 27) {
    alert ("You pressed the Escape key!");
  }
})

// chain
// mayb make it work for all the btns later.
document.querySelector('.btn').addEventListener('click', event => {
  alert ("You clicked this button!");
})