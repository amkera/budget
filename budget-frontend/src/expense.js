renderNewExpenseForm = (event) => {
  const expenseForm = document.createElement('form')
  expenseForm.setAttribute('id', 'expenseForm')
  //expenseForm.setAttribute('class', event.target.dataset.userId)
  const label1 = document.createElement('label')
  label1.innerText = 'Add Expense Name'
  const input1 = document.createElement('input')
  input1.name = 'name'
  input1.setAttribute("user-id", event.target.dataset.userId)
  input1.id = 'expenseName'

  const label2 = document.createElement('label')
  label2.innerText = 'Add Expense Amount'
  const input2 = document.createElement('input')
  input2.id = 'expenseAmount'
  input2.type = 'number'
  input2.min = 0
  input2.name = 'amount'
  //ADDING THE SUBMIT(ADD EXPENSE) BUTTON
  const formButton = document.createElement('input')
  formButton.type = 'submit'
  formButton.value = 'Add Expense'
  formButton.id = "addExpense"
  //event.target.dataset.userId
  formButton.setAttribute('name', 'expenseSubmitButton')
  expenseForm.append(label1)
  expenseForm.append(input1)
  expenseForm.append(label2)
  expenseForm.append(input2)

  expenseForm.append(formButton)
  event.target.after(expenseForm);
}
