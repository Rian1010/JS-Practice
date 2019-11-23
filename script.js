// window.onload = function() {
//     const EFFECT = document.querySelector("#effect");

//     window.addEventListener('scroll', scrollEffect);

//     function scrollEffect() {
//         if(window.scrollY>=500) {
//             EFFECT.style.opacity = '1';
//             EFFECT.style.transform = 'translateX(0px)';
//             EFFECT.style.transition = '1s ease-in-out';
//         }
//         else {
//             EFFECT.style.opacity = '0';
//             EFFECT.style.transform = 'translateX(-50px)';
//         }
//     }
//     scrollEffect();
// }

// // Text Input Test
// window.onload = function () {
//     var screen = document.querySelector('.screen');
//     var input = document.querySelector('input')

//     var screenValue = '';


//     console.log(input);

//     input.addEventListener('input', function () {
//         if (screen.value === '') {
//             alert('Input is empty.')
//         }
//         else {
//             let value = eval(screen.value);
//             screen.value = value+"+";
//         }
//     });
// }

// var buz = {
//     fog: 'stack'
// };

// for (var name in buz) {
//     if (buz.hasOwnProperty(name)) {
//         console.log('this is property ("' +
//             name + '") for sure. Value: ' + buz[name]);
//     }
//     else {
//         console.log(name); // toString or something else
//     }
// }


// var foo = {
//     hasOwnProperty: function () {
//         return false;
//     },
//     bar: 'Here be dragons'
// };
// this.hasOwnProperty.call(foo, 'bar'); // true
// console.log(this.hasOwnProperty.call(foo, 'bar'));




// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
//     console.log(this);
// }

// function Toy(name, price) {
//     Product.call(this, name, price);
//     this.category = 'toy';
// }

// var cheese = new Food('feta', 5);
// var fun = new Toy('robot', 40);

// console.log(cheese, fun);


var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species
                + ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}