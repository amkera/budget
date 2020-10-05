const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const EXPENSES_URL = `${BASE_URL}/expenses`
const main = document.querySelector("main");
const addUserForm = document.querySelector(".container-1");

function addExpenseToUserDiv(expense) {
  //instantiated a new expense of the user,
  //sending the newly created expense into the expenses array
  let user = User.all_users.find(u => u.id === expense.user_id);
  user.expenses.push(expense);
  user.displayLatestExpenseData();
}
