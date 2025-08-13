// in js events works sequentially and performs on actions but we do breaks sequences on some operations like on the time of a asynch programming 

// document.getElementById('gtr').onclick=function(){
//     alert('gtr clicked ')
// }
// document.getElementById('gtr').addEventListener('click', function () {
//     alert("this is right way to writ a event listner ")
// }, true)
// true = capture , false = bubbling (proposition)

// [AttachEvent()] this was used when we have to add an event in internet explorer time 
// [jQuery] this was also a time when we can add event only by writing (on) like onclick 

//EVENT OBJECT 
// document.getElementById('gtr').addEventListener('click', function (event) {
    // this is an event object 
    // console.log(event.timeStamp); // timestamp when the event happens based on monotonic clock 

    // console.log(event.toElement); // the tag 

    // console.log(event.sourceElement);

    // console.log(`the current target is : ${event.currentTarget}`);// the element you call 

    // console.log(`the target is : ${event.target}`); // the button you click on

    // console.log(`screen X : ${event.screenX} and screen Y : ${event.screenY}`)

    // if (event.altKey === true) {
    //     console.log("alt is pressed")
    // } else { console.log("alt key is not pressed ") }

    // if (event.shiftKey === true) {
    //     console.log("shift is pressed")
    // } else { console.log("shift key is not pressed ") }

    // if (event.ctrlKey === true) {
    //     console.log("ctrl is pressed")
    // } else { console.log("ctrl key is not pressed ") }

//     if (event.altKey === true) {
//         console.log(`keyCode is: ${event.keyCode}`)
//     }


// }, false)

// READ THROUGHLY ABOUT THIS 
