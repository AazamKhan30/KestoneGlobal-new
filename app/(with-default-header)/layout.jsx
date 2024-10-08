import BackToTop from "@/components/_common/BackToTop";
import Footer from "@/components/_common/footer/Footer";
import HeaderTwo from "@/components/_common/header/HeaderTwo";

export default function OtherLayout({ children }) {
  return (
    <>
      <HeaderTwo />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
}
