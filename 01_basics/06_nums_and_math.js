const score =400
console.log(score);

const balance =new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherName =123.8766
console.log(otherName.toPrecision(3));
//it gives round off value the given limit

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
//if you dont put en-IN  then the representation which will come will according to british

*************************** Maths********************************

console.log(Math);// its an object
console.log(Math.abs(-4))// it will remove negative sign from number

console.log(Math.round(4.6));// it will give round off as normally we do that if its more than 5 then we give 6
console.log(Math.ceil(4.2));// it will give 5 even if the no is 4.1 or 4.9
console.log(Math.floor(4.9));// it will give 4 even if 4.6 0r 4.9
console.log(Math.min(4,3,6,8));// it will give min value
console.log(Math.max(4,3,6,8));// it will give max value

console.log(Math.random());// it will always give random number between 0 and 1

console.log((Math.random()*10) + 1); // it will alwyas give 1 or more than 1

console.log(Math.floor(Math.random()*10) + 1); // 

const min =10;
const max =20;

Math.random(Math.floor(Math.random() * (max - min + 1)) + min) // (max-min = ye range dega ki itne ke beech me no chahiye)  (+1 = ye 0 avoid karne ke liye ) (min = ye value batayega ki min kitna chahiye)


