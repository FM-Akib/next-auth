import { createUser } from "@/app/actions";
import { dbConnect } from "@/lib/mongo";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {

  const { name, email, password } =  await request.json();

    // Validate input
  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Email and password are required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
 
     // Connect to the database
  await dbConnect();

    // hash the password
  const hashedPassword = await bcrypt.hash(password, 5);

    // Create a user object
    const user ={
        name,
        email,
        password: hashedPassword,
    }

    //update the user in the database
   try{
     const res= await createUser(user);
        if (!res.success) {
        return new NextResponse(JSON.stringify({ error: res.message }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
        }
        NextResponse.json({ message: res.message }, { status: 201 });

   }
    catch (error) {
     const message = error instanceof Error ? error.message : "Internal Server Error";
     return new NextResponse(JSON.stringify({ error: message }), {
       status: 500,
       headers: { "Content-Type": "application/json" },
     });
    }
   
  // Simulate successful registration
  return new NextResponse(JSON.stringify({ message: "User created successfully!" }), {
    status: 201});
}