

"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { getRegionAndNumber } from "../geoService";

const WhatsAppButton = () => {
  const [locationData, setLocationData] = useState({
    phoneNumber: "",
    region: "",
    city: "",
  });

  useEffect(() => {
    const fetchLocationData = async () => {
      const data = await getRegionAndNumber();
      setLocationData(data);
    };

    fetchLocationData();
  }, []);

  const openWhatsApp = () => {
    if (!locationData.phoneNumber) {
      alert("Unable to determine your region. Please try again.");
      return;
    }

    const message = encodeURIComponent(
      "Hello, I would like to know more about your services!"
    );
    const whatsappURL = `https://wa.me/${locationData.phoneNumber}?text=${message}&type=phone_number&app_absent=0`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "85px",
        right: "29px",
        zIndex: 1000,
      }}
    >
      <button
        onClick={openWhatsApp}
        style={{
          backgroundColor: "#25D366",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          style={{ color: "white", fontSize: "36px" }}
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;
