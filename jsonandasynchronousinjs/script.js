const student = {
    name: "Noshin",
    grade: 9,
    group: "Science"
};

// Convert JS Object into JSON
const json_text = JSON.stringify(student);
document.write(json_text);

// Convert JSON into JS Object
const student_new = JSON.parse(json_text);
document.write("<br>");
document.write(student_new.name);

// Promise, Async, Await

function bringPizza() {
   return new Promise((resolve, reject) => {
        const isPizzaBrought = true;
        setTimeout(function() {
            if (isPizzaBrought == true) {
                resolve("Yayy! Your friend has brought pizza!🥳");   
            } else {
                reject("Oops! Your friend did not bring pizza.😕")
            }
        }, 2000); 

        });
    }

    async function hangout() {
        document.write("<br>Calling your friend to bring pizza!📞<br>");

        try {
            const message = await bringPizza();
            document.write(message);
            document.write("<br>Let's hangout!");
        } catch(error) {
            document.write(error);
            document.write("<br>We can't hangout!");
        }
    }

    hangout()