import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import Logout from "@/components/Logout";
import { redirect } from "next/navigation";
import { mockProducts } from "@/data/mockData";

export default async function Dashboard() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Section */}
        <div className="bg-slate-700 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-white mb-6">User Profile</h1>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Image
              src={session.user.image || "/user.png"}
              alt="User Avatar"
              width={120}
              height={120}
              className="rounded-full border-4 border-emerald-700"
            />
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-700 text-white rounded-lg">
                  <p className="text-sm font-medium">Name</p>
                  <p className="text-lg">{session.user.name || "N/A"}</p>
                </div>
                <div className="p-4 bg-emerald-700 text-white rounded-lg">
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-lg">{session.user.email}</p>
                </div>
              </div>
              <div className="mt-4">
                <Logout />
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-slate-700 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={product.image || "/placeholder.png"}
                  alt={product.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                  placeholder="blur"
                  blurDataURL="/placeholder.png"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold text-emerald-700 mt-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <Link
                    href={`/dashboard/products/${product.id}`}
                    className="mt-4 inline-block bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-emerald-800 transition-colors duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
