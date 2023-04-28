/*const btn = document.querySelector('.btn');

btn.addEventListener('click',(e) => {
    e.preventDefault();
    document.querySelector('#my-form').getElementsByClassName.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');

});
btn.addEventListener('mouseover',(e) => {
    e.preventDefault();
    document.querySelector('#my-form').getElementsByClassName.background = '#red';
    document.querySelector('body').classList.add('bg-red');

});
btn.addEventListener('mouseout',(e) => {
    e.preventDefault();
    document.querySelector('#my-form').getElementsByClassName.background = '#green';
    document.querySelector('body').classList.add('bg-green');

});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector( '#name');
const emailInput = document.querySelector( '#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector( '#users');
*/
 

myForm.addEventListener( 'submit', onSubmit);

function onSubmit(e) {
e.preventDefault();
if(nameInput.value ==='' || emailInput.value===''){
msg.classList.add('error');
msg.innerHTML = 'Please enter all fields';

setTimeout(() => msg.remove(), 3000);
} else {
console. log(`${nameInput.value}  ${emailInput.value}`);

}
}
