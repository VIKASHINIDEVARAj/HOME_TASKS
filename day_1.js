
    var num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    const title = "Simple JS Calculator Results";

    console.log(title);
    console.log("First number:", num1);
    console.log("Second number:", num2);

    console.log("Addition:", num1 + num2);
    console.log("Subtraction:", num1 - num2);
    console.log("Multiplication:", num1 * num2);
    console.log("Division:", num2 !== 0 ? num1 / num2 : "Cannot divide by zero");
    console.log("Modulus:", num2 !== 0 ? num1 % num2 : "Cannot do modulus by zero");
  