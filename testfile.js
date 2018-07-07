'use strict'

module.export = class SimpleCalculations {

    /**
     * Creates an instance of SimpleCalculations
     * @param {number} a 
     * @param {number} b 
     */
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    /**
     * Returns the sum of two numbers
     */
    sum(){
        return this.a + this.b;
    }

    /**
     * Returns the average of two numbers
     */
    average() {
        return this.a + this.b / 2;
    }

    /**
     * Devide two numbers
     */
    divide() {
        return this.a / this.b;
    }

} 