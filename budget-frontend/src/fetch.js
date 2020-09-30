document.addEventListener("DOMContentLoaded", () => loadUsers());

//FETCH REQUEST 1
loadUsers = () => {
  fetch(USERS_URL) //Rails knows to go to the users controller
    .then(res => res.json())
    .then(json => {
      for (const userObject of json) {
        new User(userObject)
      }
      //User.all_users.forEach(user => renderUser(user))
      User.getUsersFromBackEnd();
    })
}

//FETCH REQUEST 2
addUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = e.target.name.value;
  alert(`Welcome, ${e.target.name.value}`)
  fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name: userName})
  })
  .then(res => res.json())
  .then(newUser => {
    let newestUser = new User(newUser)
    User.addNewUserToDom(newestUser)
  });
});


//FETCH REQUEST 3
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
    renderExpense(user.expenses[user.expenses.length -1]) //render the last expense using OOP
  })
  event.target.reset();
}

//FETCH REQUEST 4
deleteExpense = (e) => {
  e.preventDefault();
  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }
  fetch(`${EXPENSES_URL}/${e.target.dataset["expenseId"]}`, configObj) //remove from db
  e.target.parentElement.remove(); //remove from DOM

  let user = User.all_users.find(u => u.id === parseInt(e.target.id));
  let expenseToBeDeleted = user.expenses.find(exp => exp.id === parseInt(e.target.dataset.expenseId));
  user.expenses.splice(expenseToBeDeleted, 1); //remove from all_users array
}
