const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const EXPENSES_URL = `${BASE_URL}/expenses`
const main = document.querySelector("main");
const addUserForm = document.querySelector(".container-1");

function addExpenseToUserDiv(expense) {

  const ul = document.getElementById(`${expense.user_id}`)
  const li = document.createElement("li")
  li.innerHTML = `${expense.name}: $${expense.amount} `

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete Expense"
  deleteButton.id = "deleteExpense";
  deleteButton.setAttribute("button", "delete")
  deleteButton.setAttribute("data-expense-id", expense.id) //EXPENSE ID
  deleteButton.setAttribute("data-user-id", expense.user_id) //USER ID
  //deleteButton.addEventListener("click", deleteExpense)

  li.appendChild(deleteButton);
  ul.appendChild(li);
}
