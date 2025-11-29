"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="
      fixed top-0 left-0 w-full z-50
      backdrop-blur-xl bg-[#0a183d]/60
      border-b border-white/10
    ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Titre */}
        <Link href="/" className="text-lg font-semibold text-sky-300">
          Green IT
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <p className="text-sky-300 font-semibold tracking-wide text-sm">
        Éco-conception web interactive
      </p>
        </nav>
      </div>
    </header>
  );
}
