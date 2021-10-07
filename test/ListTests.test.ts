import { List } from "../src/List"
import { assert } from "chai";
//import { performance } from "perf_hooks"

describe("List", function () {

    it("should equal", function () {
        assert.equal(1, 1);          // assert.equal(actual, expected)
    })

    let list: any
    this.beforeEach(() => {
        list = new List()
    })


    it("should contains two elements", function () { //add element and get count from array
        //Arrange
        list.add("")
        //Assert
        let getCount = list.getCount()
        assert.equal(getCount, 0)
    })

    it("should clear all data", function () { //clear all previously existing data in the List
        //Arrange
        list.add(5)
        //Act
        let clearArray = list.clear()
        //Assert
        assert.equal(clearArray.length, 0)
    })

    // it("should return true if exist", function () { //return true if the value exists in the List, false otherwise
    //     let startTime = performance.now();
    //     //Arrange
    //     list.add(5)
    //     //Act
    //     let includesElement = list.includes(5)
    //     //Assert
    //     assert.equal(includesElement, true)

    //     let endTime = performance.now();
    //     let elapsedTime = endTime - startTime

    //     assert.isTrue(elapsedTime < 15)
    //     console.log(`Call to return true took ${endTime - startTime} milliseconds`)
    // })

    it("should reverse the order", function () { //reverse the order of the elements
        //Arrange
        list.add("nina")
        list.add("petya")
        //Act
        let reverseValue = list.reverse()
        let firstElement = reverseValue.shift()
        //Assert
        assert.equal(firstElement, 'petya')
    })

    it("should remove the value if found", function () { //remove the value if found in the List 
        //Arrange
        list.addMore("nina", "petya")
        //Act
        let removedValue = list.remove("nina")
        //Assert
        assert.equal(removedValue, 0)

    })

    //     it("should find number", function () {
    //         let startTime = performance.now();
    //         arrange
    //         list.addMore(1, 10, 2, 8, 90, 0, 7, 8, 5, 15, 14, 8, 6, 8, 8, 5, 2, 6)
    //         act
    //         let result = list.find(10)
    //         assert
    //         assert.equal(result, 10)

    //         let endTime = performance.now();
    //         let elapsedTime = endTime - startTime
    //         assert.isTrue(elapsedTime < 15)
    //         console.log(`Call to use linear search took ${endTime - startTime} milliseconds`)


    //     });

    //     it("should find object", function () {
    //         list.add({ name: "pesho", age: 20 })
    //         list.add({ name: "nina", age: 25 })
    //         list.add({ name: "petya", age: 30 })

    //         //find element with name petya
    //         let result = list.find("name", "petya")
    //         assert.equal(result.name, "petya")

    //     });



    //     it("should sort simple numbers", function () {
    //         list.add(3)
    //         list.add(1)
    //         list.add(2)

    //         list.sort()

    //         assert.equal(list.get(0), 1)
    //         assert.equal(list.get(1), 2)
    //         assert.equal(list.get(2), 3)
    //     });



    //     it("should sort tougher numbers", function () {
    //         list.addMore(1, 10, 2, 8, 90, 0)

    //         list.sort()

    //         assert.equal(list.get(0), 0)
    //         assert.equal(list.get(3), 8)
    //         assert.equal(list.get(5), 90)
    //     })


    //     it("should sort objects", function () {
    //         arrange
    //         list.addMore({ name: "nina", age: 30 }, { name: "anatoli", age: 30 }, { name: "petya", age: "31" });
    //         act
    //         list.sort("age")
    //         assert
    //         assert.equal(list.get(0).age, "30")
    //         assert.equal(list.get(0).name, "nina") //stable algorithm
    //     })


    //     it("Should use binary", function () {
    //         let startTime = performance.now();
    //         arrange
    //         list.addMore(1, 10, 2, 8, 90, 0, 7, 8, 5, 15, 14, 8, 6, 8, 8, 5, 2, 6)
    //         act
    //         list.sort()
    //         let binary = list.findBinary(10)
    //         assert
    //         assert.equal(binary, 10)


    //         let endTime = performance.now();
    //         let elapsedTime = endTime - startTime
    //         assert.isTrue(elapsedTime < 15)
    //         console.log(`Call to use binary search took ${endTime - startTime} milliseconds`)

    //     })



});




// describe("Array2", function () {

//     it("should work", function () {
//         let startTime = performance.now(); //time in milliseconds
//         act
//         let res = 0;
//         for (let i = 0; i < 1000000; i++) {
//             res = res + 1;
//         }

//         let endTime = performance.now();
//         let elapsedTime = endTime - startTime
//         assert.isTrue(elapsedTime < 15)
//         console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
//     })


//     it("should work", function () {
//         console.time("doSomething")

//         let res = 0
//         for (let i = 0; i < 1000000; i++) {
//             res = res + 1
//         }

//         console.timeEnd("doSomething")
//     })

// })



















// //1st test - add element and get an element by the index
// var list = new List();

// list.add(5)

// let result = list.get(0)

// if (result === 5) {
//     //console.log("success")
// } else {
//     //console.log("failed")
// }
// //end 1st test


// //2nd test - clear all previously existing data in the List
// var list1 = new List();

// list1.add(5)
// const clearArray = list1.clear()

// //console.log(clearArray) //should be empty array, why when it's if(clearArray === []) this is undefined, but only console.log(clearArray is [])
// if (clearArray.length === 0) { //this is how we check if array is empty
//     //console.log("yes")
// } else {
//     //console.log("no")
// }
// //end 2nd test



// //3rd test - return true if the value exists in the List, false otherwise
// var list2 = new List();

// list2.add(5)

// const includesValue = list2.contains(5) //includes compares one object with the other but only the path to the object

// if (includesValue === true) {
//     //console.log("it's working")
// } else {
//     //console.log("Nah, not working")
// }
// //end 3rd test


// //4rd test - reverse the order of the elements
// var list3 = new List();


// list3.add("nina")
// list3.add("petya")

// const reverseValue = list3.reverse()

// //console.log(reverseValue)
// //end 4rd test


// //5th test - remove the value if found in the List - find this 
// var list4 = new List();


// list4.add("nina")
// list4.add("petya")


// //console.log(list4.remove("petya"))
// //end 5th test



// // # find(condition) apply condition on all elements and return the first that passes
// // # sort() - sort the elements


