import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-base-200 text-base-content absolute bottom-0 border-t border-base-300/50">
      <aside className="items-center grid-flow-col">
        <Link href={"/"}>
          <p className="opacity-70 hover:opacity-100 transition">
            Copyright © 2025 EcoWeb
          </p>
        </Link>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <p>Restez green avec EcoWeb 🌱</p>
      </nav>
    </footer>
  );
}

