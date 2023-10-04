const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums1 = myNumers.map( (num) => { return num + 10})

// tjis is called chaining
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 30)

console.log(newNums);