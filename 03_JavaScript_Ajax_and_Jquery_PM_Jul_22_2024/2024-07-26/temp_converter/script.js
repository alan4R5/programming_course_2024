function celsiusToFahrenheit(valNum) {
    let convert = (parseFloat(valNum) * 1.8) + 32;
    console.log(convert)
    document.getElementById("result").innerHTML = convert.toFixed(1);
}

function fahrenheitToCelsius(valNum2) {
    let convert = (parseFloat(valNum2) - 32) / 1.8;
    document.getElementById("result").innerHTML = convert.toFixed(1);
}

function calculateTemp() {
    let temperature = document.getElementById("inputTemp").value;
    if (document.getElementById("cel").checked) {
        celsiusToFahrenheit(temperature);
    }
    else {
        fahrenheitToCelsius(temperature);
    }
}