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