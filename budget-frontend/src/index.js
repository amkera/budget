const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const EXPENSES_URL = `${BASE_URL}/expenses`
const main = document.querySelector("main");
const addUserForm = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => loadUsers());

const loadUsers = () => {
  fetch(USERS_URL)
    .then(res => res.json())
    .then(json => {
      json.forEach(user => renderUser(user))
    })
}

addUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //get the inputs from the form
  const userName = e.target.name.value;
  fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name: userName})
  })
    .then(res => res.json())
    .then(newUser => renderUser(newUser))
    main.append(newUser)
});


const renderUser = (userHash) => {
  //trainerHash is the argument, and this hash is for one trainer only
  const div = document.createElement("div");
  const p = document.createElement("p");
  const button = document.createElement("button");
  const ul = document.createElement("p");

  div.setAttribute("class", "card"); //class="card"
  div.setAttribute("data-id", userHash.id); //data-id="1", id of the user
  p.innerHTML = userHash.name;
  button.setAttribute("data-user-id", userHash.id);
  button.innerHTML = "Create Expense";
  //<button data-user-id="1">Add Expense</button>
  //when I click this button, something needs to happen. a click event listener

  button.addEventListener("click", renderCreateExpenseForm);
  //createExpense here corresponds to the #create method in the controller
  div.appendChild(p);
  div.appendChild(button);
  div.appendChild(createExpenseForm);
  div.appendChild(ul);
  //This is what puts these elements onto the page.
  main.appendChild(div);
  userHash.expenses.forEach(expense => renderExpense(expense))
}

const renderCreateExpenseForm = (event) {

}


const createExpense = (expense) => {
  event.preventDefault();
  // const expenseForm = document.createElement("FORM");
  // expenseForm.setAttribute("expense-id", expense.id);
}


//FOR EACH EXPENSE, there should be a 'delete expense button'
const renderExpense = (expense) => {
  const ul = document.querySelector(`div[data-id="${expense.user_id}"]`);
  const li = document.createElement("li")
  const button = document.createElement("button")
  li.innerHTML = `${expense.name}: $${expense.amount} `
  button.setAttribute("button", "delete")
  button.setAttribute("data-expense-id", expense.id)
  //this is how JS knows what is being deleted, because the expense id is being set on the button
  button.innerHTML = "Delete"
  li.appendChild(button)
  ul.appendChild(li);
}
