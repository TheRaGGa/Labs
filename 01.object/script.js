// Object

// const obj1 = {
//   id: 1001,
//   firstName: "Rashad",
//   lastName: "Aslanli",
//   age: 18,
//   info: {
//     street: "Heyder Aliyev",
//     city: "Baku",
//   },

//   info: {
//     uni: "ASOUI",
//     qualification: "IT",
//     isAdmin: true,
//   },
// };

// obj1.firstName = "Yusif";
// obj1.lastName = "Shefiyev";
// obj1.age = 26;
// obj1.street = "Random place in Sumqait";
// obj1.city = "Sumqait";
// obj1.uni = "ASOUI";
// obj1.qualification = "IT";
// obj1.isAdmin = true;
// delete obj1.street;
// delete obj1.isAdmin;

// console.log(obj1);

// console.log(obj1.age * obj1.id);
// console.log(obj1.id + obj1.age);

// const arr1 = ["Aslanli", "Rashad", "18", true, null, 994559989899];
// console.log(arr1[1], arr1[arr1.length - 2]);
// console.log(arr1.at(-1));

// const students2 = [
//   {
//     name: "Yusif",
//     surname: "shefiyev",
//     id: 1,
//   },
//   {
//     name: "Rashad",
//     surname: "Aslanli",
//     id: 2,
//   },
//   {
//     name: "Nurlan",
//     surname: "Dadashov",
//     id: 3,
//   },
//   {
//     name: "Zehra",
//     surname: "Aliyeva",
//     id: 4,
//   },
// ];

// console.log(students2);

// const data = [1, 2, "Rashad", 097, "Yusif"];
// data.push(null);
// data.unshift(998);
// data.shift("sil1");
// data.shift("sil2");
// data.pop(1);
// data.pop(2);
// console.log(data);

// const students = [
//   {
//     name: "Yusif",
//     surname: "shefiyev",
//     age: 26,
//     id: 1,
//   },
//   {
//     name: "Rashad",
//     surname: "Aslanli",
//     age: 24,
//     id: 2,
//   },
//   {
//     name: "Nurlan",
//     surname: "Dadashov",
//     age: 23,
//     id: 3,
//   },
//   {
//     name: "Zehra",
//     surname: "Aliyeva",
//     age: 17,
//     id: 4,
//   },
//   {
//     name: "Rashad",
//     surname: "Aslanli",
//     age: 18,
//     id: 5,
//   },
//   {
//     name: "Rashad",
//     surname: "Aslanli",
//     age: 44,
//     id: 6,
//   },
// ];

// console.log(students[0].name);

// students.map((item, index) => console.log(item.name));
// students.map((item, index) => console.log(item.age));
// students.map((item, index) => console.log(item.surname));
// students.map((item, index) => console.log(item.id));

// students.map((item, index) => console.log(index + item.age));
// students.map((item, index) => console.log(index + item.id));

// const result = students.filter((item) => item.name == "Rashad");
// console.log(result);

// const result2 = students.filter((item) => item.age >= 22 && item.age <= 25);
// console.log(result2);

// let sum11 = 0;
// const data22 = students.map((item) => (sum11 += item.age));
// console.log(data22);
// console.log(sum11);

// let sum13 = 0;
// const data13 = students.map((item) => (sum13 = sum13 + item.age));
// console.log(data13);
// console.log(sum13);

// let sum = 1;
// const data5 = students.map((item) => (sum *= item.id));
// // console.log(data);
// console.log(sum);

// let sum1 = 0;
// const data1 = students.map((item) => (sum1 += item.id));
// // console.log(data1);
// console.log(sum1);

// let sum3 = 0;
// const data3 = students.map((index) => (sum3 -= index.age));
// // console.log(data3);
// console.log(sum3);

// let sum4 = 1;
// const data4 = students.map((index) => (sum4 *= index.age));
// // console.log(data4);
// console.log(sum4);

// const result4 = students.find((item) => item.name == "Rashad");
// console.log(result4);

// const result1 = students.findLast((item) => item.name == "Rashad");
// console.log(result1);
