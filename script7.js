
var myVar = setInterval(myTimer, 1000);
function myTimer() {
        var date = new Date();
        var timer = date.toLocaleTimeString();
        document.getElementById("clock").innerHTML = timer;
}