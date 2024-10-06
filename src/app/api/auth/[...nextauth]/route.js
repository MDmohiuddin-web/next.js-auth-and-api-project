import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const AuthOptions={
  // Configure NextAuth options
  // Set the secret key for signing JWT tokens
  secret: process.env.NEXT_PUBLIC_API_SECRET,


  // Configure session strategy to use JSON Web Tokens (JWT)
  session: {
    strategy: "jwt",
  },
  // Define authentication providers
  providers: [
    CredentialsProvider({
      // Define the credentials required for authentication
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
      // This function is responsible for authenticating user credentials
      // It checks if the credentials are provided and returns true if they are
      // In a real-world scenario, you would typically validate the credentials against a database
      async authorize(credentials) {
        // Extract email and password from credentials
        const { email, password } = credentials;

        // If no credentials provided, return null (authentication failed)
        if (!credentials) {
          return null;
        }

        // If email is provided, attempt to find a matching user
        if (email) {
          // Search for a user with matching email and password
          // Note: In a real application, you should never store plain text passwords
          // and should use proper password hashing and comparison techniques
          const currentUser = users.find(
            (user) => user.email === email && user.password === password
          );
          // Return the user if found, otherwise it will be null
          return currentUser;
        }

        // If no email provided or no user found, return null (authentication failed)
        return null;
      },
    }),
  ],
  // Uncomment the following lines to specify a custom sign-in page
  // pages: {
  //     signIn: "/auth/signin",
  // }
}
const handler = NextAuth(AuthOptions);
export { handler as GET, handler as POST };

const users = [
  {
    id: 2,
    name: "Emily Johnson",
    email: "priya@example.com",
    password: "password",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "amitkumar@example.com",
    password: "password",
  },
  {
    id: 4,
    name: "Sophia Rodriguez",
    email: "neha@example.com",
    password: "password",
  },
  {
    id: 5,
    name: "Alexander Patel",
    email: "vikram@example.com",
    password: "password",
  },
];