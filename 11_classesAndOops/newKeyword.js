function multiBy5(num) {
    return console.log(num * 5)
};
// multiBy5(50)

function CreateUser(username, score) {
    this.username = username;
    this.score = score;
}
CreateUser.prototype.increment = function () {
    this.score++
   console.log(this.score);
}
CreateUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}
let chai = new CreateUser('chai', 10);
let tea = new CreateUser('tea', 100);
// let chai = CreateUser('chai', 10);
// let tea = CreateUser('tea', 100);
// chai.printMe()// error because the function does not know about new added prototype function so create a new keyword in variables when calling a function 
chai.printMe();
tea.printMe();
chai.increment();
tea.increment();