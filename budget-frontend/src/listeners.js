document.addEventListener('click', (e) => {
  if (e.target.matches(".submit")) {
    e.preventDefault();
    postUser(e);
  }
  if (e.target.matches("#createExpense")) {
    e.preventDefault();
    renderNewExpenseForm(e);
  }
  if (e.target.matches("#addExpense")) {
    e.preventDefault();
    postUserExpense(e);
  }
  if (e.target.matches("#deleteExpense")) {
    e.preventDefault();
    deleteExpense(e);
  }
})
