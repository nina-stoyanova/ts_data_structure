"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this._data = [];
    }
    push(value) {
        this._data.push(value);
    }
    pop() {
        if (this._data.length > 0) {
            return this._data.pop();
        }
        else {
            return "No elements in the stack";
        }
    }
    peek() {
        return this._data[this._data.length - 1];
    }
    isEmpty() {
        if (this._data.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }
    toString() {
        return this._data.toString();
    }
}
exports.Stack = Stack;
//reverse the elements
let stack1 = new Stack();
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let element of input) {
    //1
    stack1.push(element);
}
let isEmpty = stack1.isEmpty(); //false
let reversedArray = [];
while (!isEmpty) {
    let element = stack1.pop();
    reversedArray.push(element);
    //make sure we'are getting closer to the empty stack
    isEmpty = stack1.isEmpty();
}
console.log(reversedArray);
