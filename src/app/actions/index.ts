"use server";

import { signIn, signOut } from "@/auth";


export async function doSocialLogin(formData: FormData): Promise<void> {
  const action = formData.get('action');
//   console.log(`Social login action: ${action}`);
  await signIn(action as string, {redirectTo: '/dashboard'});
}

export async function doLogout(){
    await signOut({redirectTo: '/'});
}