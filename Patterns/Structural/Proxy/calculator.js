class Calculator {
    constructor() {
        this.stack = [];
    }

    putValue(value) {
        this.stack.push(value);
    }

    getValue() {
        return this.stack.pop();
    }

    peekValue() {
        return this.stack[this.stack.length - 1];
    }

    clear() {
        this.stack = [];
    }

    multiply() {
        let multiplicand = this.getValue();
        let multiplier = this.getValue();
        let total = multiplicand * multiplier;
        this.putValue(total)
        return this.getValue();
    }

    divide() {
        let divisor = this.getValue();
        let dividend = this.getValue();
        this.putValue(dividend / divisor);
        return this.getValue();
    }
}

const calculatorStack = new Calculator();
calculatorStack.putValue(2);
calculatorStack.putValue(5);
console.log(calculatorStack.multiply())
calculatorStack.putValue(10)
calculatorStack.putValue(0);
console.log('Result is: ',calculatorStack.divide());
console.log('/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********');
console.log('            ');
console.log('/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********');
console.log('            ');
console.log('            ');
console.log('            ');
console.log('            ');

/**
 * Composition Implementation
 */

class CompositionCalculator {
    constructor(calculator){
        this.calculator = calculator;
    }

    getValue() {
        return this.calculator.getValue();
    }

    putValue(value){
        return this.calculator.putValue(value)
    }

    peekValue() {
        this.stack[this.stack.length - 1];
    }

    clear() {
        this.stack = [];
    }

    peekValue() {
        return this.calculator.peekValue();
    }

    divide(){
        const divisor = this.calculator.peekValue();

        if (divisor === 0) {
            throw Error('Not possible in composition');
        }
        return this.calculator.divide();
    }

    multiply(){
        return this.calculator.multiply();
    }


}
/* let calculatorStackTwo = new Calculator();
const calculatorComposition = new CompositionCalculator(calculatorStackTwo);
calculatorComposition.putValue(10);
calculatorComposition.putValue(0);
console.log('Validating the issue: ',calculatorComposition.divide()); */

console.log('/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********');
console.log('            ');
console.log('/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********');
console.log('            ');
console.log('            ');
console.log('            ');
console.log('            ');

function ObjectAugmentationCalculator(calculator) {
    /**
     * The original divide method of the calculator object is stored in a constant divideOriginal. 
     * This allows the function to keep a reference to the original divide behavior.
     */
    const divideOriginal = calculator.divide; 
    /**
     * The divide method of the calculator object is overridden with a new function. 
     * This new function adds additional checks before calling the original divide method
     */
    calculator.divide = () => {
        const divisor = calculator.peekValue();

        if(divisor === 0) {
            throw Error('Division by 0 not possible in augmented');
        }
    /**
     * If the divisor is not zero, the original divide method (stored in divideOriginal) is called using .apply(calculator). 
     * This ensures that the method is called in the context of the calculator object.
     */
        return divideOriginal.appy(calculator);
    }
    return calculator;
}

/* const stackCalculatorThree = new Calculator();
const augmentatedCalculator = ObjectAugmentationCalculator(stackCalculatorThree);
augmentatedCalculator.putValue(10);
augmentatedCalculator.putValue(5);
console.log(augmentatedCalculator.multiply());
augmentatedCalculator.putValue(0);
console.log(augmentatedCalculator.divide()); */


console.log('/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********');
console.log('            ');
console.log('/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********/****/*****/******/*********');
console.log('            ');
console.log('            ');
console.log('            ');
console.log('            ');

/**
 * Proxy Object
 */
const safeCalculatorHandler = {
    get: (target, property) => {
        if (property === 'divide') {
            return function() {
                const divisor = target.peekValue();
                if (divisor === 0 ){
                    throw Error('Division by 0 in Proxy Object');
                }
                return target.divide();
            }
            
        }
        return target[property];
    }
}

const calculatorFour = new Calculator();
const proxyObject = new Proxy(calculatorFour, safeCalculatorHandler);
proxyObject.putValue(20)
proxyObject.putValue(10);
console.log('Multiplying in Proxy Object: ',proxyObject.multiply());
console.log('');
console.log('');
proxyObject.putValue(20);
proxyObject.putValue(0);
console.log(proxyObject.divide());