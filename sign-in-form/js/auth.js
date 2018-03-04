'use strict';
const form = document.querySelector('form.sign-in-htm');
const formData = new FormData(form);
const btn = document.querySelector('input.button');
const xhr = new XMLHttpRequest();
btn.addEventListener('click', login)

function login() {  
  xhr.send(formData);
  console.log(xhr.responseText);
}