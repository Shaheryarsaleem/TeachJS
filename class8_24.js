console.log("Date n Time");


let today = new Date();
console.log(typeof today);

let otherDate = new Date('01-01-2020 11:12');
// otherDate = new Date('Jan 01 2020');
// otherDate = new Date('1/01/2020');

// console.log(otherDate);

let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
console.log(a);

otherDate.setDate(30);
// otherDate.setMonth(03);
otherDate.setFullYear(2028);
otherDate.setMinutes(22);
// otherDate.setHours(02);

otherDate.setSeconds(02);
console.log(otherDate);
