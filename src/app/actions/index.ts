"use server";

import { signIn, signOut } from "@/auth";
import UserModel from "@/models/userSchema";
import { IUser } from "@/types/userTypes";


export async function doSocialLogin(formData: FormData): Promise<void> {
  const action = formData.get('action');
//   console.log(`Social login action: ${action}`);
  await signIn(action as string, {redirectTo: '/dashboard'});
}

export async function doLogout(){
    await signOut({redirectTo: '/'});
}

export async function createUser(user : IUser){
  try{
    await UserModel.create(user);
    return { success: true, message: "User created successfully!" };
  }
  catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: "Failed to create user." };
  }
}

export async function doCredentialsLogin(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  try {
    const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  if (!result || result.error) {
    throw new Error(result?.error || "Login failed. Please check your credentials.");
  }
  return result;
  }catch (error) {
    console.error("Error during credentials login:", error);
    throw new Error("Login failed. Please check your credentials.");
  }



}