
    let choice;

    do {
      choice = prompt(
        "Calculator Menu:\n" +
        "1. Add\n" +
        "2. Subtract\n" +
        "3. Multiply\n" +
        "4. Divide\n" +
        "5. Exit\n" +
        "Enter your choice (1-5):"
      );

      if (choice === "5") {
        console.log("Exiting the calculator.");
        break;
      }

      if (["1", "2", "3", "4"].includes(choice)) {
        let num1 = prompt("Enter first number:");
        let num2 = prompt("Enter second number:");

        if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
          console.log("Invalid number input. Try again.");
          continue;
        }

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch (choice) {
          case "1":
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
          case "2":
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
          case "3":
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;
          case "4":
            if (num2 === 0) {
              console.log("Cannot divide by zero.");
            } else {
              console.log(`${num1} / ${num2} = ${num1 / num2}`);
            }
            break;
        }
      } else {
        console.log("Invalid choice. Please enter 1, 2, 3, 4, or 5.");
        continue;
      }
    } while (true);
  
