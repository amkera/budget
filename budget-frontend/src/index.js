const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const EXPENSES_URL = `${BASE_URL}/expenses`
const main = document.querySelector("main");
const addUserForm = document.querySelector(".container-1");


//BOTH HELPS TO RENDER EXISTING USERS, BUT ALSO SHOWS NEW USERS. CODE IS REFERENCED TWICE.
function addDivToDom(userHash) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const button = document.createElement("button");
  const ul = document.createElement("p");
  const totalExpensesDiv = document.createElement("div");

  div.setAttribute("class", "card"); //class="card"
  div.setAttribute("data-id", userHash.id); //data-id="1", id of the user
  p.innerHTML = userHash.name;
  button.setAttribute("data-user-id", userHash.id);
  button.innerHTML = "Create Expense"; //<button data-user-id="1">Add Expense</button>

  button.addEventListener("click", renderNewExpenseForm);
  button.addEventListener("click", (event) => {
    event.target.hidden = true;
  });

  const filterForm = document.createElement('form');
  const amountField = document.createElement('label');
  filterForm.appendChild(amountField);
  const input = document.createElement('input');

  input.setAttribute('name', 'amountField');

  const filterButton = document.createElement("button");
  filterButton.setAttribute('name', 'filterButton');
  amountField.innerText = "Filter By Amount:"
  filterForm.append(filterButton);
  filterForm.append(input)
  filterButton.innerHTML = "Filter"

  filterForm.addEventListener("submit", (event) => {
    debugger;
  })


  // const filterButton = document.createElement("button");
  // filterButton.innerHTML = "Filter"
  //
  // filterButton.addEventListener("click", (event) => {
  //   debugger;
  // }

  div.appendChild(p);
  div.appendChild(button);
  div.appendChild(filterForm);
  div.appendChild(ul);
  main.appendChild(div);
  //userHash.expenses.forEach(expense => renderExpense(expense))
  userHash.showAllExpenses();
}
