var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

var clock = setInterval(
    function time(){
        var curr_date = new Date();
        var hr = curr_date.getHours();
        var min = curr_date.getMinutes();
        var sec = curr_date.getSeconds();

        if (hr < 10){
            hr = '0' + hr;
        }
        if (min < 10){
            min = '0' + min;
        }
        if (sec < 10){
            sec = '0' + sec;
        }

        hour.textContent = hr;
        minute.textContent = min;
        second.textContent = sec;
    }
)