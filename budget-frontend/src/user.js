class User {
  static all_users = []
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.expenses = data.expenses
    User.all_users.push(this)
  }

  static getUsersFromBackEnd() {
    this.all_users.forEach(userObj => {
      addDivToDom(userObj);
    })
  } //helps render the users on the page. This = User class itself

  static addNewUserToDom(userHash) {
    addDivToDom(userHash);
  } //renders users on the DOM that are added on the front end

  showAllExpenses() {
    //User.all_users.forEach(user => )
    //an array of expense hashes
    this.expenses.forEach(expense => {
      const ul = document.querySelector(`div[data-id="${expense.user_id}"]`);
      //find the div whose data-id, which is the user id, equals the .user_id of the expense
      const li = document.createElement("li")
      const button = document.createElement("button")
      li.innerHTML = `${expense.name}: $${expense.amount} `

      //greater than or equal to the number

      button.setAttribute("button", "delete")
      button.setAttribute("data-expense-id", expense.id) //EXPENSE ID
      button.setAttribute("id", expense.user_id) //USER ID
      button.addEventListener("click", deleteExpense)
      //this is how JS knows what is being deleted, because the expense id is being set on the button
      button.innerHTML = "Delete"
      li.appendChild(button)
      ul.appendChild(li);
    })
  };





  // totalExpenses(userHash) {
  //   userHash.expenses.forEach(exp => {
  //     let counter = 0;
  //     exp.amount += counter;
  //   })
  // }

}
