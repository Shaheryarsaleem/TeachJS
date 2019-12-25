console.log('create element');


let element = document.createElement('li');
// let text = document.createTextNode('I am practice TextNode');
// element.appendChild(text);

// element.className = 'childulllll';
// element.id = "createli";
// element.setAttribute('title', 'action');

// element.innerText = 'I am inner Text';
element.innerHTML = '<b>I am inner HTML</b>';

// let ul = document.querySelector('ul.this');   //select first selector

// ul.appendChild(element);
// console.log(ul);
console.log(element);




let alli = document.createElement('h3');
alli.id = 'newIdEmelent';
alli.className = 'newClassElement';
let tnode = document.createTextNode('This is alli Node');
alli.appendChild(tnode);

element.replaceWith(alli);

// let mul = document.getElementById('mul');
//  mul.replaceChild(element, document.getElementById('fui'));
// mul.removeChild(document.getElementById('lui'));

let p = alli.hasAttribute('id');   //alli.getAttribute('id');
 alli.removeAttribute('id');
alli.setAttribute('title', 'Alliattribute');

console.log(alli, p);

// console.log(alli);



 