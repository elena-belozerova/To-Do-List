const form = document.querySelector('form');
const ul = document.querySelector('ul');
const li = document.querySelector('li');

form.addEventListener('submit' , (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  if(data.get("todo") === ' '){
      return;
  }
  ul.innerHTML = ul.innerHTML + "<li>" + "<span>" + data.get("todo") + "</span>" +
  "<div class='button'><button class='close' id='close'>\u2716</button></div>"+"</li>";
  form.reset();
});

ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }

  if(ev.target.id === 'close') {
    let currentElement = ev.target;
    
    do {
      if(currentElement.tagName === 'LI') {
        currentElement.remove();
        break;
      } else {
        currentElement = currentElement.parentElement;
      }
    } while (true)
  }
}, false);