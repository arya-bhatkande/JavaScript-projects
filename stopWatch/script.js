let arr = [1, 2, 3];
arr.push(4);
console.log(arr);


let arr1 = [1, 2, 3, 4];
let lastElement = arr1.pop();
console.log(arr1); 
console.log(lastElement);


let arr2 = [1, 2, 3, 4];
let firstElement = arr2.shift();
console.log(arr2); 
console.log(firstElement);


let arr3 = [1, 2, 3];
arr3.unshift(0);
console.log(arr3);


let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];
let combined = arr4.concat(arr5);
console.log(combined.length)
// console.log(typeOf(combined))
console.log(combined);


let arr6 = [1, 2, 3, 4, 5];
let sliced = arr6.slice(1, 3);
console.log(sliced);


let arr8 = [1, 2, 3, 4, 5];
arr8.splice(2, 1, 99);
console.log(arr8);


let arr9 = [3, 1, 4, 1, 5, 9];
arr9.sort((a, b) => a - b);
console.log(arr9);


let arr10= [1, 2, 3, 4, 5];
arr10.reverse();
console.log(arr10);


let arr11 = [1, 2, 3, 4, 5];
let str = arr11.join('-');
console.log(str);


let str1 = '1-2-3-4-5';
let arr12 = str1.split('-');
console.log(arr12);


// Arrow Functions
hello = () =>{
    console.log("This is Arrow Function")
}
hello()


 //"use strict"
// const person = {
//     name: 'karan',
//     greet: function() {
//       console.log(this.name);
//     }
//   };
  
//   person.greet();


//   function y(){
//   let x =this;
//   console.log(x)
//   }
//   y()

  // "use strict";
  function myFunction() {
    console.log(this)
  }
myFunction()


//   const obj1 = {
//     name: 'John',
//     age:12,
//     greet: function() {
//       console.log(this.age);
//     }
//   };
  
//   const obj2 = {
//     name: 'Jane',
//     age:20
//   };
  
//   obj2.greet = obj1.greet;
//   obj2.greet();


//   function person3() {
//     this.age = 0;
  
//     setTimeout(() => {
//       this.age++;
//       console.log(this.age);
//     }, 1000)
// }
//   const person5 = new person3();


  let isMember = true;
let discount = isMember ? 10 : 0;
console.log(discount);


// Ternary Operator in Function Calls:
function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
  }
  
  console.log(getFee(true)); 
  console.log(getFee(false));


const originalArray = ['Vikas', 'Suresh', 'Rajan', 'Amit', 'Raghu'];
const copiedArray = [...originalArray];
console.log(copiedArray);


function my_func(){
    console.log('Hello, World!');
}
// !!!===>>>function to display the message multiple times
function string_times(str,n){
    result = "";
    let count = 1;
    while(count<=n){
        result = result+str;
        count++;
    }
    return result;
}

console.log(string_times("durga",3))
console.log(string_times("Hello",5))



// !!!===>>>Javascript Objects
//    By using arrays we can store a group of individual objects abd it is nt possible to store "key-value" pairs
//    If we want to represent a group of key-value pairs then we should go for Objects
//    Array: A group of individual objects
//    Objject: A group of key-value pairs
//    Javascript objects store information in the form of key-value pairs

//   !!!==>>Syntax
//    const obj-name = {
//     key1: value1,
//     key2:value2
//    }

//    Two ways to access the object values

//    1) object-name["key"] 
//    quotes are mandatory

//    2) object-name.key
//    no need of quotes

// simple example for "this" keyword in javascript

// !!! Inside object methods, if we want to access object properties then we should use 'this' keyword.
const developer = {
    name: 'Durga',
    age: 28,
    gender: 'Female',
    getInfo: function(){
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
        console.log(`Gender: ${this.gender}`)
    }
}
developer.getInfo();


// !!!===>>>example
const movies1 =  [
    {
        name:'Bahubali',
        isWathed: 'true',
        isHit:'true'
    },
    {
        name:'KGF',
        isWathed: 'true',
        isHit:'true'
    },
    {
        name:'Sanju',
        isWathed: 'false',
        isHit:'false'
    },
    {
        name:'Spider',
        isWathed:'false',
        isHit:'false'
    }
]
movies1.forEach(function(movie){
    var result ="";
    if(movie.isWathed==="true"){
        result = `${result} I Watched`;
    }else{
        result =  `${result} I Have not seen`;
    }


    result = result+ movie.name
    if(movie.isHit=== 'true'){
        result = `${result} and Movie is hit`
    }else{
        result = `${result} and Movie is not hit`
    }

    console.log(result)
})