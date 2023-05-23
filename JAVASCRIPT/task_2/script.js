class Fraction {
    constructor(numerator, denominator) {
      this.numerator = numerator;
      this.denominator = denominator;
    }
  
    add(fraction) {
      const numerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
      const denominator = this.denominator * fraction.denominator;
      return new Fraction(numerator, denominator).simplify();
    }
  
    subtract(fraction) {
      const numerator = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
      const denominator = this.denominator * fraction.denominator;
      return new Fraction(numerator, denominator).simplify();
    }
  
    multiply(fraction) {
      const numerator = this.numerator * fraction.numerator;
      const denominator = this.denominator * fraction.denominator;
      return new Fraction(numerator, denominator).simplify();
    }
  
    divide(fraction) {
      const numerator = this.numerator * fraction.denominator;
      const denominator = this.denominator * fraction.numerator;
      return new Fraction(numerator, denominator).simplify();
    }
  
    simplify() {
      const gcd = this.greatestCommonDivisor(this.numerator, this.denominator);
      this.numerator /= gcd;
      this.denominator /= gcd;
      return this;
    }
  
    greatestCommonDivisor(a, b) {
      if (b === 0) {
        return a;
      }
      return this.greatestCommonDivisor(b, a % b);
    }
  
    toString() {
      return `${this.numerator}/${this.denominator}`;
    }
  }
  
  const fraction1 = new Fraction(1, 2);
  const fraction2 = new Fraction(3, 4);
  
  console.log("Fraction 1:", fraction1);
  console.log("Fraction 2:", fraction2);
  console.log("Addition:", fraction1.add(fraction2));
  console.log("Subtraction:", fraction1.subtract(fraction2));
  console.log("Multiplication:", fraction1.multiply(fraction2));
  console.log("Division:", fraction1.divide(fraction2));
  