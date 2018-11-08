var myPesel = [];

function myFunction() {
    var myPesel = prompt("Wprowadź PESEL", "11 cyfr");
    if (myPesel != null) {
        document.getElementById("pesel").innerHTML =
        "Twój PESEL to " + myPesel + " ...";
    }
}
var a = myPesel;
console.log(a);