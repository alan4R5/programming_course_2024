const myActualBill = document.getElementById("bill");
const myActualTipRate = document.getElementById("tr");
console.log(myActualTipRate)
console.log(myActualBill)

function calculatePercentual() {



    const total = myActualBill.value / myActualTipRate.value;
    console.log(total);
    document.getElementById("total").innerHTML = total.toFixed(2);
}
