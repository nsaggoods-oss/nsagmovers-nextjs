"use client";
import React,{ useEffect, useState } from "react";
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
    console.log(locationData.phoneNumber)
    const message = encodeURIComponent("Hello, I would like to know more about your services!");
    const whatsappURL = `https://wa.me/${locationData.phoneNumber}?text=${message}&type=phone_number&app_absent=0`;
    window.open(whatsappURL, "_blank");
  };

  // const openWhatsApp = () => {

  //   let phoneNumber;

  //   const lahoreNumber = "923208101755";
  //   const karachiNumber = "923208101750";
  //   const islamabadNumber = "923208101991";

  //   const message = encodeURIComponent(
  //     "Hello, I would like to know more about your services!"
  //   );
  //   const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}&type=phone_number&app_absent=0`;
  //   window.open(whatsappURL, "_blank");
  // };

  // const openWhatsApp = () => {
  //   const cityNumbers = {
  //     Lahore: "923208101755",
  //     Karachi: "923208101750",
  //     Islamabad: "923208101991",
  //   };

  //   let phoneNumber = cityNumbers.Lahore;
  //   const message = encodeURIComponent(
  //     "Hello, I would like to know more about your services!"
  //   );

  //   // Use Geolocation API to get the visitor's location
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       async (position) => {
  //         const { latitude, longitude } = position.coords;

  //         try {
  //           const response = await fetch(
  //             `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
  //           );
  //           const data = await response.json();
  //           const city = data.city || ""; // Get the city name from the API response

  //           // Match the city with your predefined numbers
  //           if (city.includes("Lahore")) phoneNumber = cityNumbers.Lahore;
  //           else if (city.includes("Karachi"))
  //             phoneNumber = cityNumbers.Karachi;
  //           else if (city.includes("Islamabad"))
  //             phoneNumber = cityNumbers.Islamabad;

  //           // Open WhatsApp with the selected number
  //           const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}&type=phone_number&app_absent=0`;
  //           window.open(whatsappURL, "_blank");
  //         } catch (error) {
  //           console.error("Error fetching city data:", error);
  //           alert("Unable to determine your city. Please try again later.");
  //         }
  //       },
  //       (error) => {
  //         console.error("Error with geolocation:", error);
  //         alert(
  //           "Geolocation failed. Please enable location services and try again."
  //         );
  //       }
  //     );
  //   } else {
  //     alert("Geolocation is not supported by your browser.");
  //   }
  // };

  // const openWhatsApp = () => {
  //   const regionNumbers = {
  //     Punjab: "923208101755", // Lahore number
  //     Sindh: "923208101750", // Karachi number
  //     Islamabad: "923208101991", // Islamabad number
  //   };

  //   let phoneNumber = regionNumbers.Punjab;

  //   const message = encodeURIComponent("Hello, I would like to know more about your services!");

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       async (position) => {
  //         const { latitude, longitude } = position.coords;

  //         try {
  //           // Use a reverse geocoding API to get the region and city based on latitude and longitude
  //           const response = await fetch(
  //             `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
  //           );
  //           const data = await response.json();

  //           const region = data.principalSubdivision || ""; // Region/Province (e.g., Punjab, Sindh)
  //           const city = data.city || ""; // City (e.g., Lahore, Karachi)

  //           console.log(city)
  //           // Match the region with your predefined numbers
  //           if (region.includes("Punjab")) {
  //             phoneNumber = regionNumbers.Punjab;
  //           } else if (region.includes("Sindh")) {
  //             phoneNumber = regionNumbers.Sindh;
  //           } else if (city.includes("Islamabad") || city.includes("Rawalpindi")) {
  //             phoneNumber = regionNumbers.Islamabad;
  //           }

  //           // Open WhatsApp with the selected number
  //           const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}&type=phone_number&app_absent=0`;
  //           window.open(whatsappURL, "_blank");
  //         } catch (error) {
  //           console.error("Error fetching region data:", error);
  //           alert("Unable to determine your region. Please try again later.");
  //         }
  //       },
  //       (error) => {
  //         console.error("Error with geolocation:", error);
  //         alert("Geolocation failed. Please enable location services and try again.");
  //       }
  //     );
  //   } else {
  //     alert("Geolocation is not supported by your browser.");
  //   }
  // };


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
