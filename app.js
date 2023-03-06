// HW 2 : Array Method Practice

//-----------Map---------------------------------------------------
//------------------------------------------------
// creates a new array from calling a function for every array element.
// calls a function once for each element in an array.
// does not execute the function for empty elements.
// does not change the original array.

let myOriginalMapArray = [1, 2, 3, 4, 5];

// Multiplies array by 2
Array.prototype.myMap = function() {
    let updatedArray = [];
    for (let i = 0; i < this.length; i++) {
        updatedArray.push(this[i] * 2);
    }
    return updatedArray;
}

let myNewMapArray = myOriginalMapArray.myMap();

console.log("myOriginalMapArray: ", myOriginalMapArray);
console.log("myNewMapArray: ", myNewMapArray);

// //---------------Filter--------------------------------------------
// //------------------------------------------------
// // creates a new array filled with elements that pass a test provided by a function.
// // does not execute the function for empty elements.
// // does not change the original array.

// let myOriginalFilterArray = [1,2,3,4,5];

// //Filters out numbers less than 3
// Array.prototype.myFilter = function() {
//     let updatedArray = [];
//     let result = Boolean;
//     for(let i = 0; i < this.length; i++) {
//         let result = myRequirment(this[i])
//         if (result === true) {
//             updatedArray.push(this[i]);
//         }
//     }
//     return updatedArray;
// }

// function myRequirment(element) {
//     if(element > 2) {
//         return true;
//     } else { return false }
// }

// let myNewFilterArray = myOriginalFilterArray.myFilter();

// console.log("myOriginalFilterArray: ", myOriginalFilterArray);
// console.log("myNewFilterArray: ", myNewFilterArray);

// //------------------find-------------------------
// //------------------------------------------------
// //Finds the first occurance of a value that meets a requirment 
// //in the given array 
// function overTwentyOne(age) {
// if(age >= 21) {
//     return age;
// } else { return 0 }
// }
// let myOriginalFindArray = [1,2,3,4,21];
// Array.prototype.myFind = function(afunction){
//     let val = 0;
//     for(let i = 0; i < this.length; i++) {
//         let val = overTwentyOne(this[i]);
//         if (val > 0) {
//             return val;
//         }
//     }
//     console.log("Array.length: ", this.length);
//     return;
// }

// let myFindValue = myOriginalFindArray.myFind(overTwentyOne);

// console.log("myFindValue: ", myFindValue)


// //---------------Concat--------------------------
// //------------------------------------------------
// //Joins two arrays into one new one
// let myConcatArrayOne = [1,2,3,4,5];
// let myConcatArrayTwo = [6,7,8,9,10];

// Array.prototype.myConcat = function(two){
//     let concatenatedArray = [];
//     for(let i = 0; i < this.length; i++) {
//         concatenatedArray.push(this[i]);
//     }

//     for(let i = 0; i < two.length; i++) {
//         concatenatedArray.push(two[i]);
//     }
//     return concatenatedArray;
// }

// let myConcatenatedArray = myConcatArrayOne.myConcat(myConcatArrayTwo);

// console.log("myConcatArrayOne: ", myConcatArrayOne);
// console.log("myConcatArrayTwo: ", myConcatArrayTwo);
// console.log("myConcatenatedArray: ", myConcatenatedArray);

// //----------------Push-----------------------
// //-----------------------------------------------------
// // Adds an element or two into the back of an array.
// //Does not return anything
// let myPushExampleArray = [];
// let myPushExampleArray2 = [];
// Array.prototype.myPush = function (ele, ele2) {
//     if (ele2 === undefined) {
//         this[this.length] = ele;
//         return;
//     } else {
//         this[this.length] = ele;
//         this[this.length] = ele2;
//         return;
//     }

// }

// myPushExampleArray.myPush("Hello");
// myPushExampleArray2.myPush("Hello", "Coder");

// console.log("myPushExampleArray: ", myPushExampleArray);
// console.log("myPushExampleArray2: ", myPushExampleArray2);


// //----------------Pop-----------------------
// //-----------------------------------------------------
// //Removes last element of an array
// //Returns that last element
// let myPopExampleArray = [1, 2, 3, 4, 5];
// Array.prototype.myPop = function () {
//     let theLastEle = this[this.length - 1];
//     let updatedArray = []

//     for (let i = 0; i < this.length - 1; i++) {
//         updatedArray[i] = this[i];
//     }

//     for (let b = 0; b < updatedArray.length - 1; b++) {
//         this[b] = updatedArray[b];
//     }

//     this.length = updatedArray.length;

//     return theLastEle;
// }
// console.log("Before Pop Array: ", myPopExampleArray);
// let lastElement = myPopExampleArray.myPop();

// console.log("Returned Deleted Element: ", lastElement);
// console.log("After Pop Array: ", myPopExampleArray);

// //----------------Slice-----------------------
// //-----------------------------------------------------
// //1) The slice() method returns selected elements
// //    in an array, as a new array.
// //2) The slice() method selects from a given start,
// //    up to a (not inclusive) given end.
// //3) The slice() method does not change the original array.
// Array.prototype.mySlice = function(start,end){
// let newArray = [];
// let newArraySize = 0;
// for(let i = start; i <= end; i++){
//     newArray[newArraySize] = this[i];
//     newArraySize++;
// }
// return newArray;
// }

// let sliceExampleArray = [1,2,3,4,5,6,7,8,9,10];
// console.log("sliceExampleArray: ", sliceExampleArray);

// let slicedArray = sliceExampleArray.mySlice(0,4);

// console.log("slicedArray: ", slicedArray);


// //----------------Splice-----------------------
// //-----------------------------------------------------
// //Takes an array index and removes the element at that index
// //returns an array of items deleted

// Array.prototype.mySplice = function (index) {
//     let newSplicedArray = [];
//     let newSplicedArraySize = 0;
//     let deletedElement = undefined;
//     for (let i = 0; i < this.length; i++) {   //Break up original array and place into new one
//         if (i < index) {
//             newSplicedArray[newSplicedArraySize] = this[i];
//             newSplicedArraySize++;
//         }
//         else if (i > index) {
//             newSplicedArray[newSplicedArraySize] = this[i];
//             newSplicedArraySize++;
//         }
//         else if (i === index) {  // Find element to delete
//             deletedElement = this[i];
//         }
//     }

//     for (let k = 0; k < newSplicedArray.length; k++) { //update original arrray
//         this[k] = newSplicedArray[k];
//     }

//     this.length = newSplicedArray.length;   //Update original array's length

//     return deletedElement;
// }

// let spliceArrayExample = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log("Before spliceArrayExample: ", spliceArrayExample);

// let elementRemoved = spliceArrayExample.mySplice(3);

// console.log("After spliceArrayExample: ", spliceArrayExample);
// console.log("Element Removed: ", elementRemoved);
// console.log("spliceArrayExample.length: ", spliceArrayExample.length);


// //----------------Some-----------------------
// //-----------------------------------------------------
// // 1) checks if any array elements pass a test (provided as a callback 
// //  function).
// // 2) executes the callback function once for each array element.
// // 3) returns true (and stops) if the function returns true for one of 
// //  the array elements.
// // 4) returns false if the function returns false for all of the array 
// //  elements.
// // 5) does not execute the function for empty array elements.
// // 6) does not change the original array.
// function containsFive(element) {
//     if(element === 5) {
//         return true;
//     } else { return false }
// }

// Array.prototype.mySome = function(checkCondition){
// for(let j = 0; j < this.length; j++) {
//     if(checkCondition(this[j])) {
//         return true;
//     }
// }
// return false;
// }

// let someExampleArray = [1,2,3,4,5,6,7,8,9,10];
// let result = someExampleArray.mySome(containsFive);

// console.log("resultForSome: ", result);
// //----------------Every-----------------------
// //-----------------------------------------------------
// // executes a function for each array element.
// // returns true if the function returns true for all elements.
// // returns false if the function returns false for one element.
// // does not execute the function for empty elements.
// // does not change the original array

// function TwentyOneAndOver(age) {
//     if(age >=21){
//         return true;
//     }
//     return false;
// }

// Array.prototype.myEvery = function(checkCondition) {
// for(let i = 0; i < this.length; i++){
//     if(!checkCondition(this[i])) {
//         return false;
//     }
// }
// return true;
// }

// sampleArrayForEvery = [22,24,30,25,32,21];

// let resultForEvery = sampleArrayForEvery.myEvery(TwentyOneAndOver);
// console.log("resultForEvery: ", resultForEvery);
// //----------------Reverse-----------------------
// //-----------------------------------------------------
// // reverses the order of the elements in an array.
// // overwrites the original array.
// // Returns The array after it has been reversed.

// Array.prototype.myReverse = function() {
//     let tempArray = [];
//     for(let i = this.length-1; i > -1 ; i--){
//         tempArray.push(this[i]);
//     }
//     for(let j = 0; j < this.length; j++){
//         this[j] = tempArray[j];
//     }
//     tempArray.splice(0);
//     return this;
// }

// let sampleArrayForReverse = [1,2,3,4,5,6,7,8,9,10]

// let resultForReverse = sampleArrayForReverse.myReverse();

// console.log("Reverse Result: ", resultForReverse);