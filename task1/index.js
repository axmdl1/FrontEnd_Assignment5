var number1 = parseInt(window.prompt("Write a 1st number"));
var number2 = parseInt(window.prompt("Write a 2nd number")); 
var number3 = parseInt(window.prompt("Write a 3rd number")); 

if((100 - number1) < (100 - number2)){
    document.getElementById('result').textContent = `Closest to 100 is: ${number1}`; 
}else if((100 - number2) < (100 - number3)){
    document.getElementById('result').textContent = `Closest to 100 is: ${number2}`;
}else if((100 - number3) < (100 - number1)){
    document.getElementById('result').textContent = `Closest to 100 is: ${number3}`;
}