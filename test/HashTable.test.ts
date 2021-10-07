import { HashTable } from "../src/HashTable"
import { assert } from 'chai';



describe("HashTable", function () {

    let hashTable: any
    this.beforeEach(() => {
        hashTable = new HashTable()
    })

    it("should set value on a key", function () {
        hashTable.set("key", "nina")
    })

    it("should get value by key", function () {
        hashTable.set("key", "nina")
        let result = hashTable.get("key")
        assert.equal(result, "nina")
    })

    it("should set more values", function () {
        hashTable.set("nina", "nina")
        hashTable.set("aleksander", "aleksander")
        hashTable.set("rednaskela", "rednaskela")

        let keyAleks = hashTable.get("rednaskela")
        assert.equal(keyAleks, "rednaskela")
    })

    it("should delete value", function () {
        hashTable.set("nina", "nina")
        hashTable.set("aleksander", "aleksander")

        hashTable.delete("nina")
        let deletedKey = hashTable.get("nina")
        assert.equal(deletedKey, undefined)
    })

})



