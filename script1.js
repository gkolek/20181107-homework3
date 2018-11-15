var date = new Date(2018, 10, 1, 12, 30);

// var day = date.getDate();
// var month = date.getMonth() + 1;
// var year = date.getFullYear();
// var hours = date.getHours();
// var minutes = date.getMinutes();
var day = addPrecedingZero(date.getDate());
var month = addPrecedingZero(date.getMonth() + 1);
var year = addPrecedingZero(date.getFullYear());
var hours = addPrecedingZero(date.getHours());
var minutes = addPrecedingZero(date.getMinutes());

// if (day < 10) {day = '0' + day;}
// if (year < 10) {year = '0' + (year);}
// if (month < 10) {month = '0' + (month);}
// if (hours < 10) {hours = '0' + hours;}
// if (minutes < 10) {minutes = '0' + minutes;}
function addPrecedingZero(value) {
        if (value < 10) {
                return '0' + value;
        }
        return value;
}

// var calendar = (day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + '.');
var calendar = `${day}.${month}.${year} ${hours}:${minutes}`;

console.log(`Hello! Today is ${calendar}`);
document.getElementById("hello").innerHTML = (`Hello! Today is ${calendar}`);
