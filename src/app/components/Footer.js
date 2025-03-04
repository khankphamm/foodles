"use client";
import { useState } from "react";
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
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === "") return;

    // Mở Gmail với email nhận là "support@foodles.com" (bạn có thể đổi)
    const mailtoLink = `mailto:support@foodles.com?subject=Subscribe to Newsletter&body=Please subscribe me to the newsletter. My email: ${email}`;
    window.location.href = mailtoLink;

    setEmail(""); // Xóa input sau khi gửi
  };

  return (
    <div className="container mx-auto">
      {/* 🔥 Phần Subscribe 🔥 */}
      <div className="bg-[#FF6B5D] text-white text-center p-10 rounded-2xl mb-10">
        <h3 className="text-sm uppercase font-semibold tracking-wide">Subscribe</h3>
        <h2 className="text-3xl font-bold mt-2">JOIN THE FUN</h2>
        <h2 className="text-3xl font-bold">SUBSCRIBE NOW!</h2>
        <p className="mt-3 text-sm max-w-md mx-auto">
          Subscribe to our newsletter for a weekly serving of recipes, cooking tips, 
          and exclusive insights straight to your inbox.
        </p>

        {/* Form nhập email */}
        <form onSubmit={handleSubscribe} className="mt-5 flex justify-center">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-l-full text-black w-72 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-5 py-3 rounded-r-full hover:bg-gray-800"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-6 rounded-2xl">
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
    </div>
  );
};

export default Footer;
