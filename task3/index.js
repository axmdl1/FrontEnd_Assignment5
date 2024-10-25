function check(){
    var text = document.getElementById('text').value; 
    var res = null;

    for(var char of text){
        if(text.indexOf(char) === text.lastIndexOf(char)){
            res = char; 
            break; 
        }
    }

    document.getElementById('result').textContent = `Non repeated character is: ${res}`; 
}
