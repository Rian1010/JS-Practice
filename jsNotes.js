

/*function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
    var currentVal = document.getElementById("countDownButton").innerHTML;
    var newVal = currentVal = 0;
    if (currentVal > 0) {
        newVal = currentVal - 3;
    }
    document.getElementById("countDownButton").innerHTML = newVal
}*/




// Color Change
/*
window.onload=function() {
    const colorBtn = document.querySelector('.colorBtn');
    const bodyBG = document.querySelector('body');

    //QuerySelector can select a CSS selector

    const colors = ['red', 'yellow', 'blue', 'green'];

    colorBtn.addEventListener('click', changeColor);

    function changeColor () {
        // bodyBG.style.backgroundColor = colors[2];
        let random = Math.floor(Math.random()*colors.length)
        // Math.random is always between 0 and 0.99999, therefore *colors.length
        bodyBG.style.backgroundColor = colors[random]
    }
}
*/



// Color Hex Change
/*
window.onload=function() {
    const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    const hexBtn = document.querySelector('.hexBtn');
    const bodyBG2 = document.querySelector('body');
    const hex = document.querySelector('.hex');

    hexBtn.addEventListener('click',getHex);

    function getHex() {
        let hexCol = '#';

        for (let i = 0; i<6; i++) {
            let random = Math.floor(Math.random()*hexNumbers.length);
            //console.log(random);
            hexCol +=hexNumbers[random]
            //console.log(hexCol);
        }
        bodyBG2.style.backgroundColor = hexCol;
        hex.innerHTML = hexCol;
    }
}*/



// Quotes
/*
window.onload = function() {
const quotes = [
{
    name: 'name1',
    quote: 'quote1'
}, {
    name: 'name2',
    quote: 'quote2'
}, {
    name: 'name3',
    quote: 'quote3'
}, {
    name: 'name4',
    quote: 'quote4'
}, {
    name: 'name5',
    quote: 'quote5'
}, 
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote)

function displayQuote (){
    let number = Math.floor(Math.random()*quotes.length)
    // console.log(number)
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
}
*/




// Message

/*
window.onload = function() {
const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg) 

function sendMsg() {
    let content = messageIn.value;
    // console.log(content);
    if(content === ''){
        alert('Please Enter Valid Value. Current Value is Empty.')
    }
    else {
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
    
}
}*/





// Counter

// window.onload = function() {
//     let counter = document.querySelector('.counter');
//     const addCount = document.querySelector('#addCountBtn');
//     const lowerCount = document.querySelector('#lowerCountBtn');

//     let count = 0; 

//     addCount.addEventListener('click', incrementCounter);
//     lowerCount.addEventListener('click', decrementCounter);

//     function incrementCounter() {
//         count++;
//         counter.innerHTML = count;
//         if(counter.innerHTML>0) {
//             counter.style.color = '#4caf50';
//         }
//         else if(counter.innerHTML === '0'){
//             counter.style.color = 'white';
//         }
//     counter.animate([{opacity: '0.2'},{opacity:'1.0'}],{duration:500, fill: 'forwards'});
//     }

//     function decrementCounter() {
//         count--;
//         counter.innerHTML = count;
//         if(counter.innerHTML<0) {
//             counter.style.color = 'red';
//         }
//         else if(counter.innerHTML === '0'){
//             counter.style.color = 'white';
//         }
//     counter.animate([{opacity: '0.2'},{opacity:'1.0'}],{duration:500, fill: 'forwards'});
//     }

// }




// window.onload = function () {

//     var textEffect = document.querySelector('.intro-text');
//     var textPosition = textEffect.getBoundingClientRect().top;
//     var screenPosition = window.innerHeight / 1;

//     window.addEventListener('scroll', scrollAppear);
//     function scrollAppear() {
//         if (textPosition < screenPosition) {
//             textEffect.classList.add('.intro-appear');
//             console.log('This is working!');
//         }
//     }
//     scrollAppear();
// }

/*
window.onload = function () {
    const DEMO = document.getElementById("demo")


    window.addEventListener("scroll", scrollByPages);
    function scrollByPages() {
        if (window.scrollY >= 102) {
            DEMO.style.opacity = '1';
            DEMO.style.transform = 'translate(20px)';
            // DEMO.classList.add('#demo-appear')
            // DEMO.classList.add('#demo')
            console.log('The scroll effect is working!')
        } else {
            DEMO.style.opacity = '0';
            DEMO.style.transform = 'translateX(0px)'
        }
    }
    scrollByPages()
    console.log(window.scrollY)
}*/

//     myDIV.addEventListener("scroll", myFunction);

//     function myFunction() {
//         if (DEMO.style.display === 'none') {
//             DEMO.style.display = 'inline-block';

//         } else {
//             DEMO.style.display = 'none';
//         }
//     }






//JS Carousel
// window.onload = function () {

//     const nextBtn = document.querySelector('.nextBtn');
//     const prevBtn = document.querySelector('.prevBtn');
//     const container = document.querySelector('.images');

//     let counter = 2;

//     nextBtn.addEventListener('click', nextSlide);
//     prevBtn.addEventListener('click', prevSlide);

//     function nextSlide() {
//         container.animate([{ opacity: '0.1' }, { opacity: '1.0' }], { duration: 500, fill: 'forwards' })

//         if (counter === 3) {
//             counter = 1;
//         }
//         counter++;

//         container.style.backgroundImage = `url(img/bgimg-${counter}.jpeg)`
//     }

//     function prevSlide() {
//         container.animate([{ opacity: '0.1' }, { opacity: '1.0' }], { duration: 500, fill: 'forwards' })

//         if (counter === 2) {
//             counter = 4;
//         }
//         counter--;

//         container.style.backgroundImage = `url(img/bgimg-${counter}.jpeg)`
//     }

// }





// Calculator

// window.onload = function() {

// const btns = document.querySelectorAll('.btn');
// const screen = document.querySelector('.screen');
// const equalBtn = document.querySelector('.btn-equal');
// const clearBtn = document.querySelector('.btn-clear');


// for(let i = 0; i<btns.length; i++) {
//     btns[i].addEventListener('click', function() {
//         let number = btns[i].getAttribute('data-num');
//         screen.value += number;
//     })
// }

// equalBtn.addEventListener('click', function() {

//     if(screen.value === '') {
//         alert('Input is empty.')
//     }
//     else {
//         let value = eval(screen.value);
//         screen.value = value;
//     }

// })

// clearBtn.addEventListener('click', function() {
//     screen.value = '';
// })

// }






//Clock

// window.onload = function () {
//     function showTime() {

//         let date = new Date();
//         let hours = date.getHours();//0-23
//         let minutes = date.getMinutes()//0-59
//         let seconds = date.getSeconds()//0-59

//         let formatHours = convertFormat(hours)

//         hours = checkTime(hours)


//         hours = addZero(hours)
//         minutes = addZero(minutes)
//         seconds = addZero(seconds)
//         document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`

//     }

//     function convertFormat(time) {
//         let format = 'AM'
//         if (time >= 12) {
//             format = 'PM'
//         }
//         return format;
//     }

//     function checkTime(time) {
//         if (time > 12) {
//             time = time - 12
//         }
//         if (time === 0) {
//             time = 12
//         }
//         return time;
//     }

//     function addZero(time) {
//         if (time < 10) {
//             time = "0" + time;
//         }
//         return time;
//     }

//     showTime();
//     setInterval(showTime, 1000);
// }
// 


//Methods and Objects
// window.onload = function() {
//     function person(name, age) {
//         this.name = name;
//         this.age = age;
//         this.yearOfBirth = bornYear;
//     }

//     function bornYear() {
//         return 2019 - this.age;
//     }

//     var p = new person("A", 21);
//     document.write(p.yearOfBirth());
// }




// Arrays
// var course1 = "HTML";
// var course2 = "CSS";
// var course3 = "JS";

//SAME AS

// var courses = new Array("HTML", "CSS", "JS");
//OR

// var courses = ["HTML", "CSS", "JS,"];
// var course = courses[0];
// courses[1] = "C++";
// document.write(courses);
// document.write(course.length+", ");

// var c1 = ["HTML", "CSS"];
// var c2 = ["JS", "C++"];
// var theCourses = c1.concat(c2);
// document.write(theCourses[2]);

// var person = [];
// person["name"] = "John";
// person["age"] = ", "+46+", ";
// document.write(person["age"]);

// document.write(Math.PI+", ");
// document.write(Math.sqrt(36)+", ");
// document.write(Math.pow(3,2)+", ");
// document.write(Math.floor(3.30)+", ");
// document.write(Math.random()+", ");
// document.write(Math.ceil(2.4));

/*
var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
document.write("The square root of" + n + " is" + answer);

function myAlert() {
    alert("Hi")
}
setInterval(myAlert, 3000);
*/

// window.onload = function () {
//     function printTime() {
//         var d = new Date();
//         var hours = d.getHours();
//         var mins = d.getMinutes();
//         var secs = d.getSeconds();
//         document.body.innerHTML =hours + ":" + mins + ":" + secs;
//     }
//     setInterval(printTime, 1000);
// }


// var period = 600;

// function Boom() {

//     if (period != 300) {
//         period = 300;
//     } else {
//         period = 600;
//     }

// }

// function Shake() {
//     this.draw = function () {
//         var time = new Date().getTime();
//         var shakeX = (Math.sin(time * 2.0 * Math.PI / period) + 0);
//         this.x = shakeX;
//         var shakeY = (Math.sin(time * 2.0 * Math.PI / period) + 0);
//         this.y = shakeY;
//         this.context.drawImage(image, 0, 0);
//         this.context.translate(this.x, this.y);
//         setInterval(Boom, 5000)
//     };
// }

// document.getElementById('hi');

// Arrays

// var people = ["Minako", "Amira", "Hamza"]
// people.push("Matthew");
// console.log(people);

// var surnames = ["Suzuki", "Khoso", "Khalid", "Prisco"]
// surnames.pop();

// console.log(surnames);



// window.onload = function () {
//     const TypeWriter = function (txtElement, words, wait = 3000) {
//         this.txtElement = txtElement;
//         this.words = words;
//         this.txt = '';
//         this.wordIndex = 0;
//         this.wait = parseInt(wait, 10);
//         this.type();
//         this.isDeleting = false;
//     }

//     // Type Method
//     TypeWriter.prototype.type = function () {

//         // Current index of word
//         const current = this.wordIndex % this.words.length;

//         //Get full text of current word
//         const fullTxt = this.words[current];
//         // Check if deleting
//         if (this.isDeleting) {
//             //Remove
//             this.txt = fullTxt.substring(0, this.txt.length - 1);

//         } else {
//             // Add char
//             this.txt = fullTxt.substring(0, this.txt.length + 1);
//         }

//         // Insert txt into element
//         this.txtElement.innerHTML = '<span class="txt">${this.txt}</span>'

//         setTimeout(() => this.type(), 500);
//     }

//     // Init On DOM Load
//     document.addEventListener('DOMContentLoaded', init);

//     // Init App
//     function init() {
//         const txtElement = document.querySelector('.txt-type');
//         const words = JSON.parse(txtElement.getAttribute("data-words"));
//         const wait = txtElement.getAttribute('data-wait');
//         // Init TypeWriter
//         new TypeWriter(txtElement, words, wait);
//     }
// }



// Text Input Test
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
//     })
// }







// CHARTS
    // var screen = document.querySelector('input')
    // if (!String.prototype.splice) {

    //     String.prototype.splice = function(idx, rem, str) {
    //         return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
    //     };

    //     var result = "foo baz".splice(4, 0, "bar ");

    //     document.screen.innerHTML = result; // "foo bar baz"
    // }



    // {
    //     "year": 2015,
    //     "femaleUnempRateDRC": 4.37, 
    //     "male-unemployment-rateDRC": 3.05,
    //     "femaleUnempRateMZ": 27.14, 
    //     "male-unemployment-rateMZ": 23.06,
    //     "femaleUnempRateUG": 2.49, 
    //     "male-unemployment-rateUG": 1.37
    // },
    // {
    //     "year": 2016,
    //     "femaleUnempRateDRC": 4.33, 
    //     "male-unemployment-rateDRC": 3.06,
    //     "femaleUnempRateMZ": 26.97, 
    //     "male-unemployment-rateMZ": 22.94,
    //     "femaleUnempRateUG": 2.65, 
    //     "male-unemployment-rateUG": 1.42
    // },
    // {
    //     "year": 2017,
    //     "femaleUnempRateDRC": 4.33, 
    //     "male-unemployment-rateDRC": 3.08,
    //     "femaleUnempRateMZ": 26.85, 
    //     "male-unemployment-rateMZ": 22.84,
    //     "femaleUnempRateUG": 2.81, 
    //     "male-unemployment-rateUG": 1.45
    // },
    // {
    //     "year": 2018,
    //     "femaleUnempRateDRC": 4.3, 
    //     "male-unemployment-rateDRC": 3.1,
    //     "femaleUnempRateMZ": 26.72, 
    //     "male-unemployment-rateMZ": 22.74,
    //     "femaleUnempRateUG": 2.96, 
    //     "male-unemployment-rateUG": 1.48
    // }




    // { 
    //     "unemploymentRateCountry": "DRC", 
    //     "year": 2015, 
    //     "femaleUnempRate": 4.37, 
    //     "male-unemployment-rate": 3.05 
    // },
    // { 
    //     "unemploymentRateCountry": "MZ", 
    //     "year": 2015, 
    //     "femaleUnempRate": 27.14, 
    //     "male-unemployment-rate": 23.06
    // },
    // { 
    //     "unemploymentRateCountry": "UG", 
    //     "year": 2015, 
    //     "femaleUnempRate": 2.49, 
    //     "male-unemployment-rate": 1.37
    // },
    // { 
    //     "unemploymentRateCountry": "DRC", 
    //     "year": 2016, 
    //     "femaleUnempRate": 4.33, 
    //     "male-unemployment-rate": 3.06
    // },
    // { 
    //     "unemploymentRateCountry": "MZ", 
    //     "year": 2016, 
    //     "femaleUnempRate": 26.97, 
    //     "male-unemployment-rate": 22.94
    // },
    // { 
    //     "unemploymentRateCountry": "UG", 
    //     "year": 2016, 
    //     "femaleUnempRate": 2.65, 
    //     "male-unemployment-rate": 1.42
    // },
    // { 
    //     "unemploymentRateCountry": "DRC", 
    //     "year": 2017, 
    //     "femaleUnempRate": 4.33, 
    //     "male-unemployment-rate": 3.08

    // },
    // { 
    //     "unemploymentRateCountry": "MZ", 
    //     "year": 2017, 
    //     "femaleUnempRate": 26.85, 
    //     "male-unemployment-rate": 22.84

    // },
    // { 
    //     "unemploymentRateCountry": "UG", 
    //     "year": 2017, 
    //     "femaleUnempRate": 2.81, 
    //     "male-unemployment-rate": 1.45

    // },
    // { 
    //     "unemploymentRateCountry": "DRC", 
    //     "year": 2018,  
    //     "femaleUnempRate": 4.3, 
    //     "male-unemployment-rate": 3.1

    // },
    // { 
    //     "unemploymentRateCountry": "MZ", 
    //     "year": 2018, 
    //     "femaleUnempRate": 26.72, 
    //     "male-unemployment-rate": 22.74

    // },
    // { 
    //     "unemploymentRateCountry": "UG", 
    //     "year": 2018, 
    //     "femaleUnempRate": 2.96, 
    //     "male-unemployment-rate": 1.48

    // }