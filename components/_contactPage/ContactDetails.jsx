import ContactCard from "./ContactCard";
const contactData = [
  {
    id: "1",
    imgUrl: "/images/dubaiFlag.png",
    title: "Dubai",
    desc: "Aspin Commercial Tower,\n Office# 31-18,\n Sheikh Zayed Road,\n PO Box 478500, Dubai.",
    email: "saurabhm@kestoneglobal.com",
    mob: "+91 9716299360",
  },

  {
    id: "2",
    imgUrl: "/images/indiaFlag.png",
    title: "India",
    desc: "A 45, 1st Floor,\n Mohan Co Operative Industrial Estate\n, New Delhi\n, Delhi, India 110044",
    email: "saurabhm@kestoneglobal.com",
    mob: "+91 9716299360",
  },

  {
    id: "3",
    imgUrl: "/images/indonesiaFlag.png",
    title: "Indonesia",
    desc: "Gedung Pesona North Kebayoran Lama,\n Kebayoran Lama,\n South Jakarta City,\n Jakarta 12240",
    email: "myra.c@kestoneglobal.com",
    mob: "+62 811-9332-452",
    email2: "fitri.m@kestoneglobal.com",
    mob2: "+62 822-1181-3911",
  },
  {
    id: "4",
    imgUrl: "/images/singaporeFlag.png",
    title: "Singapore",
    desc: "Level 9, Republic Plaza\n 9 Raffles Place\n, Singapore – 048619",
    email: "abhilash.m@kestoneglobal.com",
    mob: "+65 9055 4959",
    email2: "sunder.n@kestoneglobal.com",
    mob2: "+65 9842 4345",
  },

  {
    id: "5",
    imgUrl: "/images/usFlag.png",
    title: "US",
    desc: "5201\n Great America Parkway Suite 350\n, Santa Clara, CA 95054",
    email: "nisha.c@kestoneglobal.com",
    mob: "+1 (360) 224-6168",
  },
];

import React from "react";

const ContactDetails = () => {
  return (
    <section className="section-padding-lg">
      <div className="container">
        <div className="row justify-content-center">
          {contactData &&
            contactData.map((card) => (
              <div className="col-md-4">
                <ContactCard {...card} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
