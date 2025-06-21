import { mockProducts } from "@/data/mockData";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
interface PageProps {
  params: {
    id: string;
  };
}

const page = ({ params }: PageProps) => {
  const product = mockProducts.find((p) => p.id === parseInt(params.id));
  if (!product) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-yellow-200 rounded-lg shadow-lg p-6">
          <Link
            href="/dashboard"
            className="text-emerald-700 hover:text-emerald-900 font-medium text-sm mb-4 inline-block"
          >
            ← Back to Dashboard
          </Link>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Image */}
            <div className="md:w-1/2">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-cover shadow-md"
                placeholder="blur"
                blurDataURL="/products/placeholder.jpg"
              />
            </div>
            {/* Product Details */}
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg font-semibold text-emerald-700 mb-2">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Product Details
              </h2>
              <p className="text-gray-700 mb-6">{product.details}</p>
              <button
                className="bg-emerald-700 text-white px-6 py-3 rounded-md hover:bg-emerald-800 transition-colors duration-200 font-medium"
                disabled
              >
                Add to Cart (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
