/*Immediately Invoked Function Expression (IIFE) */


// jab hume chahiye ki jaise hi function likho vaise hi execute karde

/* Two reasons for choosing

1) global function se hume koi bhi pollution nahi chahiye isliye hum apna alag ek scope bana lete ha
2) jaldi se execute ho jaye
*/

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();// semi colon nahi lagane se bhi bahot bar error aata hai to dhyan rakho

//simple IIFE
// ( () => {
//     console.log(`DB CONNECTED TWO );
// } )()

// With parameter

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Hitesh')
