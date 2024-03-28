import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Add logic to authenticate the user from the database here
        // For now, we'll just return a dummy user
        if (
          credentials.username === 'user' &&
          credentials.password === 'password'
        ) {
          return {
            id: 1,
            name: 'User',
            email: 'user@example.com',
          };
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  // Add database configuration here
  database: process.env.DATABASE_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.SECRET,
  },
});
