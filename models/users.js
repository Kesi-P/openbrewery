const mongoose = require('mongoose');
const { Schema } = mongoose;
try {
mongoose.connect("mongodb+srv://Kesi:932411@login.nqwyhf9.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log('MongoDB connected!');
} catch (error) {
console.log('MongoDB connection error:', error);
}
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// const User = mongoose.model('User', userSchema);

// module.exports = User;
module.exports =
    mongoose.models.User || mongoose.model('User', userSchema);