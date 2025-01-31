var a = 4.5 // number
var b = 4.5 // number
var c = 5 // number
var d = "JavaScript"; // string
var e = true
var f = null // absence of value
var g;
document.write("a = b? " + (a==b));
document.write("<br>");
document.write("a = b? " + (a == b));
document.write("<br>");
document.write("Value of d: " +d);
document.write("<br>");
document.write("Value of e: " + e);
document.write("<br>");
document.write("Value of f: " + f);
document.write("<br>");
document.write("Value of g: " + g);
document.write("<br>");
document.write("<br>");
document.write("Conditional Statements:");
document.write("<br>==========================<br>")
// const/let
const hour = new Date().getHours();
let greeting;
if (hour < 12) {
    greeting = "Good Morning";
}
else if (hour < 17) {
    greeting = "Good Afternoon";
}
else {
    greeting = "Good Evening";
}

document.write(greeting);
document.write("<br>");
document.write("<br>");
document.write("While Loop:");
document.write("<br>==========================<br>")

let num = 1;
while (num <= 100) {
    document.write(num + "<br>");
    num = num + 1;
}