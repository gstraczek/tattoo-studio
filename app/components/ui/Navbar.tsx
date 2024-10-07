import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 mb-8">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center text-xl font-bold text-blue-600">
        <Image src="/logo.jfif" alt="Logo" className="h-8 mr-2" />
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Link href="/about" className="text-gray-600 hover:text-gray-900">
          o mnie
        </Link>
        <Link href="/services" className="text-gray-600 hover:text-gray-900">
          kup voucher
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">
          kontakt
        </Link>
      </div>
    </div>
  </nav>
  );
}