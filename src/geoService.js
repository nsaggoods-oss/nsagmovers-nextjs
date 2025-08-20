// src/services/geoService.js

export const getRegionAndNumber = async () => {
  const regionNumbers = {
    Punjab: "923208101755", // Lahore number
    Sindh: "923208101750", // Karachi number
    Islamabad: "923208101991", // Islamabad number
  };

  let result = {
    phoneNumber: regionNumbers.Punjab, // Default number
    region: "",
    city: "",
  };

  if (navigator.geolocation) {
    try {
      const getPosition = () =>
        new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

      const position = await getPosition();
      const { latitude, longitude } = position.coords;

      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );
      const data = await response.json();

      const region = data.principalSubdivision || "";
      const city = data.city || "";

      // Match the region with your predefined numbers
      if (region.includes("Punjab")) {
        result.phoneNumber = regionNumbers.Punjab;
      } else if (region.includes("Sindh")) {
        result.phoneNumber = regionNumbers.Sindh;
      } else if (city.includes("Islamabad") || city.includes("Rawalpindi")) {
        result.phoneNumber = regionNumbers.Islamabad;
      }

      result.region = region;
      result.city = city;
    } catch (error) {
      console.error("Error fetching geolocation or region data:", error);
    }
  } else {
    console.error("Geolocation is not supported by your browser.");
  }

  return result;
};
