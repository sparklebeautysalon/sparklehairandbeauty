import React, { useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Avicon from "../../Images/logohd.jpg";

const WhatsApp = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const button = document.querySelector('.floating-whatsapp-button');
      if (button) button.click();
    }, 1000); // Delay to ensure the component is mounted

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
      }}>
      <FloatingWhatsApp
        phoneNumber="+447944733339"
        accountName="Need Help"
        allowEsc
        allowClickAway
        notification
        notificationSound
        chatMessage="Hi there! 👋 How can we help you today?"
        statusMessage="Typically replies within a few minutes"
        avatar={Avicon}
      />
    </div>
  );
};

export default WhatsApp;
