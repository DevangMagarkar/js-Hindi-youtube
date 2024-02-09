//object is created by two ways
//1 by literals -->>in this file
//2 by constructor(here the object is singleton)
    //2)==>>Object.create

    //object lierals
const mySym = Symbol("key1")

const JsUser = {
    name:"Devang",
    "full name": "Devang Magarkar",
    [mySym] : "myKey1",
    age: 19,
    location: "Chhindwara",
    email: "devang@gmail.com",
    isLoggedIn : false,
    lastLogInDays: ["Monday", "Saturday"],
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullname"]) //only way to address this type of key not by any dot(.)
// console.log(JsUser[mySym])

// //ho to change value of object
// JsUser.email = "devang@google.com"
// // console.log(JsUser.email);
// Object.freeze(JsUser)
// JsUser.email = "devang@yahoo.com"

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function()
{
    console.log(`Hello JsUser, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());