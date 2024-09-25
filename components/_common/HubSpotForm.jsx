"use client";
import React from "react";
import { useEffect } from "react";
const HubSpotForm = ({ formId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "5118950",
          formId: formId,
          target: "#myform",
        });
      }
    });
  }, []);
  return <div id="myform" className=""></div>;
};

export default HubSpotForm;
