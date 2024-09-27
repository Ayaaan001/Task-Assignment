// Chapter-21
// Changing case 
// var str = "HELLO WORLD"
// var lowerCase = str.toLocaleUpperCase()  
// console.log(lowerCase);

// var str = "hello WORLD"
// var upperCase = str.toUpperCase()  
// console.log(upperCase);



// var str = "hello"
// var cap = str.slice(0,1).toUpperCase() + str.slice(1)
// console.log(cap); 

// var str = "hello world"
// var str = str.slice(0, 1).toUpperCase() + str.slice(1, 6) + " " + str.slice(6, 7).toUpperCase() + str.slice(7);

// console.log(str); 


// // Task-02

// var str = "helo world user"
// for(var i = 0; i < str.length; i++){
//     // console.log(str[i]);
//     if(str.slice(i, i + 5) === "world"){
//         console.log("found!")
//         // break;
//     }
// }

// task two:- saylani mass it training program
var spl1 = prompt("Enter your match spelling")
var spl =  "saylani mass it training program"
for(var i = 0; i < spl.length; i++){
    // console.log(spl[i]);
    if(spl.slice(i, i + 8) === spl1){
        
        console.log("Dhund lia ...")
        break;
    }
}