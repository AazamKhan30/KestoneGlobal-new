"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const clientLogoData = [
  { id: "1", image: "/images/clients/3m.png" },
  { id: "2", image: "/images/clients/acer.png" },
  { id: "3", image: "/images/clients/airtel.png" },
  { id: "4", image: "/images/clients/amazon.png" },
  { id: "5", image: "/images/clients/apple.png" },
  { id: "6", image: "/images/clients/Asus.png" },
  { id: "7", image: "/images/clients/aws.png" },
  { id: "8", image: "/images/clients/Canada-postes.png" },
  { id: "9", image: "/images/clients/CII.png" },
  { id: "10", image: "/images/clients/cisco.png" },
  { id: "11", image: "/images/clients/citrix.png" },
  { id: "12", image: "/images/clients/Clubmahindra.png" },
  { id: "13", image: "/images/clients/CNBC.png" },
  { id: "14", image: "/images/clients/comverg.png" },
  { id: "15", image: "/images/clients/delltechnologies.png" },
  { id: "16", image: "/images/clients/Economictimes.png" },
  { id: "17", image: "/images/clients/freecharge.png" },
  { id: "18", image: "/images/clients/gecapital.png" },
  { id: "19", image: "/images/clients/genesys.png" },
  { id: "20", image: "/images/clients/google.png" },
  { id: "21", image: "/images/clients/hcl.png" },
  { id: "22", image: "/images/clients/hdfcsales.png" },
  { id: "23", image: "/images/clients/HIMSS.png" },
  { id: "24", image: "/images/clients/ibm.png" },
  { id: "25", image: "/images/clients/keysight.png" },
  { id: "26", image: "/images/clients/lenovo.png" },
  { id: "27", image: "/images/clients/Livemint.png" },
  { id: "28", image: "/images/clients/Mailtoday.png" },
  { id: "29", image: "/images/clients/Max-bupa.png" },
  { id: "30", image: "/images/clients/maxlife.png" },
  { id: "31", image: "/images/clients/Mcafree.png" },
  { id: "32", image: "/images/clients/Ministerofhealth.png" },
  { id: "33", image: "/images/clients/mocrosoft.png" },
  { id: "34", image: "/images/clients/nasscom.png" },
  { id: "35", image: "/images/clients/nationalinstrument.png" },
  { id: "36", image: "/images/clients/nike.png" },
  { id: "37", image: "/images/clients/nokia.png" },
  { id: "38", image: "/images/clients/nowconfer.png" },
  { id: "39", image: "/images/clients/nvida.png" },
  { id: "40", image: "/images/clients/Outlook.png" },
  { id: "41", image: "/images/clients/pernodricard.png" },
  { id: "42", image: "/images/clients/Petronas.png" },
  { id: "43", image: "/images/clients/polycom.png" },
  { id: "44", image: "/images/clients/raymond.png" },
  { id: "45", image: "/images/clients/RCH.png" },
  { id: "46", image: "/images/clients/rci.png" },
  { id: "47", image: "/images/clients/Redhat.png" },
  { id: "48", image: "/images/clients/Samsung.png" },
  { id: "49", image: "/images/clients/sap.png" },
  { id: "50", image: "/images/clients/seagate.png" },
  { id: "51", image: "/images/clients/Shopclues.png" },
  { id: "52", image: "/images/clients/singtel.png" },
  { id: "53", image: "/images/clients/snapdeal.png" },
  { id: "54", image: "/images/clients/stt.png" },
  { id: "55", image: "/images/clients/Sun-pharma.png" },
  { id: "56", image: "/images/clients/tally.png" },
  { id: "57", image: "/images/clients/Tatasteel.png" },
  { id: "58", image: "/images/clients/Titan.png" },
  { id: "59", image: "/images/clients/tomtom.png" },
  { id: "60", image: "/images/clients/trend.png" },
];

const ClientLogos = ({ variant, border }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 600,
    // cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className={`logoSlider ${border && "border-bottom"} ${variant}`}>
      <div className="container">
        {clientLogoData && (
          <Slider {...settings}>
            {clientLogoData &&
              clientLogoData.map((logo) => (
                <div className="clientLogo" key={logo.id}>
                  <Image
                    src={logo.image}
                    alt={`'client logo' ${logo.id}`}
                    width={164}
                    height={123}
                  />
                </div>
              ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default ClientLogos;
