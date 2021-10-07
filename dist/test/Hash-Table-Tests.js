"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HashTable_js_1 = require("../src/HashTable.js");
const chai_1 = require("chai");
describe("HashTable", function () {
    let hashTable;
    this.beforeEach(() => {
        hashTable = new HashTable_js_1.HashTable();
    });
    it("should set value on a key", function () {
        hashTable.set("key", "nina");
    });
    it("should get value by key", function () {
        hashTable.set("key", "nina");
        let result = hashTable.get("key");
        chai_1.assert.equal(result, "nina");
    });
    it("should set more values", function () {
        hashTable.set("nina", "nina");
        hashTable.set("aleksander", "aleksander");
        hashTable.set("rednaskela", "rednaskela");
        let keyAleks = hashTable.get("rednaskela");
        chai_1.assert.equal(keyAleks, "rednaskela");
    });
    it("should delete value", function () {
        hashTable.set("nina", "nina");
        hashTable.set("aleksander", "aleksander");
        hashTable.delete("nina");
        let deletedKey = hashTable.get("nina");
        chai_1.assert.equal(deletedKey, undefined);
    });
});
