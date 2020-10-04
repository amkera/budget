document.addEventListener("DOMContentLoaded", () => fetchUsers());

function fetchUsers() {
  fetch(USERS_URL)
    .then(resp => resp.json())
    .then(json => {
      for (const userObject of json) {
        new User(userObject.id, userObject.name, userObject.expenses);
      }
      User.addDivToDom();
    });
};

function postUser(e) {
  const userInput = document.getElementById("input-text")
  let data = { user: {"name": userInput.value }}
  fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(resp => resp.json())
  .then(userObject => {
    main.innerHTML = ""     //prevents from 2x iteration
    new User(userObject.id, userObject.name, userObject.expenses);
    User.addDivToDom();
  })
}

function postUserExpense(e) {
  const expenseName = document.getElementById("expenseName").value
  const expenseAmount = parseInt(document.getElementById("expenseAmount").value)
  const userId = document.getElementById("expenseName").getAttribute("user-id");

  let data = {expenses: {"name": expenseName, "amount": expenseAmount, "user_id": parseInt(userId)}}
  fetch(EXPENSES_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(resp => resp.json())
  .then(userObject => {
    addExpenseToUserDiv(userObject)
  })
}

function deleteExpense(e) {
  let expenseId = parseInt(e.target.getAttribute('data-expense-id'));
  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
  fetch(`${EXPENSES_URL}/${expenseId}`, configObj)
  e.target.parentElement.remove();
  let userID = parseInt(e.target.dataset.userId);
  let expenseID = parseInt(e.target.dataset.expenseId)

  let user = User.all_users.find(u => u.id === userID);
  let expenseToBeDeleted = user.expenses.find(exp => exp.id === expenseID);
  user.expenses.splice(expenseToBeDeleted, 1);
}



//delete
