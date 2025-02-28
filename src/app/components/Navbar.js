'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname(); // Lấy URL hiện tại để active menu

  return (
    <nav className="bg-[#f6f1e9] py-3 px-6 mt-6 flex items-center justify-between shadow-md border-[1px] border-#666666 rounded-full">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/favicon.ico" alt="Logo" className="w-8 h-8" />
        <span className="text-lg font-bold text-black">Cooks Delight</span>
      </div>

      {/* Menu */}
      <ul className="flex space-x-6 text-gray-500 font-medium">
        {["/Home", "/Recipe", "/CookingTips", "/About"].map((path, index) => {
          const labels = ["HOME", "RECIPES", "COOKING TIPS", "ABOUT US"];
          return (
            <li key={path}>
              <Link
                href={path}
                className={`relative ${pathname === path ? "text-black font-bold" : "hover:text-black"}`}
              >
                {labels[index]}
                {pathname === path && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"></span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Search + Subscribe */}
      <div className="flex items-center space-x-4">
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <Search size={18} />
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
          SUBSCRIBE
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
