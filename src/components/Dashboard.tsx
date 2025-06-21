import { auth } from "@/auth";
import Image from "next/image";
import Logout from "@/components/Logout";

export default async function Dashboard() {
  const session = await auth();

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Section */}
        <div className="bg-slate-700 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-white mb-6">User Profile</h1>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Image
              src={session?.user?.image || "/user.png"}
              alt="User Avatar"
              width={120}
              height={120}
              className="rounded-full border-4 border-emerald-700"
            />
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-700 text-white rounded-lg">
                  <p className="text-sm font-medium">Name</p>
                  <p className="text-lg">{session?.user?.name || "N/A"}</p>
                </div>
                <div className="p-4 bg-emerald-700 text-white rounded-lg">
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-lg">{session?.user?.email}</p>
                </div>
              </div>
              <div className="mt-4">
                <Logout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
