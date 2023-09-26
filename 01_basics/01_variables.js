const accountId = 12233
let accountEmail = "priyasingh@gmail.com"
var accountPassword ="123345"
accountCity ="Jaipur"
let accountState;


// accountId =2 not allowed


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountPassword ="122222"
accountEmail ="priyasingh123@gmail.com"
console.table([accountId, accountEmail, accountPassword, accountCity])
accountCity ="Bengaluru"
