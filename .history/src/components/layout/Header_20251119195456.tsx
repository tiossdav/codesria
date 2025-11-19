import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

type NavLink = {
  title: string;
  href: string;
};

const navlinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "Aim & Objectives", href: "/obj" },
  { title: "Research", href: "/research" },
  { title: "Team", href: "/team" },
  { title: "Publications", href: "/publications" },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <span className="font-caveat text-3xl text-gray-900 font-bold cursor-pointer">
              JustEnergyAfrica
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center font-raleway space-x-8">
            {navlinks.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                className={`text-[16px] font-medium transition-colors ${
                  location === nav.href
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {nav.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <ul className="flex flex-col p-4 space-y-4">
            {navlinks.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                onClick={() => setOpen(false)}
                className={`text-[16px] font-medium ${
                  location === nav.href
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {nav.title}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
