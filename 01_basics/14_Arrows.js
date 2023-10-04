const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//IMP NOTE agar curly braces lagaya to return keyword likhna padega 
// niche example me bina return keyword likhe value return kaise hoti hai vo hai

// const addTwo = (num1, num2) =>  num1 + num2  // 1st way to return value without writing return keyword


// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})// ye return value ke jagah pe likha hai isliye console me jo kiya hai vo print nahi ho raha hai
//kyunki return vali value aane ke baad bhi print karo vo nahi hoga


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


//MOST IMP 

//kisi bhi function me this ki value undefined ya {} hi aayega 