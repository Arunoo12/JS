// now we will understand prototype 
let myName = "arun    ";
String.prototype.trueLength = function () {
    // console.log(this);
    // console.log(this.name);
    console.log(`true length is ${this.trim().length}`);
}
// console.log(myName.trueLength())
myName.trueLength();
// console.log(myName.length) 
// console.log(myName.trim().length) 

// console.log(myName.trueLength()) // want to make this function

let myHeros = ['ironMan', "thor", 'spiderMan'];
// console.log(myHeros.length) 
// console.log(myHeros.indexOf('ironMan')) 
let heroPower = {
    ironMan: 'technology',
    thor: 'hammer',
    spiderMan: 'spiderWeb',

    getSpiderPower: function () {
        console.log(`spidy power is : ${this.spiderMan}`)
    }

}
// create own method
Object.prototype.arun = function () {
    console.log('arun is present in all objects ')
}

// heroPower.arun();
// myHeros.arun()


//INHERITANCE

const teacher = {
    makeVideo: true
}
const teachingSuuport = {
    isAvailable: false
}
const user = {
    userName: 'arunsingh',
    email: "aruns6061@gmail.com"
}
const TAsupport = {
    makeAssignment: 'jsAssignment',
    fullTime: true,
    __proto__: teachingSuuport
}
teacher.__proto__ = user;

//modern Syntax
Object.setPrototypeOf(teachingSuuport, teacher)