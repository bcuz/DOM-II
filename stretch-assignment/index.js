document.querySelector('.blocks').addEventListener('click', event => {

  
  if (event.target.tagName === 'DIV') {
    let clickedClass = event.target.className.split(" ")[1]  
    let clickedBox = document.querySelector(`.${clickedClass}`);
    clickedBox.parentNode.prepend(clickedBox);
  }
})