document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("todo-input");
  let addBtn = document.getElementById("add-task-btn");
  let unorderedList = document.getElementById("todo-list");

  let storeTask = JSON.parse(localStorage.getItem("taskInLS")) || [];
  storeTask.forEach(function (element) {
    renderElement(element);
  });

  addBtn.addEventListener("click", function () {
    // getting input value and using trim to remove unnecessary spaces
    let input1 = input.value.trim();
    //validating input if empty break
    if (input1 === "") {
      return;
    }
    // forming a pure detailed input data (encapsulation )
    let inputData = {
      id: Date.now(),
      completed: false,
      details: input1,
    };
    // storing inputdata in array
    storeTask.push(inputData);
    storeInLocalStorage(); // storing array in localstorage
    // renderElement();
    //reset input value for next time
    input1 = "";
  });
  function storeInLocalStorage() {
    localStorage.setItem("taskInLS", JSON.stringify(storeTask));
  }
  function renderElement(i) {
    let list = document.createElement("li"); // creating a li
    list.setAttribute("id", i.id); // setting a id to li which is same as element
    // li.setAttribute("i")
    unorderedList.appendChild(list); // append child to make li usable
    list.innerHTML = `<span>${i.details}</span>
    <button>delete</button>`; // creating a function
    if (i.completed === true) {
      list.classList.add("completed"); // if status true then add a class named completed in it
    }
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "BUTTON") return; // break
      i.completed = !i.completed; // used to reverse the value of boolean
      console.log(i.completed);
      list.classList.toggle("completed"); // to change value of completed in object
      // console.log(i.completed);
      storeInLocalStorage(); // storing all changed values to localstorage
    });
    list.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); // stop bubbling
      console.log(i.id);
      storeTask = storeTask.filter(function (t) {
        t.id !== i.id;
      });
      list.remove();
      storeInLocalStorage();
    });
  }
});
