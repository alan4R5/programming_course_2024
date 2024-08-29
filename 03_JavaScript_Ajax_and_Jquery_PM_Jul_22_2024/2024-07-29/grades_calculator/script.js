



function calculatePercentual() {
    const myActualMath = document.getElementById("math").value;
    const myActualEng = document.getElementById("eng").value;
    const myActualPhys = document.getElementById("phys").value;
    const myActualHis = document.getElementById("his").value;
    const myActualPhil = document.getElementById("phil").value;


    const gradeTotal = parseFloat(myActualMath) + parseFloat(myActualEng) + parseFloat(myActualPhys) + parseFloat(myActualHis) + parseFloat(myActualPhil);
    console.log(gradeTotal)

    const gradeAverage = gradeTotal / 5;

    document.getElementById("total").innerHTML = gradeAverage;

    if (gradeAverage < 50) {
        document.getElementById("result").innerHTML = "Fail";
    } else if (gradeAverage < 60) {
        document.getElementById("result").innerHTML = "C";
    } else if (gradeAverage < 70) {
        document.getElementById("result").innerHTML = "B";
    } else if (gradeAverage < 80) {
        document.getElementById("result").innerHTML = "A";
    } else {
        document.getElementById("result").innerHTML = "A+";
    }
}