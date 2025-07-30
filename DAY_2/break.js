
     // break
    for (let num = 2; num <= 20; num++)
    {
      let isPrime = true;
      for (let k = 2; k < num; k++)
      {
        if (num % k === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log("First prime number:", num);
        break;
      }
    }

    // continue
    for (let z = 1; z <= 20; z++) 
    {
      if (z % 2 === 0) continue;
      console.log(z);
    }
   