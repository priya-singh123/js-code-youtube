const marvel_heros =["thor", "Ironman", "Spiderman"]
const dc_heros =["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // its a way to add 1 lsit of array into other

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros =marvel_heros.concat(dc_heros)// this is the way of adding two array in one new arry

// console.log(allHeros);
const all_new_heros = [...marvel_heros, ...dc_heros]/// best way to add two array in one new array *Easiest way*

console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(infinity)// isme jaisa ki hume mila hai vo usme ek ke ander ek hai value so mai chahti hoon sab ek saath open ho jaye to mai FLAT use ksrungi
// flat(1), flat(2),flat(infinity)
//flat (1) means ki mai chahti hoon bass ek hi array ke ander array hai vo solve ho
//flat(2) means ki mai chahti hu ki 2 level arary ke ander array ke ander array solve ho
//falt(infinity) maens jistna bhi array ke ader array hoga vo khud hi solve ho jayega
console.log(real_another_array);


console.log(Array.isArray("Hitesh"))// ye puch raha hia ki ye array hai ya nahi to hume answer milega TRUE YA FALSE
console.log(Array.from("Hitesh"))// Ye convert kar dega string ya koi value ko array me 
console.log(Array.from({name: "hitesh"})) // interesting
// isme hume batana padega ki key value ka array banana hai ya value ka array banana hai 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// ye karne ke baad humne score,score2,score3 tino value ek me hi leli

