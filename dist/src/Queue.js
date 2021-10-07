"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this._data = [];
        this._data = [];
    }
    enqueue(input) {
        return this._data.push(input);
    }
    dequeue() {
        return this._data.shift();
    }
    isEmpty() {
        if (this._data.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Queue = Queue;
