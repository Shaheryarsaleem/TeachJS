//create div delemnmt
let divElem = document.createElement('div');            //1
//add text
let val = localStorage.getItem('text');
let text;                                               //4
if(val==null){                                          //4
    text = document.createTextNode('Click to edit box'); //2
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);                               //2

// // give id, style, and class
divElem.setAttribute('id', 'elem');                      //2
divElem.setAttribute('class', 'elem');                   //2
divElem.setAttribute('style', 'border:2px solid black; width:154px; margin:34px; padding:23px;');  //2


// grab main container 
let container = document.querySelector('.container');   //1    
let first = document.getElementById('myfirst');         //1


// insert element before element first
container.insertBefore(divElem, first);                 //2

console.log(divElem, container, first)                  //1

//add event listner to the divelement
divElem.addEventListener('click', function(){                                   //3
    let noTextAreas = document.getElementsByClassName('textarea').length;       //3
    if(noTextAreas == 0){                                               
        let html =  elem.innerHTML;
    divElem.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3">${html}</textarearea>`; }

    //listner for blur
    let textarea = document.getElementById('textarea');                         //3
    textarea.addEventListener('blur', function(){
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});


