import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import { signIn } from 'next-auth/react';
import GoogleProvider from "next-auth/providers/google";

const User = require('../../../models/users')
const JWT_SECRET = process.env.NEXTAUTH_SECRET;

export default NextAuth({
  providers: [
    CredentialsProvider({
      // Custom credentials provider (e.g., username/email and password)
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials,res) => {
        // Add your own authentication logic here
            const {email, password} = credentials as {
              email: string,
              password: string,
            };
            const user = await User.findOne({ email }).exec();
            const isMatch = bcrypt.compareSync(password, user.password);
            
            if (user && isMatch){
             return Promise.resolve(user);
              } else {
              return Promise.resolve(null);
              }
            
          
        },
        
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    ],
    pages: {
      signIn: '/login',
     
    },
    callbacks:{
      // async signIn({user, account, profile}){
      //   console.log('account',user,user.email,user.password,user.id, account)
      //   const email = user.email;
      //   //const password = user.password
      //   const finduser = await User.findOne({ email }).exec();
      //   //const isMatch = bcrypt.compareSync(password, finduser.password);
      //   if (finduser && (user.id === account.providerAccountId)){return true}
      //   else{return true}
        
      // },
      async signIn({ account, profile }) {
        if (account.provider === "google") {
          return profile.email && profile.email.endsWith("@example.com")
        }
        return true // Do different verification for other providers that don't have `email_verified`
      },
      async jwt({token,user}){
        
        return {...token, ...user}
      },
      
    
    async session({ session, token, user }){
      session.user = token
        return session
    },
    
  },
    session: {
      strategy: 'jwt',
      
    },
    jwt: {
      secret: JWT_SECRET,
    },
    
  });