import Image from "next/image";
const victoryData = [
  {
    id: 1,
    imgUrl: "/images/vicoryImg1.png",
  },

  {
    id: 2,
    title: "V",
    desc: "Value Creation",
  },

  {
    id: 3,
    imgUrl: "/images/vicoryImg2.png",
  },
  {
    id: 4,
    title: "I",
    desc: "Integrity",
  },

  {
    id: 5,
    imgUrl: "/images/vicoryImg3.png",
  },

  {
    id: 6,
    title: "C",
    desc: "Customer Delight",
  },

  {
    id: 7,
    imgUrl: "/images/vicoryImg4.png",
  },

  {
    id: 8,
    title: "T",
    desc: "Teamwork",
  },

  {
    id: 9,
    imgUrl: "/images/vicoryImg5.png",
  },

  {
    id: 10,
    title: "O",
    desc: "Ownership",
  },

  {
    id: 11,
    imgUrl: "/images/vicoryImg6.png",
  },
  {
    id: 12,
    title: "R",
    desc: "Resilience",
  },
  {
    id: 13,
    imgUrl: "/images/vicoryImg7.png",
  },

  {
    id: 14,
    title: "Y",
    desc: "Yearning For Victory",
  },
  {
    id: 15,
    imgUrl: "/images/vicoryImg8.png",
  },
];

const VictorySection = () => {
  return (
    <section>
      <div className="row g-0">
        {victoryData &&
          victoryData.map((box) => (
            <div className="col-md-4">
              {box.imgUrl ? (
                <div className="vImgBox">
                  <Image
                    src={box.imgUrl}
                    fill
                    alt="victory Image"
                    sizes="(max-width: 767px) 100vw, 900px"
                  />
                </div>
              ) : (
                <div className="vTextBox bg-light">
                  <div className="vContent">
                    <h1 className="fs58 fw800 altFont text-uppercase mb-10 darkGray">
                      {box.title}
                    </h1>
                    <span className="fs14 lh26 altFont mb-10 textMediumGray text-uppercase fw-normal">
                      {box.desc}
                    </span>
                    <div className="mt-40 mb-0  mx-auto d-flex align-items-center flex-nowrap">
                      <span className="vSep"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default VictorySection;
