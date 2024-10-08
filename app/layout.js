import { Metadata } from "next";
import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/globals.css";
import "@/public/css/style.css";
import "@/public/css/responsive.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "B2B Lead Generation Agency - Kestone",
    template: "%s - Kestone",
  },
  description:
    "Looking to nurture a focused account list or expanding markets by building databases, it pays off to work with a B2B lead generation agency.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
