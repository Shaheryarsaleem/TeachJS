// // obj

// let car = {
//     name: 'Shezore',
//     topSpeed: 300,
//     run: function (){
//         console.log("Shezore Speed is on going");
//     }
// }

// let Truck = {
//     name: 'Truck',
//     topSpeed: 400,
//     run: function (){
//         console.log("Truck Speed is on nornal");
//     }
// }

// let Bike = {
//     name: 'Bike',
//     topSpeed: 400,
//     run: function (){
//         console.log("Truck Speed is on nornal");
//     }
// }

// console.log(car, Truck, Bike);


// constructor

function GeneralCar(givenName, givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is statring better then Bike`);
    }
    this.analyze = function(){
        console.log(`This car is slower by ${200 - this.topSpeed} Km/H then Bike`)
    }
}

car1 = new GeneralCar('Bike', 20);
car2 = new GeneralCar('Scoote', 120);
car3 = new GeneralCar('Truck', 220);
car4 = new GeneralCar('Crolla', 1120);
car5 = new GeneralCar('cycle', 10);
car6 = new GeneralCar('Racer', 10);

console.log(car1, car2, car3, car4, car5, car6);