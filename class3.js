 console.log('If Else Switch Condition');



// /* == type check
//    === type & value check */


 const age = 18;

if (age != 19) {
    console.log('Age is 19');
}

else if (age != 65) {
    console.log('Age is not 65');
}

else {
    console.log('Age is 17');
}
/*==================================================================*/
const password = '19';

if (password !== '19'){
    console.log('Right password');
}

else{
    console.log('Wrong Password');
}

/*==================================================================*/
const vari = 34;

if (typeof vari !== 'undefined') {
    console.log('Veri is defined');
}

else {
    console.log('Veri is not defined');
}

/*==================================================================*/
 const doesDrive = false;
 const age = 15;

if (doesDrive && age > 18) {
    console.log('you can drive');
}
else {
    console.log('you cannot drive');
}


/*==================================================================*/
const age = 18;

switch (age) {
    case 18:
        console.log("you are not 18");
        break;
    case 18:
        console.log("you are 18");
        break;
    
        case 20:
            console.log("You are 20");
            break;
    default:
        console.log('Your age doesnot match');
}



/*==================================================================*/
// Turnery operator
 const age = 19;
console.log(age == 45 ? 'Go' : 'Back move');



if (age != 18) {
    console.log('Age is define 18');
}

else {
    console.log('Age doesnot match');
}


