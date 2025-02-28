"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import "@/app/styles/Navbar.css";
import "@/app/globals.css";

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Quản lý input tìm kiếm
  const router = useRouter();

  // Xử lý tìm kiếm
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/Search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(""); // Reset input sau khi tìm
      setSidebarOpen(false); // Đóng sidebar trên mobile
    }
  };

  return (
    <nav className="bg-[#F6F5F2] py-3 px-6 mt-6 flex items-center justify-between shadow-md border-[1px] border-[#cfcfcf] rounded-full">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/favicon.ico" alt="Logo" className="w-8 h-8" />
        <span className="text-lg font-bold text-black">Cooks Delight</span>
      </div>

      {/* Menu trên desktop */}
      <ul className="nav-links flex space-x-6 text-gray-500 font-medium">
        {["/Home", "/Recipe", "/CookingTips", "/About"].map((path, index) => {
          const labels = ["HOME", "RECIPES", "COOKING TIPS", "ABOUT US"];
          return (
            <li key={path}>
              <Link
                href={path}
                className={`relative ${pathname === path ? "text-black font-bold" : "hover:text-black"
                  }`}
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

      {/* Nút mở Sidebar trên mobile */}
      <button
        className="menu-button hidden p-2 bg-gray-100 rounded-full hover:bg-gray-200"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Search + Foodles trên desktop */}
      <div className="desktop-buttons flex items-center space-x-4">
        {/* Form tìm kiếm */}
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="p-2 pl-8 border border-gray-300 rounded-full outline-none"
          />
          <button
            type="submit"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            <Search size={18} />
          </button>
        </form>

        <button
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
          onClick={() => {
            (searchQuery.trim() !== "")
            router.push(`/Search?query=${encodeURIComponent(searchQuery)}`);
            setSearchQuery(""); // Reset input sau khi tìm

          }}
        >
          Foodles
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`} style={{ backgroundColor: "#F6F5F2" }}>
        <button className="close-button" onClick={() => setSidebarOpen(false)}>
          <X size={24} />
        </button>
        <ul className="flex flex-col space-y-4 mt-5">
          {["/Home", "/Recipe", "/CookingTips", "/About"].map((path, index) => {
            const labels = ["HOME", "RECIPES", "COOKING TIPS", "ABOUT US"];
            return (
              <li key={path}>
                <Link
                  href={path}
                  className="text-gray-700 hover:text-black"
                  onClick={() => setSidebarOpen(false)}
                >
                  {labels[index]}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Form tìm kiếm trong Sidebar */}
        <form onSubmit={handleSearch} className="mt-4 flex">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search recipes..."
            className="flex-1 p-2 border border-gray-300 rounded-l-full outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-r-full"
          >
            <Search size={18} />
          </button>
        </form>

        {/* Nút Foodles */}
        <button
          type="button"
          className="sidebar-buttons bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 mt-4"
          onClick={() => {
            (searchQuery.trim() !== "")
            router.push(`/Search?query=${encodeURIComponent(searchQuery)}`);
            setSearchQuery(""); // Reset input
            setSidebarOpen(false); // Đóng sidebar nếu đang mở

          }}
        >
          Foodles
        </button>
      </div>
    </nav>
  );
};

export default Navbar;