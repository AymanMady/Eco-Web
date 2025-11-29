import { navbarLinks } from "@/navbar-links";
import Link from "next/link";

export default function Navbar() {
  return (
    <header id="app-navbar">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-sky-500/30 bg-slate-950/85 px-6 py-3 backdrop-blur-xl shadow-[0_18px_60px_rgba(16,185,129,0.45)]">
          {/* Logo texte */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-sky-100">
              Green IT
            </span>
            <span className="text-xs text-slate-400">
              Éco-conception web interactive
            </span>
          </Link>

          {/* Liens desktop */}
          <ul className="hidden items-center gap-2 text-sm font-medium md:flex">
            {navbarLinks.map((link) => (
              <li key={link.url}>
                <Link href={link.url} className="pill-button-ghost">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Menu mobile */}
          <div className="md:hidden">
            <details className="dropdown dropdown-end">
              <summary className="btn btn-sm btn-ghost rounded-full border border-sky-500/40 text-slate-100">
                Menu
              </summary>
              <ul className="menu dropdown-content glass-card mt-3 w-52 p-2 text-sm">
                {navbarLinks.map((link) => (
                  <li key={link.url}>
                    <Link href={link.url}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </nav>
      </div>
    </header>
  );
}
