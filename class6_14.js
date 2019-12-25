console.log('ABS')
console.log("Single element selector & Multi element selector");

// Single element 

// let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;

// element.style.color = 'red';
// element.innerHTML = '<b> Learning JS </b>';
// element.innerText = 'I am Developer';
// console.log(element);


// let sel = document.querySelector('#myfirst');
// sel = document.querySelector('.child');
// sel = document.querySelector('b');
// sel = document.querySelector('div');
// sel.style.color = 'green';
// console.log(sel);


let eli = document.getElementsByClassName('child');
// // eli = document.getElementsByClassName('container');
// eli = document.getElementsByTagName('div');
console.log(eli);


Array.from(eli).forEach(element => {
    console.log(eli);
    element.style.color = 'yellow';
});
