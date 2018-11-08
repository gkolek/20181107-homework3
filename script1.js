var date = new Date(2018, 11, 1, 12, 30);

var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var hours = date.getHours();
var minutes = date.getMinutes();

if (day < 10) {
        day = '0' + day;
}

if (month < 10) {
        month = '0' + (month + 1);
}

if (hours < 10) {
        hours = '0' + hours;
}

if (minutes < 10) {
        minutes = '0' + minutes;
}

var calendar = ('Hello! Today is ' +
        day +
        '.' + month +
        '.' + year +
        ' ' + hours +
        ':' + minutes) +
        '.';

console.log(calendar);

document.getElementById("hello").innerHTML = (calendar);

// function myFunction() {
//         document.getElementById("hello").innerHTML = (calendar);
//         ;
// }

