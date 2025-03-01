"use client";
import Link from "next/link";
import { FaTiktok, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const menuItems = [
  { label: "HOME", path: "/Home" },
  { label: "RECIPES", path: "/Recipe" },
  { label: "COOKING TIPS", path: "/CookingTips" },
  { label: "ABOUT US", path: "/About" },
];

const socialIcons = [
  { icon: FaTiktok, link: "https://www.tiktok.com" },
  { icon: FaFacebookF, link: "https://www.facebook.com" },
  { icon: FaInstagram, link: "https://www.instagram.com" },
  { icon: FaYoutube, link: "https://www.youtube.com" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 rounded-2xl mt-10 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-600 pb-4">
        {/* Logo & Tên Website */}
        <div className="flex items-center space-x-2">
          <img src="/favicon.ico" alt="Logo" className="w-10 h-10" />
          <span className="text-lg font-bold">Cooks Delight</span>
        </div>

        {/* Menu Điều Hướng */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6 text-gray-300 font-medium">
            {menuItems.map((item, index) => (
              <li key={index} className="hover:text-white">
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mạng Xã Hội */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {socialIcons.map((social, index) => {
            const Icon = social.icon;
            return (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                <Icon className="text-xl hover:text-gray-400 cursor-pointer" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Bản Quyền */}
      <p className="text-center text-gray-500 text-sm mt-4">
        COPYRIGHT © 2024 COOKS DELIGHT
      </p>
    </footer>
  );
};

export default Footer;
