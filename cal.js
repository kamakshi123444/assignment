function calculator(a, b, operator) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b === 0) {
          return "Error: Division by zero";
        }
        return a / b;
      default:
        return "Invalid operator";
    }
  }
  

  console.log(calculator(5, 10, "+"));
  console.log(calculator(5, 10, "-")); 
  console.log(calculator(5, 10, "*")); 
  console.log(calculator(5, 10, "/")); 
  console.log(calculator(5, 0, "/"));  
  