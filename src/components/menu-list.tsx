import Link from "next/link";
import React from "react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "./ui/navigation-menu";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "For men",
//     href: "/men",
//     description: "A section to show you our male products and variants.",
//   },
//   {
//     title: "For women",
//     href: "/women",
//     description: "A section to show you our female products and variants.",
//   },
// ];

const MenuList = () => {
  return (
    <ul className="flex items-center gap-12 text-xs cursor-pointer">
      <Link href="/">Home</Link>

      <Link href="/products">Products</Link>

      <Link href="/contact">Contact</Link>
    </ul>
  );
};

export default MenuList;
