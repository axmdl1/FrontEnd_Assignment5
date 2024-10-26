function calculate(){
    const pi = 3.14;
    var radius = document.getElementById("radius").value;
    var h = document.getElementById("height").value;
    var v = h * pi * Math.pow(radius, 2);
    document.getElementById("result").innerHTML = `Volume is: ${v}`
}