import "bootstrap/dist/css/bootstrap.css";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
const cairo = Cairo({ subsets: ["arabic"] });
export const metadata = {
  title: "Barei",
  description: "Generated by create next app",
};

export default function RootLayout({ children}) {
  return (
    <html lang="ar">
      <body className={` ${cairo.className}` } dir="rtl">
          {children}
          <Toaster />
      </body>
    </html>
  );
}