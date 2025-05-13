import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/provider/reduxProvider";
import BodyEventListeners from "@/sharedComponets/DOM/BodyEventListeners";
import ReactToastifyMessage from "@/sharedComponets/DOM/ReactToastifyMessage";
import { ThemeProvider } from "@/provider/ThemeProvider";
import DemoThemeToggler from "@/tests/DemoThemeToggler";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Accompanied",
  description: "Your event management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body
        className={`acp_fs-base ${inter.variable} antialiased font-[family-name:var(--font-inter)]`}
      >
        <ThemeProvider>
          <ReduxProvider>
            {children}

            {/* Demo dark theme toggler to check dark / light theem */}
            <DemoThemeToggler />

            {/* ===== portal to show modals ====== */}
            <div className="w-full" id="modal_portal"></div>
            <BodyEventListeners />
          </ReduxProvider>
        </ThemeProvider>
        <ReactToastifyMessage />
      </body>
    </html>
  );
}
