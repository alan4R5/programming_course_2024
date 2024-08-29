function dis(val) {
    document.getElementById("display").value += val;
}

document.addEventListener('heydown', function (event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '%'].includes(key)) {
        dis(key);
    } else if (key === 'Enter') {
        solve();
    } else if (key === 'Escape') {
        clr();
    }
});

function solve() {
    var result = document.getElementById('display').value;
    result = result.replace(/sqrt\(([^)]+)\b/g, 'Math.sqrt($1)');
    if (result) {
        document.getElementById('display').value = parseFloat(eval(result))
    }
}

function clr() {
    document.getElementById("display").value = "";
}