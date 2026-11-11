
import Link from "next/link";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "All Meetings", href: "/meetings" },
  { name: "Current Sunday", href: "/meetings/current" },
];

export default function NavLinks() {
  return (
    <nav
      aria-label="Main navigation"
      className="border-b bg-white shadow-sm"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 py-4">
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-100 hover:text-blue-900"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
