export class HashTable {
    private _data: any[]

    constructor() {
        this._data = [];
        this._data.push([])
        this._data.push([])
        this._data.push([])
        this._data.push([])
        this._data.push([])
    }

    hash(input: any) { //string "key"
        let hashCode = 0;
        for (let i = 0; i < input.length; i++) {
            let element = input[i]
            hashCode = hashCode + input.charCodeAt(element)
        }
        return hashCode
    }

    set(key: string, value: any) {
        let keyHash = this.hash(key) //300, 300
        let index = keyHash % 5;
        this._data[index].push({
            requestedKey: key,
            requestedValue: value
        })
    }

    get(key: string) {
        let keyHash = this.hash(key) //300
        let index = keyHash % 5; //2
        let resultObj = this._data[index].find((obj: any) => {
            if (obj.requestedKey === key) {
                return true
            }
        })
        if (resultObj) {
            return resultObj.requestedValue
        }
    }

    delete(key: string) {
        let keyHash = this.hash(key) //300
        let index = keyHash % 5; //2
        this._data[index].find((obj: any) => {
            if (obj.requestedKey === key) {
                delete obj.requestedValue
            }
        })
    }
}

