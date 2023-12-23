////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result:

// 2.Divide 10 by 2 add result to variables x, and console x:

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

// 5.Console the remainder(%) when 17 is divided by 12.

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence,console result.

// 1.
// let num = 12 
// let num1 = 8
// console.log(num * num1);

// 2.
// let num1 = 10 
// let num2 = 2 
// let x = 10 / 2
// console.log(x);

// 3.
// let num1 = 20 
// let num2 = 17 
// console.log(num1 + num2); 

// 4. 
// let name = "Rashad"
// let surname = "Aslanli"
// let birthdayYear = 2005
// let info = name + " " + surname + " " + birthdayYear
// console.log(info);

// 5.
// let a = 17 
// let b = 12 
// let c = a % b 
// console.log(c);

// 6.
// let cityName = "Baku"
// console.log(cityName);
// cityName = "Gence"
// console.log(cityName);


////// TASK 2 //////////////

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// console.log(c); // 2
// console.log(d); // 1
// console.log(b); // 2


////////////// TASK 3 //////////////

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); // 5


////////////// TASK 4 //////////////

// console.log('test1', test); // test1 undifined 
// {
//     let test = "something"
//     console.log('test2', test); // test2 something 
// }
// console.log('test3', test);  // test3 undifined


// console.log('test1', test);  // test1 undifined
// {
//     var test = "something"
//     console.log('test2', test); // test 2 someting 
// }
// console.log('test3', test); // test3 something


////////////// TASK 5 //////////////

//Find the type of all the following cases

// let name = "Ulfat"       // string
// let surname = Zakirli    // value
// let year = 2000          // num
// year = "2000"            // string 
// let city;                // undifined
// let qualification = null     // object
// let obj = { name: 'ulfat' }   //object
// let arr = ['a', 'b', 'c']    //array 


////////////// TASK 6 //////////////
   const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1' 
    // const sum = arr1.reduce((acc, cur) => acc + cur, 0);
    // console.log(sum);

// 2.Add two numbers (10,88) to end of arr1 (push methods)
    // arr1.push(10,88)
    // console.log(arr1);

// 3.Remove first two numbers from arr1
    // arr1.pop("1")
    // arr1.pop("2")
    // console.log(arr1);

// 4.Add three numbers (0,9,11) in front of arr1(unshift)
    // arr1.unshift(0)
    // arr1.unshift(9)
    // arr1.unshift(11)
    // console.log(arr1);
// 5.Remove four numbers in front of arr1(shift)
    // arr1.shift()
    // arr1.shift()
    // arr1.shift()
    // arr1.shift()
    // console.log(arr1);


////////////// TASK 7 //////////////
 const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]

// 1.Console values from "Rufet" to "Fuad"


// 2.Change Gulshen to Rovshen 
// 3.Console each name with map
// 4.Console only names which is Anar
// 5.Console all names where name is Anar change it to "Perviz"
// 6.Console second to last value of arr2
// 7.Console length of arr2



////////////// TASK 8 //////////////
   const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// (use typeof), like this: filter((item) => typeof item === 'string')

// 1.Show only numbers
    // const num = arr3.filter((item) => typeof item === "number")
    // console.log(num);

// 2.Show only true values
    // const trueVal = arr3.filter(item => item == true)
    // console.log(trueVal);
// 3.Show only false values
    // const falseVal = arr3.filter(item => item == false)
    // console.log(falseVal);
// 4.Show only strings
    // const strings = arr3.filter(item => typeof item == "string")
    // console.log(strings);

////////////// TASK 8 //////////////
  const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1.Console (only even numbers)
    // const evens = numbers.filter((num) => num % 2 == 0)
    // console.log(evens);

// 2.Console (only odd numbers)
  // const odds = numbers.filter((num) => num % 2 == 1)
  // console.log(odds);

////////////// TASK 9 //////////////
   const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]
 
// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)
//    const result = arr4.map(item => {
//         if(typeof item === "number") {
//            return item * 10 
//         }else if(typeof item === "string"){
//             return item + " is string"
//         }else if (!item ){
//             return item + " is false"
//         }else{
//             return item
//         }


//     })

// console.log(result);

// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]        

        

// 2.Sum all numbers of arr4

//  let sum1 = 0
// arr4.map(item => {
//     if (typeof item === "number") { 
//         return sum1 += item 
//     }

// }) 
//     console.log(sum1);

// 3.Count only the values that are true

// const trueValues = arr4.filter(item => item === true).map(item => 'true');
// console.log(trueValues);
 
 
// 4.Count only the values that are string
    // const stringsV = arr4.filter(item => typeof item === "string").map(item => item)
    // console.log(stringsV);

// 5.Count only the values that are false
    // const falseValues = arr4.filter(item => item === false).map(item => 'false');
    // console.log(falseValues);


////////////// TASK 10 //////////////
// 1.Create a object add your name, surname, age and city.
// 2.Then change name to "Jhon"

// const obj = {
//     email: 'ulfat@gmail.com',
//     info: {
//         gender: 'Male',
//         loc: {
//             city: "Baku",
//             street: 'Nizami 22',
//             education: {
//                 "uni name": "ADNSU",
//             }
//         }
//     }
// }

// 3.Console gender
// 4.Console city
// 5.Console uni name



// const obj1 = {
//     info1: {
//         name: "Rashad",
//         surname: "Aslanli",
//         age: 18,
//         location: { 
//             country: "Azerbaijan",
//             city: "Baku",
//             street: "Ilham Haciyev",

//         },   
//         email: "aslanli.rashad.03.22@mail.ru",
//         info2: { 
//             gender: "Male",
//             education: {
//                     uni: "ASOUI"
//                 }
//             }
//         }
//     }   

// obj1.info1.name = "Jhon"
// console.log(obj1);




// const obj = { 
//     email: "aslanli.rashad.03.22@mail.ru",
//     info: { 
//         gender: "Male",
//         loc: { 
//             city: "Baku",
//             street: "Ilham Haciyev",
//             education: {
//                 uni: "ASOUI"
//             }
//         }
//     }
// }

// console.log(obj);
