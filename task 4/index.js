function Replace(){
    var input = document.getElementById('text').value; 
    var replace = moveCharsForward(input); 
    window.alert(replace); 
}

function moveCharsForward(str){
    return str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}