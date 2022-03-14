function multiply() {
    var x, y, multiply, text;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    multiply = x * y;
    text = multiply;
    document.getElementById("result").innerHTML = text;
}

function divide() {
    var x, y, divide, text;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    divide = x / y;
    text = divide;
    document.getElementById("result").innerHTML = text;
}