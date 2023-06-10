import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'

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
    ],
    pages: {
      signIn: '/login'
    },
    callbacks:{
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