function isPalindrome(text) {
    text_lower = text.toLowerCase();
    //document.writeln(text_lower);
    // convert string to array
    text_splitted = text_lower.split("");
    //document.writeln(text_splitted);
    //reverse the array
    text_reversed = text_splitted.reverse();
    //document.writeln(text_reversed);

    // convert the array into string
    result = text_reversed.join("");

    let message;
    if(result == text_lower) {
        message = text + " is a palindrome.";
    } else {
        message = text + " is not a palindrome";
    }
    document.getElementById("result").innerHTML = message;
    }
    function check(event) {
        event.preventDefault();
        let user_input = document.getElementById("user_input").value;
        isPalindrome(user_input);
    }
