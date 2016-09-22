class User {
  constructor(username, password){
    this.username = username;
    this.password = password;
  }
  changePassword(newPassword){
    this.password = newPassword;
  }
}

class Admin extends User {
  constructor(username, password, accessLevel){
    super(username, password);
    this.accessLevel = accessLevel;
  }
  overridePassword(user, newPassword){
    user.changePassword(newPassword);
  }
}

let normalUser = new User("john", "123");
let superUser = new Admin("webmaster", "w00t", 100);
