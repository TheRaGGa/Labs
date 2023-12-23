


// const students = [
//     {       name: "Yusif",
//         surname: "Shefiyev",
//         age: 26,
//         id: 1000,
//         address: {
//             street: "Ilham Aliyev",
//             city: "Baku",
//             country: "Azerbaijan"
//         }
// },
// {
//     name: "Rashad",
//     surname: "Aslanli",
//     age: 18,
//     id: 1001,
//     address: {
//         street: "Semed Vurgun",
//         city: "Sumqait",
//         country: "Azerbaijan"
//     }
// },
// {
//     name: "Mehman",
//     surname: "Hesenli",
//     age: 24,
//     id: 1002,
//     address: {
//         street: "Ilham Aliyev",
//         city: "Baku",
//         country: "Azerbaijan"
//     }
// },
// {
//     name: "Ferid",
//     surname: "Qedirov",
//     age: 19,
//     id: 1003,
//     address: {
//         street: "Nizami",
//         city: "Gence",
//         country: "Azerbaijan"
//     }
// },
// {
//     name: "Murad",
//     surname: "Hesenov",
//     age: 55,
//     id: 1004,
//     address: {
//         street: "Esenin",
//         city: "Mosckow",
//         country: "Russian"
//     }
// },
// {
//     name: "Nurlan",
//     surname: "Dadashov",
//     age: 18,
//     id: 1005,
//     address: {
//         street: "Ilham Aliyev",
//         city: "Baku",
//         country: "Azerbaijan"
//     }
// }
// ]

// let result = students.reduce((acc, curr, index) => acc + index, 0)
// console.log(result);

// students.sort((a, b) => a.age - b.age )
// console.log(students);

// students.sort((a, b) => a.address.street.localeCompare(b.address.street ))
// console.log(students);

// students.reverse()
// console.log(students);

// const sort = students.filter(student => student.name.length >= 6);
// console.log(sort);

// const result = students.find(a => a.age > 25)
// console.log(result);

// const result = students.map(age => 'myAge ' + age.age )
// console.log(result);

// let user = "rashad"
// let userSur = "aslanli"

// let result = user.slice(0, 5).toLocaleLowerCase() + user.slice(-1).toLocaleUpperCase()
// let result1 = user.slice(1, 6).toLocaleUpperCase() + user.slice(4, -2).toLowerCase()
// let result2 = user.slice().toLocaleUpperCase(3, 4) + user.slice(0, 3).toLowerCase(0, 6) + user.slice(3, 4).toUpperCase() + user.slice(4, 7).toLowerCase()
// let result3 = userSur.slice(0, 1).toLocaleUpperCase() + userSur.slice(1, 8)
// let result4 = userSur.slice().toLocaleUpperCase()
// console.log(result);
// console.log(result1);
// console.log(result2.slice(-6,));
// console.log(user.slice(0, 1).toLocaleUpperCase() + user.slice(1, 8) +" "+ result3);
// console.log(user +" "+ result4);


// let user = "rashad aslanli"
// const splitname1 = user.split('l')
// const splitname2 = user.split(',')
// const splitname3 = user.split('' && ' ')
// const splitname4 = user.split(' ')
// console.log(splitname4);
// console.log(splitname1);
// console.log(splitname2);
// console.log(splitname3);
// 
// 
// 
// const studentsArr = [ "Rashad", "Yusif", "Rafiq", "Abbas", "Heyder",]
// const result = studentsArr.map(item => 'name ' + item)
// console.log(result);
// console.log(result.join());

