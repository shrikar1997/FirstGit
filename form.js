function saveToLocalStorage(event)
{
    event.preventDefault();

    const name = event.target.username.value;
    const email = event.target.email.value;

   // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);

    const obj = {name, email};
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserOnScreen(obj);
}

function showUserOnScreen(obj)
{
    const parentElement = document.getElementById('users');
    const childElement = document.createElement('li');
    childElement.textContent = obj.name + '-' + obj.email;
    parentElement.appendChild(childElement)

    const deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = 'Delete';
    deleteButton.onclick = () => {
        localStorage.removeItem(obj.email)
        parentElement.removeChild(childElement)
    }
    childElement.appendChild(deleteButton);
    parentElement.appendChild(childElement);
}