function calcSquare() {
    let number = document.getElementById("numberInput").value;
    let square = number * number;
    document.getElementById("result").innerHTML = "Square of " + number + " is " + square;
}
