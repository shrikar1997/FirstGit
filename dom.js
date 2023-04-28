/*console.log(document.location);
console.log(document.URL);
console.log(document.title);
//document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.getElementsByTagName);
console.log(document.getElementsByClassName('body'));
//document.querySelectorAll[10].textContent = 'Hello';
console.log(document.forms);
console.log(document.links);
console.log(document.images);*/
//GETELEMENTBYID//
//let headerTitle = (document.getElementById('header-title'));
//let header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//console.log(headerTitle.textContent);
//headerTitle.innerHTML = '<h3>Hello</h3>';
//header.style.borderBottom='solid 3px #000';

//let title =(document.getElementById('main'));
//title.style.color = 'green';
//title.style.fontStyle = 'bold';

//GET ITEMS BY CLASS//

let item = document.getElementsByClassName('list-group-item');
item[1].style.fontWeight = 'bold';
item[2].style.backgroundColor = 'green';

for(let i=0; i<=item.length; i++){
    item[i].style.fontWeight = 'bold';
}

