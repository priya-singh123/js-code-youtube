
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const num in myObject) {
    console.log(`${num} shortcut is for ${myObject[num]}`);
    // when we use {num} we get key value, when we use [num] we get value 
        // console.log(`${myObject[num]}`);

    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const num in map) {
    console.log(key);
    // it will not give error but it is not iterable
    
}