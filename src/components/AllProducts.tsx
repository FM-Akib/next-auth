import { mockProducts } from "@/data/mockData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllProducts = () => {
  return (
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
                href={`/products/${product.id}`}
                className="mt-4 inline-block bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-emerald-800 transition-colors duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
