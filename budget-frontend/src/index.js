const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const EXPENSES_URL = `${BASE_URL}/expenses`
const main = document.querySelector("main");
const addUserForm = document.querySelector(".container-1");

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
  button.innerHTML = "Create Expense"; //<button data-user-id="1">Add Expense</button>

  button.addEventListener("click", renderNewExpenseForm);
  //button.addEventListener("click", createExpense{


  div.appendChild(p);
  div.appendChild(button);
  div.appendChild(ul);//This is what puts these elements on page
  main.appendChild(div);

  userHash.expenses.forEach(expense => renderExpense(expense))
}

const renderNewExpenseForm = (event) => {
  const expenseForm = document.createElement('form')
  expenseForm.setAttribute('id', 'expenseForm')

  const label1 = document.createElement('label')
  label1.innerText = 'Add Expense Name'
  const input1 = document.createElement('input')
  input1.name = 'name'
  //input.value = ''

  const label2 = document.createElement('label')
  label2.innerText = 'Add Expense Amount'
  const input2 = document.createElement('input')
  input2.type = 'integer'

  const formButton = document.createElement('input')
  formButton.type = 'submit'
  formButton.value = 'Add Expense'
  formButton.setAttribute('data-user_id', event.target.dataset.userId)

  formButton.setAttribute('name', 'expenseSubmitButton')
  expenseForm.append(label1)
  expenseForm.append(input1)

  expenseForm.append(label2)
  expenseForm.append(input2)

  expenseForm.append(formButton)
  event.target.after(expenseForm);

  //VERY IMPORTANT FROM Z: expenseForm.addEventListener("submit"...)
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
