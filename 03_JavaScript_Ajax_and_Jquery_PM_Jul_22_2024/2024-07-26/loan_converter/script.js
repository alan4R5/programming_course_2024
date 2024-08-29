



function calculatePercentual() {
    const myActualLoan = document.getElementById("loan").value;
    const myActualInterest = document.getElementById("interest").value;
    const myActualMonths = document.getElementById("months").value;

    const interest = myActualLoan * (myActualInterest / 100) * myActualMonths;
    const totalAmount = +myActualLoan + +interest;
    const totalMonth = totalAmount / myActualMonths;

    console.log(interest)

    console.log(totalAmount)
    console.log(totalMonth)
    document.getElementById("total").innerHTML = totalMonth;
}