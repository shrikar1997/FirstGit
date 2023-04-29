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
/*
let item = document.getElementsByClassName('list-group-item');
item[1].style.fontWeight = 'bold';
item[2].style.backgroundColor = 'green';

for(let i=0; i<=item.length; i++){
    item[i].style.fontWeight = 'bold';
}


let li = document.getElementsByTagName('li');
li[1].style.fontWeight = 'bold';
li[2].style.backgroundColor = 'green';

for(let i=0; i<=item.length; i++){
    li[i].style.fontWeight = 'bold';
}

let item = document.getElementsByClassName('list-group-item');
item[1].style.fontWeight = 'bold';
item[2].style.backgroundColor = 'green';

for(let i=0; i<=item.length; i++){
    item[i].style.fontWeight = 'bold';
}

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = "hidden";*/

// Trvaersing the DOM//

var itemList = document.querySelector('#items');
//parentnode
/*
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

//ParentNode
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);


//ChildNodes
//console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'Red';


//FirstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello1';

//LastChild
console.log(itemList.lastChild);

//LarstElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello4';

//nextSibling
console.log(itemList.nextSibling);

//nextelementsibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//Previouselementsibling
console.log(itemList.previousElementSibling);
*/

//CreateElement

//createDiv
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add id
newDiv.id = 'hello1';

//add attr
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText = document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv, h1);


/*
//hello world before item1

//createDiv
var newDiv1 = document.createElement('div1');

//add class
newDiv1.className = 'hello1';

//add id
newDiv1.id = 'hello2';

//add attr
newDiv1.setAttribute('title1', 'Hello Div1');

//create text node
var newDiv1Text = document.createTextNode('Hello World1');

//add text to div
newDiv1.appendChild(newDiv1Text);

var container = document.querySelector('form .list-group');
var li = document.querySelector('form li');

console.log(newDiv1);
container.insertBefore(newDiv1, li);
*/

let parentnode = document.getElementById('items');
let helloworldlielement = 'Hello World';
parentnode.appendFirstChild(helloworldlielement);







