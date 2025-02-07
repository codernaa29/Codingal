class Animal {
    // property: class variable 
    static kingdom = "Animal Kingdom" ;

    // constructor
    constructor(n, a) {
        // instance variable
        this.name = n;
        this.age = a;
    }

    static sound() {
        document.write("Animal makes sound <br>");
    }

}

// create object
lion = new Animal("Mufasa", 8);
document.write(Animal.kingdom + "<br>");
document.write(lion.name + "<br>");
document.write(lion.age + "<br>");

tiger = new Animal("Tiger", 4);
document.write(Animal.kingdom + "<br>");
document.write(tiger.name + "<br>");
document.write(tiger.age + "<br>");

class Dog extends Animal{
    // method
    display () {
        document.write("Name:" + this.name +"<br> Age:" + this.age + "<br>");
    }
}

// create object of child class
buddy = new Dog("Buddy" , 2);
buddy.display();
Dog.sound();
