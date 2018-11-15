
var weight = '1379137913';
var pesel = prompt("Wprowadź PESEL", "11 cyfr");
console.log(`wagi ${weight}`);
console.log(`input ${pesel}`);

var contSum = 
    pesel[0]*weight[0] + pesel[1]*weight[1] + pesel[2]*weight[2] + pesel[3]*weight[3] + pesel[4]*weight[4] + pesel[5]*weight[5] + pesel[6]*weight[6] + pesel[7]*weight[7] + pesel[8]*weight[8] + pesel[9]*weight[9];

var contSum = contSum % 10;
var contSum = 10 - contSum;
var contSum = contSum % 10;
console.log(`suma kontrolna = ${contSum}`);

if (pesel != null && pesel.length === 11) {
    if (pesel[10] == contSum) {
        console.log(`${pesel} jest prawidłowym numerem PESEL`);
        alert(`${pesel} jest prawidłowym numerem PESEL`);
    } else {
        console.log(`${pesel} nie jest prawidłowym numerem PESEL`);
        alert(`${pesel} nie jest prawidłowym numerem PESEL`);
    }
} else {
    alert('Błedna długość! Odśwież stronę (F5) i wprowadź prawidłowy PESEL o długości 11 cyfr!');
}
