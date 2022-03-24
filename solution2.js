  // Your code here
  class Calculator {
    constructor(){
      this.operator = ""
      this.input1, this.input2 = 0
    }
    one(){ 
        // In order to make the inputs position-less, function evaluates if the operator has been modified and then assign the input to the correct position
        (this.operator==="")? (this.input1 = 1):(this.input2 = 1)
        return this
    }
    two(){ 
        // Same evaluation as above
        (this.operator==="")? (this.input1 = 2):(this.input2 = 2)
        return this
    }
    plus(){ 
        this.operator = "+"
        return this
    }
    minus(){ 
        this.operator = "-"
        return this
    }
    // Equals function will create an expression with the inputs and the operator value. then evaluates the expression
    equals(){
        const result = eval(`${this.input1}${this.operator.valueOf()}${this.input2}`)
        this.clear()
        return result
    }
    // Clear function resets the inputs and operator for later reusability
    clear(){
        this.input1,this.input2 = 0
        this.operator = ""
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