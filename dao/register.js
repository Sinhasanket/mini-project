const db = require("../util/mysqlDatabase");

module.exports = class User{

    constructor(id,companyName,fullName,gender,email,password,phoneNumber){
        this.id = id;
        this.companyName = companyName;
        this.fullName = fullName;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }

    save(){
     return db.execute("INSERT INTO register (companyName,fullName,gender,email,password,phoneNumber) VALUES (?,?,?,?,?,?)",
        [this.companyName, this.fullName, this.gender, this.email, this.password, this.phoneNumber]);
    }

}