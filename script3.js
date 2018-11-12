// function myFunction() {
var pesel = prompt("Wprowadź PESEL", "11 cyfr");
// }


var p1 = pesel[0];
var p2 = pesel[1];
var p3 = pesel[2];
var p4 = pesel[3];
var p5 = pesel[4];
var p6 = pesel[5];
var p7 = pesel[6];
var p8 = pesel[7];
var p9 = pesel[8];
var p10 = pesel[9];
var p11 = pesel[10];
console.log('input ' + pesel);

var weight = '1379137913';
var w1 = weight[0];
var w2 = weight[1];
var w3 = weight[2];
var w4 = weight[3];
var w5 = weight[4];
var w6 = weight[5];
var w7 = weight[6];
var w8 = weight[7];
var w9 = weight[8];
var w10 = weight[9];
console.log('wagi', weight);

var step1 = p1 * w1;
var step2 = p2 * w2;
var step3 = p3 * w3;
var step4 = p4 * w4;
var step5 = p5 * w5;
var step6 = p6 * w6;
var step7 = p7 * w7;
var step8 = p8 * w8;
var step9 = p9 * w9;
var step10 = p10 * w10;

var contSum = step1 + step2 + step3 + step4 + step5 + step6 + step7 + step8 + step9 + step10;

var contSum = contSum % 10;
var contSum = 10 - contSum;
var contSum = contSum % 10;
console.log('suma kontrolna = ' + contSum);


if (pesel == null || pesel.length !== 11) {
    console.log('Błedna długość! Wprowadź prawidłowy PESEL o długości 11 cyfr!');
    alert('Błedna długość! Odśwież stronę (F5) i wprowadź prawidłowy PESEL o długości 11 cyfr!');
} else if (p11 == contSum) {
    console.log(pesel + ' jest prawidłowym numerem PESEL');
    alert(pesel + ' jest prawidłowym numerem PESEL');
} else {
    console.log(pesel + ' nie jest prawidłowym numerem PESEL');
    alert(pesel + ' nie jest prawidłowym numerem PESEL');
} 


