import { ConnectDB } from "@/lib/ConnectDB";
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import bcrypt from "bcrypt";
const handler = NextAuth({
     secret: process.env.SECRET_KEY,
     session: {
          strategy: 'jwt',
          maxAge: 30 * 24 * 60 * 60,
     },
     providers: [
          CredentialsProvider({

               credentials: {
                    email: {},
                    password: {}
               },
               async authorize(credentials) {
                    const { email, password } = credentials;
                    if (!email || !password) {
                         return null
                    }
                    const db = await ConnectDB();
                    const currentUser = await db.collection('users').findOne({ email })
                    console.log(currentUser);
                    if (!currentUser) {
                         return null
                    }
                    const passwordMatched = bcrypt.compareSync(
                         password,
                         currentUser.password
                    );
                    if (!passwordMatched) {
                         return null
                    }
                    return currentUser;
               }
          }),
          GoogleProvider({
               clientId: process.env.GOOGLE_CLIENT_ID,
               clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
          GitHubProvider({
               clientId: process.env.GITHUB_ID,
               clientSecret: process.env.GITHUB_SECRET
          })
     ],
     callbacks: {
          async jwt({ token, user, account }) {
               if (account) {
                   if (account.provider === 'google' || account.provider === 'github') {
                       const { name, email, image } = user;
                       try {
                           const db = await ConnectDB();
                           const userCollection = db.collection('users');
                           let userExist = await userCollection.findOne({ email });
                           if (!userExist) {
                               const newUser = { name, email, image };
                               await userCollection.insertOne(newUser);
                           }
                           
                           token.name = name;
                           token.email = email;
                           token.image = image;
                       } catch (error) {
                           console.error('Error handling social login:', error);
                       }
                   }
               } 
               if (user) {
                   token.id = user._id;
                   token.email = user.email;
               }
               return token;
           },
           async session({ session, token }) {
               if (token) {
                   session.user.id = token.id;
                   session.user.email = token.email;
                   session.user.name = token.name; // If you added name in JWT callback
                   session.user.image = token.image; // If you added image in JWT callback
               }
               return session;
           },
     },
     pages: {
          signIn: '/login',


     },

})
export { handler as GET, handler as POST }