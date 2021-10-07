import { Stack } from "../src/Stack"
import { assert } from "chai";


describe("Stack", function () {


    let stack: any
    this.beforeEach(() => {
        stack = new Stack()
    })

    it("should push value", function () {
        stack.push("nina")
        stack.push("petya")
        let topElement = stack.pop()
        assert.equal(topElement, "petya")
    })

    it("should return value", function () {
        let topElement = stack.pop()
        assert.equal(topElement, "No elements in the stack")
    })

    it("should check value", function () {
        stack.push("nina")
        stack.push("petya")
        let topElement = stack.peek()
        assert.equal(topElement, "petya")
    })

    it("should check if empty", function () {
        stack.push("nina")
        stack.push("petya")
        let topElement = stack.isEmpty()
        assert.equal(topElement, false)

    })

    it("should create string", function () {
        stack.push("nina")
        stack.push("petya")
        let string = stack.toString()
        assert.equal(string, "nina,petya")
    })
})