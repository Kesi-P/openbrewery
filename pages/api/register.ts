// Import required libraries
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
const User = require('../../models/users')


// Create a login API endpoint
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password } = req.body
    const hashedPassword = bcrypt.hashSync(password);
    console.log(req.body)
    // TODO: Query your database to validate user credentials
    const findUser = await User.findOne({ email}).exec();
    if( !findUser){
      const user = new User({ name: firstName + ' ' + lastName, email: email, password: hashedPassword });
      user.save(function(err) {
        if (err) throw err;
        console.log('User saved successfully!');
        res.status(200).json({ message: 'Login successful' })
      });
          
        
    }
    else{
      console.log('invalid')
      res.status(401).json({ message: 'Invalid' })
      //return
    }
  }
}
