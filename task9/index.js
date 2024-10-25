function wordCount(str){
    var words = str.split(" ");
    return words.length;
}

function CountAndAlert() {
    var sentence = document.getElementById("text").textContent;
    var count = wordCount(sentence);
    alert("Words: " + count);
}
