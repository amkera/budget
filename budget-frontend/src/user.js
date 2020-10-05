class User {
  static all_users = []
  //instance
  constructor(id, name, expenses) {
    this.id = id
    this.name = name
    this.expenses = expenses
    User.all_users.push(this)
  }

  static addDivToDom() {
    this.all_users.forEach(userObject => {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const button = document.createElement("button");
      const ul = document.createElement("ul")

      div.class = "card";

      p.innerHTML = userObject.name;

      button.id = "createExpense"
      button.setAttribute("data-user-id", userObject.id);
      button.innerHTML = "Create Expense";
      userObject.expenses.forEach(expense => {
        ul.id = expense.user_id
        const li = document.createElement("li")
        li.innerHTML = `${expense.name}: $${expense.amount} `

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete Expense"
        deleteButton.id = "deleteExpense";

        deleteButton.setAttribute("button", "delete")
        deleteButton.setAttribute("data-expense-id", expense.id) //EXPENSE ID
        deleteButton.setAttribute("data-user-id", expense.user_id) //USER ID

        li.appendChild(deleteButton);
        ul.appendChild(li);
      })
      p.appendChild(button);
      div.appendChild(p);

      div.appendChild(ul);
      main.appendChild(div);
    })
  }

  displayLatestExpenseData() {
    //this only displays the last expense because it's important to use OO
    //decided to use this because this functionn is always called on the last expense
    let latestExpense = this.expenses[this.expenses.length-1];
    //by calling expense on an object, we need exp name and exp amount
    const ul = document.getElementById(`${latestExpense.user_id}`)
    const li = document.createElement("li")
    li.innerHTML = `${latestExpense.name}: $${latestExpense.amount} `

    const deleteButton = document.createElement("button");

    deleteButton.innerHTML = "Delete Expense"
    deleteButton.id = "deleteExpense";
    deleteButton.setAttribute("button", "delete")
    deleteButton.setAttribute("data-expense-id", latestExpense.id) //EXPENSE ID
    deleteButton.setAttribute("data-user-id", latestExpense.user_id) //USER ID
    //deleteButton.addEventListener("click", deleteExpense)

    li.appendChild(deleteButton);
    ul.appendChild(li);
  }

}
