document.addEventListener("DOMContentLoaded", function () {
  let expenseForm = document.getElementById("expense-form");
  let nameInput = document.getElementById("expense-name");
  let amtInput = document.getElementById("expense-amount");
  let expenseList = document.getElementById("expense-list");
  let totalAmt = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();
  renderExpenses();

  expenseForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const amt = parseFloat(amtInput.value.trim());
    if (name !== "" && !isNaN(amt) && amt > 0) {
      const newExpense = {
        name: name,
        amt: amt,
        id: Date.now(),
      };
      expenses.push(newExpense);
      saveToLocalStorage();
      renderExpenses();
      updateTotal();

      //clear input
      nameInput.value = "";
      amtInput.value = "";
    }
    console.log("clicked");
  });

  function calculateTotal() {
    return expenses.reduce((acc, curr) => {
      totalExpenseAmount = acc + curr.amt;
      return totalExpenseAmount;
    }, 0);
  }
  function saveToLocalStorage() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
  function updateTotal() {
    totalAmount = calculateTotal();
    totalAmt.textContent = totalAmount.toFixed(2);
  }
  function renderExpenses() {
    expenseList.textContent = "";
    expenses.forEach(function (element) {
      let li = document.createElement("li");
      expenseList.appendChild(li);
      li.innerHTML = `${element.name} - $${element.amt}
      <button data-id=${element.id}>Delete</button>`;
    });
  }
  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      buttonId = parseInt(e.target.getAttribute("data-id"));
      expenses = expenses.filter((element) => element.id !== buttonId);
      console.log(expenses);
    }
    saveToLocalStorage();
    renderExpenses();
    updateTotal();
  });
});
