import { Link, useLocation } from "wouter";

type NavLink = {
  title: string;
  href: string;
  submenu?: NavLink[];
};

const navlinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "Aim & Objectives", href: "/obj" },
  { title: "Research", href: "/research" },
  { title: "Team", href: "/team" },
  { title: "Publications", href: "/publications" },
  { title: "Contact", href: "/contact" },
];

function Header() {
  const [location] = useLocation();

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/">
              <span className="ml-3 font-caveat text-3xl text-gray-900 font-bold cursor-pointer transition-colors">
                Just<span className="text-emerald-600">Energy</span>Africa
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
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
        </div>
      </div>
    </nav>
  );
}

export default Header;
