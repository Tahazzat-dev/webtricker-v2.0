import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/provider/reduxProvider";
import BodyEventListeners from "@/sharedComponets/DOM/BodyEventListeners";
import ReactToastifyMessage from "@/sharedComponets/DOM/ReactToastifyMessage";
import { ThemeProvider } from "@/provider/ThemeProvider";
import DemoThemeToggler from "@/tests/DemoThemeToggler";
import InitializeAnimationPlugin from "@/sharedComponets/DOM/InitializeAnimationPlugin";

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Webtricker",
  description: "Web Design and Development Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body
        className={`wt_fs-base ${syne.className} ${syne.variable}`}
      >
        <ThemeProvider>
          <ReduxProvider>
            {children}

            {/* Demo dark theme toggler to check dark / light theem */}
            <DemoThemeToggler />

            {/* ===== portal to show modals ====== */}
            <div className="w-full" id="modal_portal"></div>
            <BodyEventListeners />
            <InitializeAnimationPlugin />
          </ReduxProvider>
        </ThemeProvider>
        <ReactToastifyMessage />
      </body>
    </html>
  );
}
