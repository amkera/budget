document.addEventListener("DOMContentLoaded", () => loadUsers());

loadUsers = () => {
  fetch(USERS_URL)
    .then(res => res.json())
    .then(json => {
      json.forEach(user => renderUser(user))
    })
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
        .then(newUser => {
          // const name = newUser.name;
          // new User(name);
          renderUser(newUser)
        });
        main.append(newUser);
    });
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
    renderExpense(expense)
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
}
