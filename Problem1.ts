//Fibonacci Number

function fibonacciIterative(n: number): number {
    if (n <= 0) {
      throw new Error("Invalid input. n should be a positive integer.");
    }
  
    if (n === 1 || n === 2) {
      return n - 1;
    }
  
    let prev = 0;
    let current = 1;
  
    for (let i = 3; i <= n; i++) {
      const next = prev + current;
      prev = current;
      current = next;
    }
  
    return current;
  }
  
  // Test case
  console.log(fibonacciIterative(5)); // Output: 5
  