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
        deleteButton.addEventListener("click", deleteExpense)

        li.appendChild(deleteButton);
        ul.appendChild(li);
      })
      p.appendChild(button);
      div.appendChild(p);

      div.appendChild(ul);
      main.appendChild(div);
    })
  }
}
