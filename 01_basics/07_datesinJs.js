//DAtes    
// * datatype of date is object 

let myDate =new Date()
console.log(myDate)// it will give unreadeable value       output  2023-09-28T14:34:01.089Z
console.log(myDate.toString())// it will give readable value   output  Thu Sep 28 2023 14:34:01 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString())//2023-09-28T14:34:01.089Z
console.log(myDate.toDateString());//2023-09-28T14:34:01.089Z
console.log(myDate.toLocaleDateString());//9/28/2023
console.log(typeof myDate);

let myCreateDate = new Date(2023, 5, 23)
console.log(myCreateDate.toString());//Fri Jun 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myCreateDate.toDateString());//Fri Jun 23 2023
console.log(myCreateDate.toLocaleString());// 6/23/2023, 12:00:00 AM

let myCreateDate1 = new Date("2023-01-14")
console.log(myCreateDate1.toLocaleDateString());//  1/14/2023

let myCreateDate2 = new Date("05-9-2023")
console.log(myCreateDate2.toLocaleDateString());//5/9/2023

let myTimeStamp = Date.now()// jab hum quiz design karenge nd hume dekhna hai sabse fastest kisne answer kiya hai
console.log(myTimeStamp);
console.log(myCreateDate.getTime());//isse hume vo date ka time bhi mil jayega 

console.log(Math.floor(Date.now()/1000)); //seconds me value nikalne ka formula

let newDate= new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getMonth());

// `${newDate.getDay()} and the time is ${newDate.getTime()}`

newDate.toLocaleString('default', {
    weekday:"long"
})
//this is most usefull ..




