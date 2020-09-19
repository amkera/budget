class User {
  constructor(data) {
    this.id = data.id
    this.name = this.name
  }
}

function loadUsers() {
  fetch(USERS_URL)
    .then(res => res.json())
    .then(json => {
      json.forEach(user => renderUser(user))
    })
}

function addUser() {
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
      main.append(newUser);
  });
}


function renderUser(userHash) {
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
