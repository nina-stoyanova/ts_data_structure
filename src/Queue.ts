export class Queue {
    private _data: any[] = []

    constructor() {
        this._data = [];
    }

    enqueue(input: any) {
        return this._data.push(input)
    }

    dequeue() {
        return this._data.shift()
    }

    isEmpty() {
        if (this._data.length === 0) {
            return true
        } else {
            return false
        }
    }
}