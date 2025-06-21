import { auth } from "@/auth";
import Dashboard from "@/components/Dashboard";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default page;
