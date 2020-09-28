class User {
  static all_users = []
  constructor(data) {
    this.id = data.id
    this.name = data.name
    User.all_users.push(this)
  }
}

renderUser = (userHash) => {
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
  button.addEventListener("click", (event) => {
    event.target.hidden = true;
  });

  div.appendChild(p);
  div.appendChild(button);
  div.appendChild(ul);
  main.appendChild(div);

  userHash.expenses.forEach(expense => renderExpense(expense))
}
