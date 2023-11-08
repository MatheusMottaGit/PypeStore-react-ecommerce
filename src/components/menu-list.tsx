import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "For men",
    href: "/men",
    description: "A section to show you our male products and variants.",
  },
  {
    title: "For women",
    href: "/women",
    description: "A section to show you our female products and variants.",
  },
];

const MenuList = () => {
  return (
    <ul className="flex items-center gap-12 text-xs cursor-pointer">
      <Link href="/">Home</Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xs">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex gap-5 items-center w-[480px] p-3">
                {components.map(({ title, description, href }) => {
                  return (
                    <a
                      href={href}
                      className="space-y-1 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors"
                    >
                      <div className="font-semibold text-base">{title}</div>

                      <p>{description}</p>
                    </a>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link href="/contact">Contact</Link>
    </ul>
  );
};

export default MenuList;
