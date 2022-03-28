  // Your code here
  class Calculator {
    constructor(){
      // Define the operation helper that will assemble the operation expression
      this.operation = ""
    }
    one(){ 
        this.operation += "1"
        return this
    }
    two(){ 
        this.operation += "2"
        return this
    }
    plus(){ 
        this.operation += "+"
        return this
    }
    minus(){ 
        this.operation += "-"
        return this
    }
    // Equals function will evaluate the expression and return the result
    equals(){
        const result = eval(`${this.operation}`)
        this.clear()
        return result
    }
    // Clear function resets the operator for later reusability
    clear(){
        this.operation = ""
    }
  }

  var calculator = new Calculator()
  
  // Test case to satisfy
  console.log(
    'one plus two equals 3:',
    calculator.one().plus().two().equals() === 3
  );
  console.log(
    'two minus one equals 1:',
    calculator.two().minus().one().equals() === 1
  );
  console.log(
    'one minus one equals 0:',
    calculator.one().minus().one().equals() === 0
  );
  console.log(
    'complex calc equals 2:',
    calculator.one().plus().two().minus().one().equals() === 2
  );
  console.log(
    'complex calc equals 4:',
    calculator.one().plus().two().minus().one().plus().two().equals() === 4
  );