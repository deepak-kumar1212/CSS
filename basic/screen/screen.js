let form = document.querySelector('input[type="text"]');

form.addEventListener('focusin', (event)=>{
  event.target.style.background = 'black';
  });

const pass=document.querySelector('input[type="password"]');
pass.addEventListener('blur',(event)=>{
event.target.style.background='pink'});

const file=document.querySelector('input[type="file"]');
file.addEventListener('focusout',(event)=>{
    event.target.style.background='green'
});
const text=document.getElementById('txt');
text.addEventListener('focus',(event)=>{
    event.target.style.background='blue';
});
