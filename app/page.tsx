import type { Metadata } from "next";
import Image from "next/image";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Aleksandra Szajna - tatoo studio",
};

export default function IndexPage(): JSX.Element {
  return (
    <div className="container mx-auto p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <li className="bg-white shadow-md rounded-lg overflow-hidden">
          <Link href="/donate-with-embedded-checkout" className="block">
            <div className="relative w-full h-64">
              {/* <Image
                alt="voucher"
                src="/100.jpg"
                layout="fill"
                objectFit="cover"
                className="hover:opacity-75 transition-opacity duration-300"
              /> */}
            </div>
            <h2 className="text-center text-xl font-semibold p-4">testt</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}
