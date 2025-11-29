import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-base-100/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-base-content/60 sm:flex-row">
        <Link href="/" className="opacity-70 hover:opacity-100 transition">
          <span>© 2025 Green IT — Tous droits réservés</span>
        </Link>
        <p className="flex items-center gap-1">
          <span className="text-emerald-400">●</span>
          <span>Conçu pour des expériences web plus sobres 🌱</span>
        </p>
      </div>
    </footer>
  );
}
