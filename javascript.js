function clearDisplay() {
    document.getElementById("display").value = "AC";
}

function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function appendSymbol(symbol) {
    document.getElementById("display").value += symbol;
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}
