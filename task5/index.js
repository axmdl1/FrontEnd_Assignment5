var input1 = window.prompt("Enter a word");
var input2 = window.prompt("Enter a word");
var input3 = window.prompt("Enter a word");
var inputs = [input1, input2, input3];

var result = longest_string(inputs);
document.getElementById('result').textContent = `Longest: ${result.longest}, Shortest: ${result.shortest}`;

function longest_string(str_arr) {
    var longest = str_arr[0];
    var shortest = str_arr[0];

    for (let i = 1; i < str_arr.length; i++) {
        if (str_arr[i].length > longest.length) {
            longest = str_arr[i];
        }
        if (str_arr[i].length < shortest.length) {
            shortest = str_arr[i];
        }
    }

    return { shortest, longest };
}