class user {
  constructor(uname, pwd){
    this.username = uname;
    this.password = pwd;
  }
  changePwd(newPwd) {
    this.password = newPwd;
  }
}

class admin extends user {
  constructor(uname, pwd, permissions){
    super(uname, pwd);
    this.accessLevel = permissions;
  }
  overridePwd(who, newPwd) {
    who.password = newPwd;
  }
}

var x = new user('bob','pword1');
var y = new admin('charles','imthebest','boss');

y.overridePwd(x,"jabooty");

console.log(y)
console.log(x)
