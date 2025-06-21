import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import UserModel from "./models/userSchema";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const user = await UserModel.findOne({
            email: credentials?.email,
          });
          // console.log("User found:", user);

          if (!user) {
            throw new Error("No user found with the provided email.");
          }

          // Assuming you have a method to verify the password
          const isPasswordValid = await bcrypt.compare(
            String(credentials?.password),
            user.password
          );

          // console.log("Password valid:", isPasswordValid);

          if (!isPasswordValid) {
            throw new Error("Invalid password.");
          }

          return user;
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error(
            "Authorization failed. Please check your credentials."
          );
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
