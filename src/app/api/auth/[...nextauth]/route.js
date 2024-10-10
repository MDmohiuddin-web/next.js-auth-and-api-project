import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../../../lib/connectDB";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

// Configuration options for NextAuth
export const AuthOptions = {
  // Secret key for JWT encryption
  secret: process.env.NEXT_PUBLIC_API_SECRET,

  // Session configuration
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  // Authentication providers
  providers: [
    CredentialsProvider({
      // Define credentials fields
      credentials: {
        email: {
          label: "Email",
          type: "email",
          required: true,
          placeholder: "Enter Email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Enter Password",
        },
      },
      // Authorization function
      async authorize(credentials) {
        const { email, password } = credentials;
        const db = await connectDB();


        // Check if credentials are provided
        if (!credentials) {
          return null;
        }

        // Validate email and password
        if (email) {
          // Find user in the database
          const currentUser = await db
            .collection("users")
            .findOne({ email: email });
          console.log(currentUser);
          if (currentUser) {
            // Check if the password matches
            if (currentUser.password === password) {
              return currentUser;
            } else {
              return null;
            }
          }
          return null;
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    }),GitHubProvider({
      clientId: process.env.NEXT_GITHUB_ID,
      clientSecret: process.env.NEXT_GITHUB_SECRET,
    }),
    // FacebookProvider({
    //   clientId: process.env.NEXT_FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.NEXT_FACEBOOK_CLIENT_SECRET,
    // }),
    
  ],
  // Callback functions for token and session handling
  callbacks: {
    // JWT callback
    async jwt({ token, user }) {
      if (user) {
        token.type = user.type;
      }
      return token;
    },
    // Session callback
    async session({ session, token }) {
      if (token) {
        session.user.type = token.type;
      }
      return session;
    },
  },
};

// Create NextAuth handler
const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };

// Mock user data for testing
const users = [
  {
    id: 2,
    name: "Emily Johnson",
    email: "priya@example.com",
    password: "password",
    type: "admin",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "amitkumar@example.com",
    password: "password",
    type: "user",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Sophia Rodriguez",
    email: "neha@example.com",
    password: "password",
    type: "admin",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Alexander Patel",
    email: "vikram@example.com",
    password: "password",
    type: "user",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
