
// OOP calculator using JavaScript

class Calculator {
    constructor() {
      const readline = require('readline');
  
      this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    }
  
    getInput(prompt) {
      return new Promise((resolve) => {
        this.rl.question(prompt, (input) => resolve(input));
      });
    }
  
    async calculate() {
      try {
        const num1 = parseFloat(await this.getInput('Enter the first number: '));
        const operator = await this.getInput('Enter the operator (+, -, *, /): ');
        const num2 = parseFloat(await this.getInput('Enter the second number: '));
  
        let result;
  
        switch (operator) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            result = num1 / num2;
            break;
          default:
            console.log('Invalid operator');
            this.rl.close();
            return;
        }
  
        console.log(`The result is: ${result}`);
      } catch (error) {
        console.log('Error:', error);
      } finally {
        this.rl.close();
      }
    }
  }
  
  const calculator = new Calculator();
  calculator.calculate();
  