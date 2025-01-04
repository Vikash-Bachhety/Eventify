"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-extrabold text-white mb-6 animate-pulse">
          404
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          The page you’re looking for isn’t available yet. Coming soon!
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/">
            <Button className="px-6 py-3 bg-white text-purple-600 hover:bg-gray-100 rounded-md transition">
              Back to Home
            </Button>
          </Link>
          <Link
            href="/contact"
            className="px-6 py-1 bg-transparent border border-white text-white hover:bg-white hover:text-purple-600 rounded-md transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
