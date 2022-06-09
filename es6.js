//ES6 JAVASCRIPT
//TOPICS
// 1:variable
// 2:template literals
// 3:ternary
// 4:arrow functions
// 5:array methods map and filter
// 6:objects
// 7:spread operator
// 8:destructuring
// 9:Promises

//what is varaible?
//its like a container which store some data.
let num  =10;
const num1 = 20; //we cant cahnge its value 
var num2 = 30;

//the main difference between var and let :
//Global and local scope
//Global means k ap k poore program me sab ko pata hai k num2 ka varaible hai
//and Let sirf block  k andar chalta hai or ye bahir nahi pehchana jaaata
let fruit = 'mango'
{
    let fruit = "peach"
    console.log(fruit)//peach
}
console.log(fruit)//mango

var frt = "mango"
{
    
    console.log(frt)//mango
}
//summary: var block k andar and block k bhr b pehchna jata hai

// 2:TEMPLATE LITERALS
  var nm = "bilal"
  var middleName = "khan"
  var lastName = "khattak"

  alert(nm+ ' ' + middleName + ' '+ lastName)//concatenation
  //we use template literals instead of concatenation
  alert(`My name is ${nm} ${middleName} ${lastName}`)

  //TERNARY OPERATOR(short form of if else)
  let a=10;
  if(a==10){
      console.log('your number is 10')
  }else{
      console.log('your number is not 10')
  }
//to write using ternary operators
let msg = a==10 ? 'your number is 10':'your number is not 10'
console.log(msg)

//ARROW FUNCTIONS
const sum = (x,y,z)=>{
    console.log(x+y+z)
}
sum(3,5,6)
//example2
const add = (a,b,c) =>{
    return a+b+c
}
let result = add(4,6,9)
console.log("result", result)

//Arrays Methods Map And Filter
//suppose i have to store the data of 10 students
var students = ['ali','bilal','hashim','hamza','asfandyar','zaheer']
var num = [2,4,5,6,7,8]

for(let i=0; i < students.length; i++){
    console.log(students[i])
}
//for shortcut we use map method
//map method:aap ko array ki har elemnt pe koi aik hi kaaam karna ho to map method...
students.map((item)=>console.log(item))
let odd = num.map((item)=>{
    return ++item
    console.log("odd",odds)
})

//FILTER METHOD
const numbers = [3,59,67,78,89,34,45,46,89]
let greaterNum = numbers.filter((item)=>{
    return item > 50
    console.log(greaterNum)
})

//OBJECTS
var employee = {
    name:"bilal",
    age:23,
    occupation:"junior software engr"
}
console.log(employee)
// console.log(employee.name)
// console.log(employee.age)
// console.log(employee.occupation)
//we can also use
// console.log(employee['name'])

//SPREAD OPERATOR
const sum = (a,b,c)=>a+b+c;
let arr  =  [3,5,67]
sum(...arr)//ye pure array ko kol dega a b c ko values asign ho jayenge sum(3,5,67)


var arr1  =[1,2,3,4]
var arr2  = [5,6,7,8]
var arr3 = [...arr1, ...arr2]
console.log(arr3)

//DESTRUCTURING
// 1:object destructuring
var {name , age , occupation} = employee
// console.log(age)
// console.log(occupation)
// console.log(name)

//arrays destructuring
var numbers  = [2,4,45,5,5,5]  
var [a,b,c,d,e,f] = numbers
console.log(b)

//PROMISES
//promse  aik builtin opbject hai jis me 2 fucntions hte hai aik resolve aik reject
//aagr promise fulfill ho to resolve hai otherwise reject

let a=10;
var promise = new promise((resolve,reject)=>{
    a==10 resolve('yahoo'):reject('oh ho shit')
})
promise
.then(
    (res)=>{console.log(res)}
).catch(
    (res)=>{console.log(res)}
)