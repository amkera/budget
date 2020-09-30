class User {
  static all_users = []
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.expenses = data.expenses
    User.all_users.push(this)
  }

  static getUsersFromBackEnd() {
    this.all_users.forEach(userHash => {
      addDivToDom(userHash);
    })
  } //helps render the users on the page. This = User class itself

  static addNewUserToDom(userHash) {
    addDivToDom(userHash);
    welcomeUser();
  } //renders users on the DOM that are added on the front end


  // totalExpenses(userHash) {
  //   userHash.expenses.forEach(exp => {
  //     let counter = 0;
  //     exp.amount += counter;
  //   })
  // }

}
