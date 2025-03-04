"use client";
import Image from "next/image";
import Link from "next/link";
import { FaUtensils, FaPizzaSlice, FaHamburger, FaIceCream, FaAppleAlt } from "react-icons/fa";
import "@/app/globals.css";

const HomePage = () => {
  return (
    <div className="bg-[] min-h-screen p-6">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden relative">
        <Image
          src="/images/NauAn.jpg" // Thay bằng ảnh phù hợp
          alt="Cooking"
          width={1200}
          height={600}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">UNLEASH CULINARY EXCELLENCE</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen.
          </p>
          <Link href="/Recipe">
            <button className="mt-6 bg-orange-500 px-6 py-2 text-white font-semibold rounded-full hover:bg-orange-600 transition">
              Go to Recipes
            </button>
          </Link>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto bg-blue-100 p-8 rounded-xl mt-10">
        <div className="flex justify-between items-start">
          <div>
            <span className="bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-full">EXPLORE</span>
            <h2 className="text-3xl font-extrabold mt-4">OUR DIVERSE PALETTE</h2>
            <p className="text-gray-700 mt-2 max-w-lg">
              If you are a breakfast enthusiast, a connoisseur of savory delights, or on the lookout for irresistible desserts, our curated selection has something to satisfy every palate.
            </p>
            <Link href="/Recipe">
              <button className="bg-black text-white px-5 py-2 mt-3 rounded-full hover:bg-gray-800">
                Go to Recipes
              </button>
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { icon: <FaUtensils />, label: "BREAKFAST" },
              { icon: <FaPizzaSlice />, label: "LUNCH" },
              { icon: <FaHamburger />, label: "DINNER" },
              { icon: <FaIceCream />, label: "DESSERT" },
              { icon: <FaAppleAlt />, label: "QUICK BITE!" },
            ].map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/Recipe",
                  query: { category: item.label.toLowerCase() }, // Truyền query parameter
                }}
              >
                <div className="flex items-center space-x-4 space-y-3 text-lg font-bold text-gray-700 hover:text-black cursor-pointer">
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;