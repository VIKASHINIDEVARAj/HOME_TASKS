    
     // while loop
            let i = 1;
            while (i <= 10)
            {
            console.log(i);
             i++;
            }

     //do-while loop 
            let correct = 7;
             let input = 0;
             do 
             {
                input = (prompt("Guess the number (1-10):"));
            } 
            while (input !== correct);
            console.log("Correct Guess!");

     //for loop
         let n = 5;
        let sum = 0;
     for (let j = 1; j <= n; j++) 
     {
      sum += j;
    }
    console.log("Sum of first", n, "numbers is:", sum);

     //nested for loop
        let rows = 5;
        let pattern = "";

        for (let i = 1; i <= rows; i++) 
        {
         for (let j = 1; j <= i; j++)
         {
            pattern += "*";
            }
            pattern += "\n"; 
        }

        console.log(pattern);
