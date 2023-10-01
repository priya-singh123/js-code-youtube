// array
const myArr =[0,1,22,33,44,55]
const myHeros =["Shaktiman","nagraaj"]

const myArr2 = new Array(111,222,333,444)
// console.log(myArr);

//Array Methods

myArr.push(66)
myArr.push(77)
myArr.push(88)
myArr.pop()// it removes the last element whic is recently added

myArr.unshift(10) // it add value at the start of array

myArr.shift()// it removes the 1st element of array at the start 





// console.log(myArr.includes(3));// includes telll us if the given value is present in the array in TRUE/FALSE value

// console.log(myArr.indexOf(33));// it gives the index no of the given value 

// const newArr = myArr.join() // joins myarry in newArr

// console.log(myArr);
// console.log( newArr);

// slice, splice 

// console.log("A", myArr);// A is the name of array

const myn1= myArr.slice(1,3) // it will show the value of index 1,2
// console.log(myn1);

// console.log("B", myArr)


const myn2 =myArr.splice(1, 3)// it will give value of index 1,2,3
console.log("C", myArr); //*IMP  jitna bhi value niklega spice se vo original array se bhi nikal jayega hume  */
console.log(myn2);

//before splice  original array[ 0,  1, 22, 33, 44, 55, 66, 77]
//after splice original array[ 0, 44, 55, 66, 77 ]
// Spice (1,3)  so index of 1,2,3 got removed from original array
//Splice [ 1, 22, 33 ]



