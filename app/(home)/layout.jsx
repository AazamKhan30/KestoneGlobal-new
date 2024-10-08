import BackToTop from "@/components/_common/BackToTop";
import Footer from "@/components/_common/footer/Footer";
import Header from "@/components/_common/header/Header";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
export default function homeLayout({ children }) {
  return (
    <>
      <Header variant="dark" />
      <GoogleTagManager gtmId="GTM-NMPGBC2" />
      {children}
    </>
  );
}
