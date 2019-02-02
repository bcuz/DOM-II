
document.querySelectorAll('.block').forEach(block => block.style.left = 0)

document.querySelector('.blocks').addEventListener('click', event => {

  if (event.target.tagName === 'DIV') {
    let clickedClass = event.target.className.split(" ")[1]  
    let clickedBox = document.querySelector(`.${clickedClass}`);
    clickedBox.parentNode.prepend(clickedBox);
  }
})

document.querySelector('.blocks').addEventListener('mousedown', event => {
  
  if (event.target.tagName === 'DIV') {
    timer=setInterval(function(){
        
      event.target.style.position = 'relative'
      
      event.target.style.left = parseInt(event.target.style.left, 10) + 25 + "px"
      

    }, 100); 
  }
})

document.querySelector('.blocks').addEventListener("mouseup", function(){
  if (event.target.tagName === 'DIV') {
    if (timer) clearInterval(timer)
  }
});
