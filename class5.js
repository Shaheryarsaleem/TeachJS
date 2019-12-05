console.log("function");

var i = 230;
if(1){
    let i = 200;
    console.log(i);
}

console.log(i);

function ui(name){
    let i = 9;
    console.log(i);
    return `This is ${name} ui`;
}

console.log(ui("Ali"), i);




let name = "Shahrukh";
let name1 = "Jawaid";

function load(name, thank = 'Oh Thanks'){
    console.log(`Going good ${name} for help me. I would like to say ${thank}`);
}

load(name, 'Thanks alot');




// let name2 = "Zahid";
// let name3 = "Sharjeel";

// function loading(name, thank = 'Oh Oh'){
//     console.log(`Going good ${name} for help me. I would like to say ${thank}`);
//     return 1;
// }

// let value = loading(name, 'Pleasure');
// console.log(value);








// let name6 = "Zaheer";

// const fu= function(name4, thank = 'Oh Oh'){
//     let msg = `Going good ${name6} for help me. I would like to say ${thank}`;
//     return msg;
// }

// let value = fu(name6, 'Nice');
// console.log(value);



let name5 = "Zohaib";

const fun = function(name5, thank = 'Oh Oh'){
    let msg = `Going good ${name5} for help me. I would like to say ${thank}`;
    return msg;
}

let value = fun(name5, 'No');
console.log(value);




