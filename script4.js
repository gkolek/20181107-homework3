
var setTime = setInterval(myTimer, 1000);
function myTimer() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var hourTen = Math.floor(hours / 10);
        var hourUnit = hours % 10;
        var minuteTen = Math.floor(minutes / 10);
        var minuteUnit = minutes % 10;
        var secondTen = Math.floor(seconds / 10);
        var secondUnit = seconds % 10;
        document.getElementById("fig1").innerHTML = hourTen;
        document.getElementById("fig2").innerHTML = hourUnit;
        document.getElementById("fig3").innerHTML = minuteTen;
        document.getElementById("fig4").innerHTML = minuteUnit;
        document.getElementById("fig5").innerHTML = secondTen;
        document.getElementById("fig6").innerHTML = secondUnit;
}


