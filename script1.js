var date = new Date(2018, 10, 1, 12, 30);
// var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var miliseconds = date.getMilliseconds();

if (day < 10) {
        day = '0' + day;
}

if (month < 10) {
        month = '0' + (month);
}

if (hours < 10) {
        hours = '0' + hours;
}

if (minutes < 10) {
        minutes = '0' + minutes;
}

if (seconds < 10) {
        seconds = '0' + seconds;
}

var calendar = (
        day + '.' +
        month + '.' +
        year + ' ' +
        hours + ':' +
        minutes) + '.';

var clock = (
        hours + ':' +
        minutes + ':' +
        seconds);

var timer = (
        hours + ':' +
        minutes + ':' +
        seconds + ':' +
        miliseconds);

console.log('Hello! Today is ' + calendar);
document.getElementById("hello").innerHTML = ('Hello! Today is ' + calendar);

// console.log('Hello! It is ' + clock);
// document.getElementById("time").innerHTML = (clock);

