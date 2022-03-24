  // Your code here
  let input1, input2 = 0
  let operator = ""
  var calculator = {
    one(){ 
        // In order to make the inputs position-less, function evaluates if the operator has been modified and then assign the input to the correct position
        (operator==="")? (input1 = 1):(input2 = 1)
        return this
    },
    two(){ 
        // Same evaluation as above
        (operator==="")? (input1 = 2):(input2 = 2)
        return this
    },
    plus(){ 
        operator = "+"
        return this
    },
    minus(){ 
        operator = "-"
        return this
    },
    // Equals function will create an expression with the inputs and the operator value. then evaluates the expression
    equals(){
        const result = eval(`${input1}${operator.valueOf()}${input2}`)
        this.clear()
        return result
    },
    // Clear function resets the inputs and operator for later reusability
    clear(){
        input1,input2 = 0
        operator = ""
    }
  }
  
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