function calculate(){
    var b = document.getElementById("bottom").value;
    var h = document.getElementById("height").value;
    var v = 1 / 2 * b * h;
    document.getElementById("result").innerHTML = `Volume is: ${v}`
}