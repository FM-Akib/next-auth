import { mockProducts } from "@/data/mockData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function CheckoutPage({ params }: PageProps) {
  const { id } = await params;
  const productId = Number.parseInt(id);
  const product = mockProducts.find((p) => p.id === productId);
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-yellow-200 rounded-lg shadow-lg p-6">
          <Link
            href={`/products/${product.id}`}
            className="text-emerald-700 hover:text-emerald-900 font-medium text-sm mb-4 inline-block"
          >
            ← Back to Product
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Checkout</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Summary */}
            <div className="lg:w-1/3 bg-white rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>
              <div className="flex items-center gap-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                  placeholder="blur"
                  blurDataURL="/products/placeholder.jpg"
                />
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    {product.name}
                  </p>
                  <p className="text-emerald-700 font-semibold">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-gray-900">
                <span>Subtotal</span>
                <span>${product.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-900 mt-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-gray-900 mt-4">
                <span>Total</span>
                <span>${product.price.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:w-2/3 bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Shipping & Payment
              </h2>
              <form className="space-y-4">
                {/* Shipping Information */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Shipping Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-700 focus:ring-emerald-700 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-700 focus:ring-emerald-700 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-700 focus:ring-emerald-700 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-700 focus:ring-emerald-700 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="zip"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        className="py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-700 focus:ring-emerald-700 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-700 text-white px-6 py-3 rounded-md hover:bg-emerald-800 transition-colors duration-200 font-medium mt-6"
                >
                  Confirm Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
