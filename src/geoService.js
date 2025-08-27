export const getRegionAndNumber = async () => {
  const regionNumbers = {
    Punjab: "923208101755", // Lahore
    Sindh: "923208101750", // Karachi
    Islamabad: "923208101991", // Islamabad
  };

  let result = {
    phoneNumber: regionNumbers.Punjab, // default
    region: "",
    city: "",
  };

  if (typeof navigator !== "undefined" && navigator.geolocation) {
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

      const region = (data.principalSubdivision || "").toLowerCase();
      const city = (data.city || "").toLowerCase();

      console.log(region);
      // 🔑 Normalize matching
      if (region.includes("punjab")) {
        result.phoneNumber = regionNumbers.Punjab;
      } else if (region.includes("sindh") || city.includes("karachi")) {
        result.phoneNumber = regionNumbers.Sindh;
      } else if (
        region.includes("islamabad") ||
        city.includes("islamabad") ||
        city.includes("rawalpindi")
      ) {
        result.phoneNumber = regionNumbers.Islamabad;
      }

      result.region = data.principalSubdivision || "";
      result.city = data.city || "";
    } catch (error) {
      console.error("Error fetching geolocation or region data:", error);
    }
  } else {
    console.error("Geolocation is not supported by your browser.");
  }

  return result;
};
