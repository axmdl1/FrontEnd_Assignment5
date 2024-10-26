function calculate(){
    const pi = 3.14;
    var width = document.getElementById("width").value;
    var h = document.getElementById("height").value;
    var length = document.getElementById("length").value;
    var v = length * width * h;
    document.getElementById("result").innerHTML = `Volume is: ${v}`
}