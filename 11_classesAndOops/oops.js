// OBJECT LITERALS 
const user = {
    username: "arun",
    loginCount: 60,
    signedIn: true,

    getUserDeatils: function () {
        console.log('got it ')
    }
}
// console.log(user["loginCount"])
// console.log(user.getUserDeatils())


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = () => {
        return console.log(`welcome ${this.username}`)
    }
}
// new is constructor function it create a copy of fn and gives us a new fn so that values will not overwrite and this is a object refres to th ecurrent enviroment
const userOne = new User('arun singh', 20, true);
console.log(userOne)
userOne.greeting()

const userTwo = new User('unknown', 0, false);
console.log(userTwo)
userTwo.greeting()

// constructor function steps WORKING:-
// step1-empty object craete called instance
// step2- constructor function is called because new keywrod packs all args and give to user
// step3-packed args are injected in this keywrod
// step4-we get it from this 
