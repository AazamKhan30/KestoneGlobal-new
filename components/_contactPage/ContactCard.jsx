import Image from "next/image";
import React from "react";

const ContactCard = ({
  id,
  imgUrl,
  title,
  desc,
  email,
  mob,
  email2,
  mob2,
} = contactData) => {
  return (
    <div className="addressBox text-center">
      <div className="cityIcon mb-25 d-inline-block">
        <Image
          src={imgUrl}
          alt={`"country Flag ${id}`}
          width={49}
          height={32}
        />
      </div>
      <span className="fs14 fw600 d-inline-block w-100 text-uppercase altFont mb-1">
        {title}
      </span>
      <div className="address">
        <p className="fs14 textDark desc mb-0">{desc}</p>
      </div>
      <div className="cInfo">
        <h6>Contact Details</h6>
        <p className="mb-0">
          <a href={`mailto:${email}`}>{email}</a>
          <br />
          <a href={`tel:${mob}`}>{mob}</a>
        </p>

        {email2 && mob2 && (
          <p className="mb-0">
            {email2 && <a href={`mailto:${email2}`}>{email2}</a>}
            <br />
            {mob2 && <a href={`tel:${mob2}`}>{mob2}</a>}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
