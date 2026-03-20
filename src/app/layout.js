import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/app/providers/ReduxProvider";
import TanstackProvider from "@/app/providers/TanstackProvider";
import ToastProvider from "@/app/providers/ToastProvider";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import ScrollToTop from "@/components/Common/ScrollToTop";
import AuthProvider from "@/app/providers/AuthProvider";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-libre-franklin",
  display: "swap",
});

export const metadata = {
  title: "Guided Solution",
  description: "Guided Solutions - Executive Search & Strategic Recruiting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
        rel="stylesheet"
      />
      </head>
      <body className={libreFranklin.variable} suppressHydrationWarning>
        <ReduxProvider>
          <AuthProvider>
            <TanstackProvider>
              <ToastProvider />
              <ScrollToTop />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </TanstackProvider>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}




