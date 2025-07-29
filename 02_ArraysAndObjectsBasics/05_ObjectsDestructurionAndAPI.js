// this file will contain info about objects destructureing and api's 

const client = {
    name: "arun",
    email: "arun@",
    phno: 876978,
    country: "japan",
    profile: "developer",
    isLoggedIn: false,
    loginLocation: "india"

}

// client.loginLocation; // this is traditional way and not optimised for multiple info fetch

const { loginLocation } = client;
console.log(`the location of client while login time is ${loginLocation}`);

const { name } = client; // access method 
console.log(name);

const { isLoggedIn } = client;
console.log(isLoggedIn);

// whenever you will see {} this syntex it means there is destructureing going on 
