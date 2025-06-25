class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operation = operation.toLowerCase();
  }

  calculate() {
    switch (this.operation) {
      case 'add':
        return this.a + this.b;
      case 'subtract':
        return this.a - this.b;
      case 'multiply':
        return this.a * this.b;
      case 'divide':
        return this.a / this.b;
      default:
        return 'Invalid operation';
    }
  }
}

// Output
const calc1 = new Calculator(10, 5, 'add');
console.log('Addition:', calc1.calculate());

const calc2 = new Calculator(12, 4, 'subtract');
console.log('Subtraction:', calc2.calculate());

const calc3 = new Calculator(6, 2, 'multiply');
console.log('Multiplication:', calc3.calculate());

const calc4 = new Calculator(8, 2, 'divide');
console.log('Division:', calc4.calculate());
