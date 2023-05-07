// Import required libraries
import { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../../models/users'

// Create a secret key for JWT
const JWT_SECRET = 'mysecretkey'

// Create a login API endpoint
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body
    console.log(req.body)
    const hashedPassword = bcrypt.hashSync(password);
    const isMatch = bcrypt.compareSync(password, hashedPassword);
    // TODO: Query your database to validate user credentials
     const user = await User.findOne({ email }, { password:isMatch })

    // Check if user exists and password is valid
    if (!user || !isMatch) {
      res.status(401).json({ message: 'Invalid' })
      return
    }

    // Create a JWT token
    const token = jwt.sign({ username:'kesip' }, JWT_SECRET, { expiresIn: '1d' })
    
    
   // Set the token in a HttpOnly cookie and send response
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Secure; SameSite=Strict`)
    
    res.status(200).json({ message: 'Login' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

// Create a middleware function to check for JWT token
export const withAuth = (handler) => async (req, res) => {
  // Check for token in cookie or local storage
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
  
  // Verify the token and extract user ID
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.userId = decoded.userId
    return handler(req, res)
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' })
  }
}

// Example protected API endpoint
export const protectedEndpoint = withAuth(async (req, res) => {
  // Only accessible with valid token
  res.status(200).json({ message: 'Protected endpoint' })
  return true
})
