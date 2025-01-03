import React from 'react';
import whatsAppButton from '../assets/icons/whatsAppButton.png';
const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+21658693946&text=olá"
      className="whatsapp-button"
      target="_blank"
      style={{ position: 'fixed', right: '15px', bottom: '15px', zIndex: 10 }}
    >
      <img src={whatsAppButton} alt="botão whatsapp" className="h-16 w-16" />
    </a>
  );
};

export default WhatsAppButton;
