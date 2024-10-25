function alphabeticalOrder(str) {
    return str.split('').sort((a, b) => a > b ? 1 : -1).join('');
}

function sort(){
    var input = document.getElementById('text').value; 
    var sort = alphabeticalOrder(input);
    document.getElementById('result').textContent = `Sorted text: ${sort}` 
}