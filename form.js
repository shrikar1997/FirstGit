function saveToLocalStorage(event){
    event.preventDefault();

    const name = event.target.username.value;
    const email = event.target.email.value;

   // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);

    const obj = {name, email};
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserOnScreen(obj);
}

function showUserOnScreen(obj){
    const parentElement = document.getElementsByClassName('ex');
    //const childElement = document.createElement('li');
    //childElement.textContent = obj.name + '-' + obj.email;
    //parentElement.appendChild(childElement)

    parentElement.innerHTML = parentElement.innerHTML + `${obj.name} ${obj.email}`;
}