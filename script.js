function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
    var currentVal = document.getElementById("countDownButton").innerHTML;
    var newVal = currentVal = 0;
    if (currentVal > 0) {
        newVal = currentVal - 3;
    }
    document.getElementById("countDownButton").innerHTML = newVal
}