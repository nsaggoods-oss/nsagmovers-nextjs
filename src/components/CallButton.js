"use client";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { getRegionAndNumber } from "../geoService";


const CallButton = () => {
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


  const makeCall = () => {
    if (locationData.phoneNumber) {
      window.open(`tel:+${locationData.phoneNumber}`);
    } else {
      window.open(`tel:+923208101755`);
    }
  };



  return (
    <div
      style={{
        position: 'fixed',
        bottom: '85px',
        left: '29px',
        zIndex: 1000,
      }}
    >
      <button
        onClick={makeCall}
        style={{
          backgroundColor: '#007BFF',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FontAwesomeIcon icon={faPhone} style={{ color: 'white', fontSize: '24px' }} />
      </button>
    </div>
  );
};

export default CallButton;
