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



/*
window.onload = function() {
    function scrollAppear() {
        var textEffect = document.querySelector('.intro-text');
        var textPosition = textEffect.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1;

        if (textPosition < screenPosition) {
            textEffect.classList.add('.intro-appear');
            console.log('This is working!');
        }
    }
    window.addEventListener('scroll', scrollAppear);
}
*/





// JS Carousel 
// window.onload = function () {

// const nextBtn = document.querySelector('.nextBtn');
// const prevBtn = document.querySelector('.prevBtn');
// const container = document.querySelector('.images');

// let counter = 2;

// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);

// function nextSlide() {
//     container.animate([{opacity: '0.1'}, {opacity: '1.0'}], {duration: 500, fill: 'forwards'})
    
//     if(counter === 3){
//         counter = 1;
//     }
//     counter++;
    
//     container.style.backgroundImage = `url(img/bgimg-${counter}.jpeg)`
// }

// function prevSlide() {
//     container.animate([{opacity: '0.1'}, {opacity: '1.0'}], {duration: 500, fill: 'forwards'})

//     if(counter === 2){
//         counter = 4;
//     }
//     counter--;
    
//     container.style.backgroundImage = `url(img/bgimg-${counter}.jpeg)`
// }

// }





// Calculator

window.onload = function() {

const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');


for(let i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    })
}

equalBtn.addEventListener('click', function() {

    if(screen.value === '') {
        alert('Input is empty.')
    }
    else {
        let value = eval(screen.value);
        screen.value = value;
    }
    
})

clearBtn.addEventListener('click', function() {
    screen.value = '';
})

}