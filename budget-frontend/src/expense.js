
renderNewExpenseForm = (event) => {
  const expenseForm = document.createElement('form')
  expenseForm.setAttribute('id', 'expenseForm')
  expenseForm.setAttribute('class', event.target.dataset.userId)
  //adding the expense NAME
  const label1 = document.createElement('label')
  label1.innerText = 'Add Expense Name'
  const input1 = document.createElement('input')
  input1.name = 'name'

  //ADDING THE EXPENSE AMOUNT
  const label2 = document.createElement('label')
  label2.innerText = 'Add Expense Amount'
  const input2 = document.createElement('input')
  input2.type = 'number'
  input2.min = 0
  input2.name = 'amount'

  //ADDING THE SUBMIT(ADD EXPENSE) BUTTON
  const formButton = document.createElement('input')
  formButton.type = 'submit'
  formButton.value = 'Add Expense'
  //formButton.setAttribute('data-user_id', event.target.dataset.userId)
  formButton.setAttribute('id', event.target.dataset.userId)

  //const removeFormButton = document.createElement('button');
  formButton.setAttribute('name', 'expenseSubmitButton')
  expenseForm.append(label1)
  expenseForm.append(input1)
  expenseForm.append(label2)
  expenseForm.append(input2)

  expenseForm.append(formButton)
  event.target.after(expenseForm);


  //after event.target, add the expenseForm
  expenseForm.addEventListener("submit", createExpense)
  //VERY IMPORTANT:expenseForm.addEventListener("submit"...)
}

//make this a function for user objects
renderExpense = (expense) => {
  //use the users to show expenses
  showAllExpenses();

}
