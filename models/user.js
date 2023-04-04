// var mongoose = require('mongoose'),
//   Schema = mongoose.Schema;
// var userSchema = new Schema({
//     fullName:String,
//     email:String,
//     role:String,
//     password:String
// });
// module.exports = mongoose.model('User', userSchema);

module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
            name:String,
            email:String,
            password:String,
        }
      )
    )
    return User
  };
  