let counter = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 5000)

function nextImage() {
    counter++
    if (counter > 7) {
        counter = 1;
    }

    document.getElementById('radio' + counter).checked = true;
}


const value = document.getElementById('value');
const plusbutton = document.getElementById('plus');
const minusbutton = document.getElementById('minus');

const updateValue = () => {
    value.innerHTML = count;

};



let count = 1;
let intervalId = 0

plusbutton.addEventListener('mousedown', () => {
    value.innerHTML = ++count;
    updateValue()
});


minusbutton.addEventListener('mousedown', () => {
    value.innerHTML = --count;
    updateValue()

    if (count == 0) {
        value.innerHTML = ++count;
        updateValue()
    }


});

document.addEventListener('mouseup', () => clearInterval(intervalId));



const value2 = document.getElementById('value2');
const plusbutton2 = document.getElementById('plus2');
const minusbutton2 = document.getElementById('minus2');

const updateValue2 = () => {
    value2.innerHTML = count2;

};



let count2 = 1;
let intervalId2 = 0

plusbutton2.addEventListener('mousedown', () => {
    value2.innerHTML = ++count2;
    updateValue2()
});


minusbutton2.addEventListener('mousedown', () => {
    value2.innerHTML = --count2;
    updateValue()
    if (count2 == 0) {
        value2.innerHTML = ++count2;
        updateValue()
    }

});





document.addEventListener('mouseup', () => clearInterval(intervalId2));


const value3 = document.getElementById('value3');
const plusbutton3 = document.getElementById('plus3');
const minusbutton3 = document.getElementById('minus3');

const updateValue3 = () => {
    value3.innerHTML = count3;

};



let count3 = 1;
let intervalId3 = 0

plusbutton3.addEventListener('mousedown', () => {
    value3.innerHTML = ++count3;
    updateValue3()
});


minusbutton3.addEventListener('mousedown', () => {
    value3.innerHTML = --count3;
    if (count3 == 0) {
        value3.innerHTML = ++count3;
    }

    updateValue()
});





document.addEventListener('mouseup', () => clearInterval(intervalId3));
