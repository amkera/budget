document.addEventListener("DOMContentLoaded", () => loadUsers());

loadUsers = () => {
  fetch(USERS_URL)
    .then(res => res.json())
    .then(json => {
      for (const userName of json) {
        //let [id, name] = Object.values(userName)
        //debugger
        new User(userName)
      }
      User.all_users.forEach(user => renderUser(user))
      //debugger
      //renderUser(User.all_users);
    })

}

createExpense = (e) => {
  e.preventDefault();
  let expenseName = e.target.name.value;
  let expenseAmount =  e.target.amount.value;
  let users_id = e.target.className;

  fetch(EXPENSES_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name: expenseName, amount: expenseAmount, user_id: users_id})
  }).then(resp => {
    return resp.json()
  }).then(expense => {
    //find the user
    let user = User.all_users.find(u => u.id === expense.user_id)
    user.expenses.push(expense)
    renderExpense(user.expenses[user.expenses.length -1])
  })
  event.target.reset();
}

deleteExpense = (e) => {
  e.preventDefault();
  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
  fetch(`${EXPENSES_URL}/${e.target.dataset["expenseId"]}`, configObj)
  e.target.parentElement.remove();
  // //find user, find their expenses, and then delete expense from the array
  // let user = User.all_users.find(u => u.id === parseInt(e.target.id))
  // //user.expenses.findIndex(ex => ex.id === e.target.dataset.expenseId)
  // let index = user.expenses.find(ex => ex.id === parseInt(e.target.dataset.expenseId)).id
  // user.expenses.splice(index, 1)
  // //user.expenses.splice(user.expenses.find(u => u.id === parseInt(e.target.id)).expenses.find(ex => ex.id === parseInt(e.target.dataset.expenseId), 1)
  // debugger
}
