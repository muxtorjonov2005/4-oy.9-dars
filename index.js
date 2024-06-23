// 1-masala
// function forEach(arr){
//     arr.forEach(function(value){
//         console.log(value * 2);
//     })
// }
// const arr = [1, 2, 3, 4]
// console.log(forEach(arr));

// 2-masala
// function forEach(arr){
//     arr.forEach(function(value){
//         console.log(value.toUpperCase());
//     })
// }
// const arr = ['appple', 'banana', 'cherry']
// console.log(forEach(arr));

// 3-masala
// function forEach(arr){
//     arr.forEach(function(value){
//         console.log(value += 5);
//     })
// }
// const arr = [10, 20, 30, 40]
// console.log(forEach(arr));

// 4-masala
// function forEach(arr){
//     arr.forEach(function(value){
//         console.log(`${value.name}: ${value.grade}`)
//     })
// }
// const arr = [{name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 92},
//     {name: 'Hasan', grade: 78}
// ]
// console.log(forEach(arr));

// 5-masala
// function map(arr){
//    return arr.map(function(value){
//        return value * 2
//     })
// }
// const arr = [1, 2, 3, 4]
// console.log(map(arr));

// 6-masala
// function map(arr){
//     return arr.map(function(value){
//         return value.toUpperCase()
//     })
// }
// const arr = ['apple', 'banana', 'cherry']
// console.log(map(arr));

// 7-masala
// function map(arr){
//     return arr.map(function(value){
//         return value += 5
//     })
// }
// const arr = [10, 20, 30, 40]
// console.log(map(arr));

// 8-masala
// function map(arr){
//     return arr.map(function(value){
//         return `${value.name}: ${value.grade}`
//     })
// }
// const arr = [
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 92},
//     {name: 'Hasan', grade: 78}
//   ];
// console.log(map(arr));

// 9-masala
// function filter(arr){
//     return arr.filter(function(value){
//         return value % 2 == 0
//     })
// }
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(filter(arr));

// 10-masala
// function filter(arr){
//     return arr.filter(function(value){
//         return value.length > 5
//     })
// }
// const arr = ['apple', 'banana', 'cherry', 'date'];
// console.log(filter(arr));

// 11-masala
// function filter(arr){
//     return arr.filter(function(value){
//         return value > 18
//     })
// }
// const ages = [12, 17, 18, 19, 21];
// console.log(filter(ages));

// 12-masala
// function filter(arr){
//     return arr.filter(function(value){
//         return `${value.name}: ${value.grade}` && value.grade > 80
//     })
// }
// const arr = [
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 72},
//     {name: 'Hasan', grade: 90},
//     {name: 'Olim', grade: 77}
//   ];
// console.log(filter(arr));

// 13-masala
// function find(arr){
//     return arr.find(function(value){
//         return value > 10
//     })
// }
// const arr = [4, 9, 11, 2, 18];
// console.log(find(arr));

// 14-masala
// function find(arr){
//     return arr.find(function(value){
//         return  `${value.name}: ${value.grade}` && value.grade > 85
//     })
// }
// const arr = [
//     {name: 'Ali', grade: 80},
//     {name: 'Vali', grade: 90},
//     {name: 'Hasan', grade: 78},
//     {name: 'Olim', grade: 85}
//   ];
// console.log(find(arr));

// 15-masala
// function some(arr){
//     return arr.some(function(value){
//         return value > 0
//     })
// }
// const arr = [-1, -2, 3, -4];
// console.log(some(arr));

// 16-masala
// function some(arr){
//     return arr.some(function(value){
//         return value.length > 5
//     })
// }
// const words = ['cat', 'dog', 'elephant'];
// console.log(some(words));

// 17-masala
// function every(arr){
//     return arr.every(function(value){
//         return value > 0
//     })
// }
// const numbers = [1, 2, 3, 4];
// console.log(every(numbers));

// 18-masala
// function every(arr){
//     return arr.every(function(value){
//         return `${value.name}: ${value.grade}` && value.grade > 50
//     })
// }
// const students = [
//     {name: 'Ali', grade: 60},
//     {name: 'Vali', grade: 70},
//     {name: 'Hasan', grade: 80}
//   ];
// console.log(every(students));

// 19-masala
// function charAt(arr){
//     return arr.charAt(2)
// }
// const text = 'Hello';
// console.log(charAt(text));

// 20-masala
// function charCodeAt(arr){
//     return arr.charCodeAt(1)
// }
// const text = 'Hello'
// console.log(charCodeAt(text));

// 21-masala
// function concat(arr, arr2){
//     return arr.concat(arr2)
// }
// const text = 'Hello, world!'
//  const word = 'world'
// console.log(concat(text, word));

// 22-masala
// function includes(arr,element){
//     return arr.includes(element)
// }
// const text = 'Hello, world!'
// const word = 'world'
// console.log(includes(text,word));

// 23-masala
// function endsWith(arr,element){
//     return arr.endsWith(element)
// }
// const text = 'Hello, world!'
// const word = 'world'
// console.log(includes(text,word));

// 24-masala
// function indexOf(arr,element){
//     return arr.indexOf(element)
// }
// const text = 'Hello, world!'
// const word = 'world'
// console.log(includes(text,word));

// 25-masala
// function lastIndexOf(arr,element){
//     return arr.lastIndexOf(element)
// }
// const text = 'Hello, world! Hello again!''
// const word = 'Hello'
// console.log(includes(text,word));

// 26-masala

// 27-masala

// 28-masala
// function repeat(arr,num){
//     return arr.repeat(num)
// }
// const text = 'Hello';
// const num = 3
// console.log(repeat(text,num));

// 29-masala
// function replace(arr,old,element){
//     return arr.replace(old, element)
// }
// const text = 'Hello, world!';
// const oldWord = 'world'
//  const newWord = 'everyone'
//  console.log(replace(text,oldWord,newWord));

// 30-masala
// function search(arr,element){
//     return arr.search(element)
// }
// const text = 'Hello, world!';
// const word = 'world';
// console.log(search(text,word));

// 31-masala
// function slice(arr,start,end){
//     return arr.slice(start,end)
// }
// const text = 'Hello, world!'
// console.log(slice(text,7,12));

// 32-masala
// function split(arr){
//     return arr.split(' ')
// }
// const text = 'Hello world!'
// console.log(split(text));

// 33-masala
// function startWith(arr,element){
//     return arr.startsWith(element)
// }
// const text = 'Hello, world!'
// const start = 'Hello'
// console.log(startWith(text,start));

// 34-masaala
// function substr(arr,start,end){
//     return arr.substr(start,end)
// }
// const text = 'Hello, world!';
// console.log(substr(text,7,5));

// 35-masala
// function substring(arr,start,end){
//     return arr.substring(start,end)
// }
// const text = 'Hello, world!';
// console.log(substring(text,7,12));

// 36-masala
// function toLowerCase(arr){
//     return arr.toLowerCase()
// }
// const text = 'Hello, World!'
// console.log(toLowerCase(text));

// 37-masala
// function toUpperCase(arr){
//     return arr.toUpperCase()
// }
// const text = 'Hello, World!'
// console.log(toUpperCase(text));

// 38-masala
// function trim(arr){
//     return arr.trim()
// }
// const text = '   Hello, world!   ';
// console.log(trim(text));

// 39-masala
// function trimStart(arr){
//     return arr.trimStart()
// }
// const text = '   Hello, world!   ';
// console.log(trimStart(text));

// 40-masala
function trimEnd(arr){
    return arr.trimEnd()
}
const text = '   Hello, world!   ';
console.log(trimEnd(text));