export class List {
    private _data: any[] = []

    // constructor() {
    //     this._data = [];
    // }

    //Interface = methods

    add(value: any) {
        if (value) {
            this._data.push(value)
        } else {
            console.warn("unexpected value")//not sure 
        }
    }

    addMore(...values: any) {
        this._data.push(...values);
    }

    getCount() {
        return this._data.length;
    }

    get(index: any) {
        return this._data[index]
    }

    clear() {
        return this._data = [];
    }

    includes(value: any) {
        return this._data.includes(value)
    }

    reverse() {
        return this._data.reverse()
    }

    remove(value: any) {
        let index = this._data.indexOf(value);
        if (index > -1) {
            this._data.splice(index, 1)
        }
        return index
    }



    //linear search approach algorithm
    find(searchedPropertyName: string, searchedPropertyValue: any) {
        for (let element of this._data) {
            if (Number.isInteger(searchedPropertyName)) {//10
                if (element === searchedPropertyName) {
                    return element
                }
            } else {
                if (element[searchedPropertyName] === searchedPropertyValue) {
                    return element
                }
            }

        }
        // return undefined
        // element.age === element["age"]
    }





    /**
     * Sort the elements in ascending order
     */

    sort(propertyName: string) {
        //Bubble sort Linear search Algorithm  //[3,1,2]//[1,10,2,8,90,0]
        let len = this._data.length//6
        for (let i = 0; i < len; i++) {//0,1,2, 3
            for (let j = 0; j < len; j++) {//0,1,2, 3
                let firstElement = this._data[j]//1,2,90, 1,
                let secondElement = this._data[j + 1]//10,8,0, 10,
                if (secondElement === undefined) {
                    break
                }
                if (propertyName) {
                    if (firstElement[propertyName] > secondElement[propertyName]) {//1>10, 2>8. 90>0!
                        this._data[j] = secondElement//90=0
                        this._data[j + 1] = firstElement//0=90
                    }
                } else {
                    if (firstElement > secondElement) {
                        this._data[j] = secondElement
                        this._data[j + 1] = firstElement
                    }
                }

                //[1,10,2,8,0,90]
            }
        }//property access propertyName = ""
        console.log("sorteeeeeed")
    }




    //Binary search Algorithm [0, 1, 2, 7, 8, 10, 90]
    findBinary(key: any) {  //key is the searched value [10]
        this.sort("Nina")
        let sortedArray = this._data //sort the array
        let start = 0;                       //starting point = 0index=0; 4index=8; 5index=10;
        let end = sortedArray.length - 1;    //end point = 6index

        while (start <= end) { //0 <= 6
            let middle = Math.floor((start + end) / 2); //we find the middle part[3index=7]; [4index = 8]; [9]

            if (sortedArray[middle] === key) {
                return key;                    //if middle is key; 5index=10 === key 10=>return start 5 + 6 /2= 5.5 which is 5
            } else if (sortedArray[middle] < key) {
                start = middle + 1;               //if [3index=7] < 10 => start 0 = 3+1=4index; if 8 < 10=>start = 5index;
            } else if (sortedArray[middle] > key) {
                end = middle - 1;               // we continue left
            }
        }
        return "not found"
    }




}

