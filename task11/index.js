function calculate(){
    const pi = 3.14;
    var radius = document.getElementById("radius").value;
    var v = 4 / 3 * pi * Math.pow(radius, 3);
    document.getElementById("result").innerHTML = `Volume is: ${v}`
}