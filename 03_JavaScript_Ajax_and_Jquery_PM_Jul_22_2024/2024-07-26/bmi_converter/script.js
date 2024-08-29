const myActualWeight = document.getElementById("weight");
const myActualHeight = document.getElementById("height");
console.log(myActualHeight)
console.log(myActualWeight)

function calculatePercentual() {



    const total = myActualWeight.value / (myActualHeight.value * myActualHeight.value);
    console.log(total);
    document.getElementById("ew").innerHTML = total.toFixed(2);
    if (total <= 16.9) {
        document.getElementById("result").innerHTML = 'Very below the weight'
    } else if (total >= 17 && total <= 18.4) {
        document.getElementById("result").innerHTML = 'Below the weight'
    } else if (total >= 18.5 && total <= 24.9) {
        document.getElementById("result").innerHTML = 'Normal weight'
    } else if (total >= 25 && total <= 29.9) {
        document.getElementById("result").innerHTML = 'Above the weight'
    } else if (total >= 30 && total <= 34.9) {
        document.getElementById("result").innerHTML = 'Obesity level 1'
    } else if (total >= 35 && total <= 40) {
        document.getElementById("result").innerHTML = 'Obesity level 2'
    } else if (total >= 40) {
        document.getElementById("result").innerHTML = 'Obesity level 3'
    }

}
