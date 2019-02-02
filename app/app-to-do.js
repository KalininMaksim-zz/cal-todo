let list;
list = document.querySelector('ul');
let toDoList;

function toLocal() {
  toDoList = list.innerHTML;
  localStorage.setItem('tasks', toDoList);
}

list.addEventListener('click', function(event) {
  if( event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    toLocal()

  } else if (event.target.tagName === 'SPAN') {
    let div = event.target.parentNode;
    div.remove();
    toLocal() ;
  }
}, false);

function newElement() {
  let li = document.createElement('li');
  let inputValue = document.querySelector('#toDoEl').value;
  let text = document.createTextNode(inputValue);

  li.appendChild(text);
  if ( inputValue == "") {
    alert('Введите текст');
  } else {
    document.querySelector('#list').appendChild(li);
  }
  document.querySelector('#toDoEl').value = '';
  let span = document.createElement('SPAN');
  let txt = document.createTextNode('❌');
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  toLocal();
}

if( localStorage.getItem('tasks') != null) {
  list.innerHTML = localStorage.getItem('tasks');
}
