"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { cn } from "../lib/utils";

const navItems = [
  { label: "Library", href: "/" },
  { label: "Add New", href: "/books/new" },
  { label: "Pricing", href: "/subscriptions" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useUser();
  return (
    <header className="w-full fixed z-50 bg('--bg-primary')">
      <div className="wrapper navbar-height py-4 flex justify-between items-center">
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/logo.png" alt="Bookify" width={42} height={26} />
          <span className="logo-text">Bookify</span>
        </Link>

        <nav className="w-fit flex gap-7.5 items-center">
          {navItems.map(({ label, href }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "nav-link-base",
                  isActive ? "nav-link-active" : "text-black hover-opacity-70",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-0.75">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <div className="nav-user-link">
              <UserButton />
              {user?.firstName && (
                <Link href="/subscriptions" className="nav-user-name">
                  {user.firstName}
                </Link>
              )}
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
