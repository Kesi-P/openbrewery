const mongoose = require('mongoose')
try {
    mongoose.connect("mongodb+srv://Kesi:932411@login.nqwyhf9.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected!');
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
  // Define schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create model
//const User = mongoose.model('User', userSchema);

//Use model to interact with database
// const user = new User({ name: 'John Doe', email: 'johndoe@example.com', password: 'password' });
// user.save({ timeout: 30000 })
//   .then(savedUser => {
//     console.log('TTTTTTTTTTTTTTTTTTT');
//   })
//   .catch(err => {
//     console.error('ErorrrrSus',err);
//   });

 // module.exports = User;
  module.exports =
    mongoose.models?.User || mongoose.model('User', userSchema);
    //mongoose.model('User', userSchema);