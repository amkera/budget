const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const EXPENSES_URL = `${BASE_URL}/expenses`
const main = document.querySelector("main");
const addUserForm = document.querySelector(".container-1");

function addExpenseToUserDiv(expense) {
  //instantiated a new expense of the user,sending the newly created expense into the expenses array
  let user = User.all_users.find(u => u.id === expense.user_id);
  user.expenses.push(expense);
  user.displayLatestExpenseData();
}

// function search() {
//   let searchField = document.getElementById('search-text')
//   searchField.addEventListener("keyup", (e) => {
//     let userInput = document.getElementById('search-text').value
//     let filteredUsers = User.all_users.filter(user => user.name.startsWith(userInput))
//     filteredUsers.forEach(user => {
//
//     })
//   })
//
// }
