'use strict';
const result = document.getElementById('counter');
const btns = document.querySelector('div.wrap-btns');
let counter;

if (localStorage.counter) {
  counter = localStorage.counter;
} else {
  counter = 0;
}
result.innerText = counter;

function count(event) {
  if (event.target.id === 'increment') {
    counter++;
    result.innerText = counter;
    localStorage.counter = counter;
  } else if (event.target.id === 'decrement') {
    if (counter > 0) {
      counter--;
      result.innerText = counter;
    }
  } else if (event.target.id === 'reset') {
    counter = 0;
    result.innerText = counter;
  } 
}

btns.addEventListener('click', count);
