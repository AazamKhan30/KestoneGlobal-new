import Header from "@/components/_common/header/Header";
import ContactDetails from "@/components/_contactPage/ContactDetails";
import ContactForm from "@/components/_contactPage/ContactForm";
import ContactHeader from "@/components/_contactPage/ContactHeader";
export const metadata = {
  title: "Contact us",
  description:
    "We are here to answer any queries you may have for our business. Drop us a line or give us a heads upif you think we may do something awesome for you.",
};
const Contact = () => {
  return (
    <>
      <ContactHeader
        subTitle="We would love to hear from you"
        title="Let’s get in touch"
        description="We are here to answer any queries you may have for our business. Drop us a line or give us a heads up if you think we may do something awesome for you."
      />
      <ContactForm />
      <ContactDetails />
    </>
  );
};

export default Contact;
