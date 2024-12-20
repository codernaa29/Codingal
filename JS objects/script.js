var student = {
    name: "Noshin Alam",
    roll: 190096,
    school: "Barishal Govt. Model School & College"
};

document.getElementById("student_info").innerHTML="Name: " + student.name
+ ", Roll No: " + student.roll
+ ", School: " + student.school;

// Built-in Object
document.getElementById("asin_value"). innerHTML = Math.asin(-1);

var random_number = Math.random() * 500;
document.getElementById("random_number"). innerHTML = random_number;

document.getElementById("rounded_random_number").innerHTML = Math.round(random_number);

// Built-in Object - Arguments
function getNumbers() {
    var product = 1;
    for (var index=0; index <=3; index= index + 1) {
        product = product * arguments[index];
    }
    return product;
}
var numbers = getNumbers(1,2,3,4);
document.getElementById("numbers").innerHTML = numbers;