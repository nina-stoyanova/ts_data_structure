import { Queue } from "../src/Queue"
import { assert } from "chai";

describe("Queue", function () {

    let queue: any
    this.beforeEach(() => {
        queue = new Queue()
    })

    it("should add element in the end of the queue", function () {
        queue.enqueue("12()")
        let isEmpty = queue.isEmpty()
        assert.equal(isEmpty, false)
    })

    it("should check if queue is empthy", function () {
        let isEmpty = queue.isEmpty()
        assert.equal(isEmpty, true)
    })

    it("should remove element from the front of the queue", function () {
        queue.enqueue("125kj(")
        let topElement = queue.dequeue()
        assert.equal(topElement, "125kj(")
    })
})