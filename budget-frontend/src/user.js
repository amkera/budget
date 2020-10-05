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
      if (userObject.expenses.length === 0) {
        ul.id = userObject.id
      } //had to do this because if a user is brand new, they don't have expenses yet and there's no expense.user_id to grab
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
    //decided to use this because this function is always called on the last expense
    //(or first expense if this is a brand new user)
    let latestExpense = this.expenses[this.expenses.length-1];
    //by calling expense on an object, we need exp name and exp amount
    const ul = document.getElementById(`${latestExpense.user_id}`)
    const li = document.createElement("li")
    li.innerHTML = `${latestExpense.name}: $${latestExpense.amount}`
    const deleteButton = document.createElement("button");

    deleteButton.innerHTML = "Delete Expense"
    deleteButton.id = "deleteExpense";
    deleteButton.setAttribute("button", "delete")
    deleteButton.setAttribute("data-expense-id", latestExpense.id) //EXPENSE ID
    deleteButton.setAttribute("data-user-id", latestExpense.user_id) //USER ID
    li.appendChild(deleteButton);
    ul.appendChild(li);

  }

}
