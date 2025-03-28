let choice = prompt("Welcome to the Area Calculator.\nEnter your choice:\n1. Rectangle Calculator.\n2. Triangle Calculator.\n3. Circle Calculator.\n4. Paralorogram");

if (choice == "1") {
    const l = prompt("Enter the length: ");
    const b = prompt("Enter the breadth: ");
    const result = l * b;
    alert("The area is: " + result);
}

else if (choice == "2") {
    const h = prompt("Enter the height: ");
    const b = prompt("Enter the base: ");
    const result = (h * b) / 2;
    alert("The area is: " + result);
}
else if (choice == "3") {
    const r = prompt ("Enter the radius: ");
    const result = (3.1416 * r * r);
    alert("The area is: " + result);
}

else if (choice == "4") {
    const h = prompt("Enter the height: ");
    const cb = prompt("Enter the corresponding base: ");
    const result = h * cb;
    alert("The area is: " + result);
}