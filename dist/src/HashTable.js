"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
class HashTable {
    constructor() {
        this._data = [];
        this._data.push([]);
        this._data.push([]);
        this._data.push([]);
        this._data.push([]);
        this._data.push([]);
    }
    hash(input) {
        let hashCode = 0;
        for (let i = 0; i < input.length; i++) {
            let element = input[i];
            hashCode = hashCode + input.charCodeAt(element);
        }
        return hashCode;
    }
    set(key, value) {
        let keyHash = this.hash(key); //300, 300
        let index = keyHash % 5;
        this._data[index].push({
            requestedKey: key,
            requestedValue: value
        });
    }
    get(key) {
        let keyHash = this.hash(key); //300
        let index = keyHash % 5; //2
        let resultObj = this._data[index].find((obj) => {
            if (obj.requestedKey === key) {
                return true;
            }
        });
        if (resultObj) {
            return resultObj.requestedValue;
        }
    }
    delete(key) {
        let keyHash = this.hash(key); //300
        let index = keyHash % 5; //2
        this._data[index].find((obj) => {
            if (obj.requestedKey === key) {
                delete obj.requestedValue;
            }
        });
    }
}
exports.HashTable = HashTable;
