const User  = require("../dao/register");

exports.postUser = (request, response) =>{

   const companyName = request.body.companyName;
   const fullName = request.body.fullName;
   const gender = request.body.gender;
   const email = request.body.email;
   const password = request.body.password;
   const phoneNumber = request.body.phoneNumber;

   const user = new User(null,companyName,fullName,gender,email,password,phoneNumber);
   user.save()
     .then(data =>{
        response.send(data);
        console.log("saved data of user");
     })
     .catch(err => console.log(err));
};