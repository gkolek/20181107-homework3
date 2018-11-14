
// var myVar = setInterval(myTimer, 1000);
// function myTimer() {
//         var date = new Date();
//         var timer = date.toLocaleTimeString();
//         document.getElementById("clock").innerHTML = timer;
// }

// var hours = timer.getHours();
// var minutes = timer.getMinutes();
// console.log(hours);
// console.log(minutes);

var myVar = setInterval(myTimerH, 1000);
function myTimerH() {
        var date = new Date();
        var hours = date.getHours();
        document.getElementById("fig2").innerHTML = hours;
}

var myVar = setInterval(myTimerM, 1000);
function myTimerM() {
        var date = new Date();
        var minutes = date.getMinutes();
        document.getElementById("fig4").innerHTML = minutes;
}

var myVar = setInterval(myTimerS, 1000);
function myTimerS() {
        var date = new Date();
        var seconds = date.getSeconds();
        document.getElementById("fig6").innerHTML = seconds;
}