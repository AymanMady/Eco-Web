import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "./components/Toast";
import "react-toastify/dist/ReactToastify.css";
import { appName, appUrl, description } from "./manifest";
import ThemeController from "./providers/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: appName,
  description,
  metadataBase: new URL(appUrl),
  openGraph: {
    title: appName,
    description,
    url: appUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={spaceGrotesk.className}>
        <ThemeController>
          
          {/* ✔️ HEADER FIXE TRANSPARENT */}
          <Header />

          <div className="relative min-h-screen flex flex-col">
            {/* ✔️ Padding-top pour que le header ne recouvre pas le contenu */}
            <main className="flex-1 pt-[120px] pb-16">
              <div className="mx-auto max-w-6xl px-4">
                {children}
              </div>
            </main>

            <Footer />
          </div>

          <ToastContainer />
        </ThemeController>
      </body>
    </html>
  );
}
