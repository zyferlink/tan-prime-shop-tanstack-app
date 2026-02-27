import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white border-b px-4 backdrop-blur-lg">
      <nav>
        <Link to="/">TanPrime Shop</Link>
      </nav>
    </header>
  );
}
