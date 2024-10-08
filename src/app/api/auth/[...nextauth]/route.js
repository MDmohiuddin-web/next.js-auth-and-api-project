import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const AuthOptions = {
  secret: process.env.NEXT_PUBLIC_API_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  providers: [
    CredentialsProvider({
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
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!credentials) {
          return null;
        }

        if (email) {
          const currentUser = users.find(
            (user) => user.email === email && user.password === password
          );
          return currentUser;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.type = token.type;
      }
      return session;
    },
  },
};

const handler = NextAuth(AuthOptions);
export { handler as GET, handler as POST };

const users = [
  {
    id: 2,
    name: "Emily Johnson",
    email: "priya@example.com",
    password: "password",
    type: "admin",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "amitkumar@example.com",
    password: "password",
    type: "user",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Sophia Rodriguez",
    email: "neha@example.com",
    password: "password",
    type: "admin",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Alexander Patel",
    email: "vikram@example.com",
    password: "password",
    type: "user",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
