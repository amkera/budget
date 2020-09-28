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
  }

  static addNewUserToDom(userHash) {
    addDivToDom(userHash);
  }
}
//
// renderUser = (userHash) => {
//
// }
