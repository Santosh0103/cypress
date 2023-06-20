/// <reference types = "Cypress"/>
//promises
let promise = new Promise((resolve,reject)=>{
    let a= 56
    if (a>100){
        resolve('promise accepted')
    }
    else{

    reject('promise rejected')
    }
})

promise.then((message)=>{
    console.log(message+"  promise has passed")
}).catch((message)=>{
    console.log(message+"  promise has failed")
})







