//asynchronous and synchronous

let test1= function(){
setTimeout(function()
{
    console.log("code starts here")

    alert("hi i'm an alert")
    console.log("the code ends here")

},50)}

let test2= function(){
    console.log("looke here reyyyy")

}

test1()
test2()