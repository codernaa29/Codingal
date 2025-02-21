var a = 4;
document.write(typeof a + "<br>");

var b = new Date();
document.write(typeof b + "<br>");

var c = true;
document.write(typeof c + "<br>");

var d;
document.write(typeof d + "<br>");

var e = "45";
document.write(typeof e + "<br>");

// Convert into String
var x = 20;
var y = 99;

var result = String(x) + String(y);
document.write(result + "<br>");

try {
    addalert("No error");
} catch(error) {
     document.write(error + "<br>");
}
 var add = (a,b) => a + b;
 document.write(add(17,2) + "<br>");

 var sub =(a,b) => {
    var result = a - b;
    return result;
 }
 document.write(sub(20,4) + "<br>");