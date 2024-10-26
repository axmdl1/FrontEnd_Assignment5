document.getElementById('openNav').addEventListener("click", function(){
    document.getElementById('mySidenav').style.width = "250px";
    document.getElementById('main').style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
})

document.getElementById('closebtn').addEventListener("click", function(){
    document.getElementById('mySidenav').style.width = "0px";
    document.getElementById('main').style.marginLeft = "0px";
    document.body.style.backgroundColor = "";
})