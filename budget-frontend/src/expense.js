// class Expense {
//   static all_expenses = []
//
//   constructor(data) {
//     this.id = data.id
//     this.name = data.name
//     this.user_id = data.user_id
//     this.amount = data.amount
//     this.updated_at = data.updated_at
//     this.created_at = data.created_at
//     Expense.all_expenses.push(this)
//   }
//   // static findExpense(expenseName) {
//   //   return (this.all_expenses.find(object => {return object.name === expenseName}))
//   // }
// }

renderNewExpenseForm = (event) => {
  //this = button, or event.target
  const expenseForm = document.createElement('form')
  expenseForm.setAttribute('id', 'expenseForm')
  expenseForm.setAttribute('class', event.target.dataset.userId)

  const label1 = document.createElement('label')
  label1.innerText = 'Add Expense Name'
  const input1 = document.createElement('input')
  input1.name = 'name'
  //input.value = ''

  const label2 = document.createElement('label')
  label2.innerText = 'Add Expense Amount'
  const input2 = document.createElement('input')
  input2.type = 'number'
  input2.min = 0
  input2.name = 'amount'

  const formButton = document.createElement('input')
  formButton.type = 'submit'
  formButton.value = 'Add Expense'
  //formButton.setAttribute('data-user_id', event.target.dataset.userId)
  formButton.setAttribute('id', event.target.dataset.userId)

  const removeFormButton = document.createElement('button');
  formButton.setAttribute('name', 'expenseSubmitButton')
  expenseForm.append(label1)
  expenseForm.append(input1)
  expenseForm.append(label2)
  expenseForm.append(input2)

  expenseForm.append(formButton)
  event.target.after(expenseForm);
  expenseForm.addEventListener("submit", createExpense)
  //VERY IMPORTANT:expenseForm.addEventListener("submit"...)
}

renderExpense = (expense) => {
  const ul = document.querySelector(`div[data-id="${expense.user_id}"]`);
  const li = document.createElement("li")
  const li2 = document.createElement("li");
  const button = document.createElement("button")
  li.innerHTML = `${expense.name}: $${expense.amount} `
  button.setAttribute("button", "delete")
  button.setAttribute("data-expense-id", expense.id)
  button.setAttribute("id", expense.user_id)
  button.addEventListener("click", deleteExpense)
  //this is how JS knows what is being deleted, because the expense id is being set on the button
  button.innerHTML = "Delete"
  li.appendChild(button)
  ul.appendChild(li);
}
