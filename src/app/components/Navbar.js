"use client"; // Bắt buộc nếu dùng hooks trong Next.js

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <p>Trang hiện tại: {pathname}</p>
    </nav>
  );
}
