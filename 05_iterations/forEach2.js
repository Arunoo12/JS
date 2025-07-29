const ottPlatforms = ["netflix", "amazonPrime", "disney", "hotstar"];
// let values = ottPlatforms.forEach((items) => {
//     console.log(items);
// });
// console.log(values) // undefined

let values = ottPlatforms.forEach((items) => {
    // console.log(items);
    return items
});
// console.log(values) // undefined

// NOTE:- forEach does not returns anything thats why we dont write it inside a variable 

const myNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let aVar = myNumbs.filter((numberInNumbs) => {
//     return numberInNumbs > 4
// })
// const newNumbs = []
// myNumbs.forEach((num) => {
//     if (num > 4) {
//         newNumbs.push(num)
//     }
// })

// console.log(newNumbs) 

// console.log(aVar) // 5,6,7,8,9,10

const users = [
    {
        id: 1,
        name: "Arun Singh",
        age: 25,
        gender: "Male",
        email: "arun.singh@example.com",
        isActive: true,
        role: "admin",
        country: "India"
    },
    {
        id: 2,
        name: "Sara Lee",
        age: 30,
        gender: "Female",
        email: "sara.lee@example.com",
        isActive: false,
        role: "user",
        country: "USA"
    },
    {
        id: 3,
        name: "Takashi Yamada",
        age: 28,
        gender: "Male",
        email: "takashi.y@example.jp",
        isActive: true,
        role: "moderator",
        country: "Japan"
    },
    {
        id: 4,
        name: "Priya Sharma",
        age: 22,
        gender: "Female",
        email: "priya.sharma@example.in",
        isActive: true,
        role: "user",
        country: "India"
    },
    {
        id: 5,
        name: "John Doe",
        age: 35,
        gender: "Male",
        email: "john.doe@example.com",
        isActive: false,
        role: "admin",
        country: "UK"
    },
    {
        id: 6,
        name: "Mei Lin",
        age: 29,
        gender: "Female",
        email: "mei.lin@example.cn",
        isActive: true,
        role: "user",
        country: "China"
    },
    {
        id: 7,
        name: "Carlos Ramirez",
        age: 32,
        gender: "Male",
        email: "carlos.r@example.mx",
        isActive: false,
        role: "user",
        country: "Mexico"
    },
    {
        id: 8,
        name: "Fatima Zahra",
        age: 27,
        gender: "Female",
        email: "fatima.z@example.ma",
        isActive: true,
        role: "moderator",
        country: "Morocco"
    },
    {
        id: 9,
        name: "David Miller",
        age: 40,
        gender: "Male",
        email: "david.m@example.com",
        isActive: false,
        role: "user",
        country: "Australia"
    },
    {
        id: 10,
        name: "Sakura Tanaka",
        age: 24,
        gender: "Female",
        email: "sakura.t@example.jp",
        isActive: true,
        role: "user",
        country: "Japan"
    }
];

let usersData = users.filter((getData) => getData.age >= 40);
usersData = users.filter((getData) => {
    return getData.age <= 30 && getData.country == 'India' && getData.isActive === true
});

// const filteredData = []
// users.forEach((data) => {
//     if (data.isActive === true) {
//         filteredData.push(data)
//     }
// })
console.log(usersData)
// console.log(filteredData);

















